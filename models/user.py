from datetime import datetime, timedelta
import jwt
from sqlalchemy.ext.hybrid import hybrid_property
from marshmallow import fields, validates_schema, ValidationError
from app import db, ma, bcrypt
from config.environment import secret
from .base import BaseModel, BaseSchema
# pylint: disable=W0611
from .skill import Skill, SkillSchema

user_skills = db.Table(
    'user_skills',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('skill_id', db.Integer, db.ForeignKey('skills.id'))
)

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(128), nullable=False, unique=True)
    password_hash = db.Column(db.String(128))
    name = db.Column(db.String(50))
    occupation = db.Column(db.String(50))
    industry = db.Column(db.String(50))
    location = db.Column(db.String(50))
    description = db.Column(db.String(300))
    image = db.Column(db.Text, unique=True)
    skills = db.relationship('Skill', secondary=user_skills, backref='users')

    @hybrid_property
    def password(self):
        pass

    @password.setter
    def password(self, plaintext):
        self.password_hash = bcrypt.generate_password_hash(plaintext).decode('utf-8')

    def validate_password(self, plaintext):
        return bcrypt.check_password_hash(self.password_hash, plaintext)

    def generate_token(self):
        payload = {
            'exp': datetime.utcnow() + timedelta(days=1),
            'iat': datetime.utcnow(),
            'sub': self.id
        }

        token = jwt.encode(
            payload,
            secret,
            'HS256'
        ).decode('utf-8')

        return token

class UserSchema(ma.ModelSchema, BaseSchema):

    @validates_schema
    # pylint: disable=R0201
    def check_passwords_match(self, data):
        if data.get('password') != data.get('password_confirmation'):
            raise ValidationError(
                'Passwords do not match',
                'password_confirmation'
            )

    password = fields.String(required=True)
    password_confirmation = fields.String(required=True)

    class Meta:
        model = User
        exclude = ('password_hash',)

    skills = fields.Nested('SkillSchema', many=True, exclude=('created_at', 'updated_at',))
    created_events = fields.Nested('EventSchema', many=True, only=('name', 'id'))
