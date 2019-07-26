from sqlalchemy.ext.hybrid import hybrid_property
from marshmallow import fields, validates_schema, ValidationError
from app import db, ma, bcrypt
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
    password_hash = db.Column(db.String(128), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    occupation = db.Column(db.String(50), nullable=False)
    industry = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(300))
    image = db.Column(db.Text, nullable=False, unique=True)
    skills = db.relationship('Skill', secondary=user_skills, backref='users')

    @hybrid_property
    def password(self):
        pass

    @password.setter
    def password(self, plaintext):
        self.password_hash = bcrypt.generate_password_hash(plaintext).decode('utf-8')

    def validate_password(self, plaintext):
        return
        bcrypt.check_password_hash(self.password_hash, plaintext)

class UserSchema(ma.ModelSchema, BaseSchema):

    @validates_schema
    # pylint: disable=R0201
    def check_passwords_match(self, data):
        if data.get('password') != data.get('password_confirmation'):
            raise ValidationError(
                'Passwords do not match',
                'password_confirmation'
            )

    class Meta:
        model = User

    skills = fields.Nested('SkillSchema', many=True, exclude=('created_at', 'updated_at', 'password_hash',))
    created_events = fields.Nested('EventSchema', many=True, only=('name', 'id'))

# class UserComment(db.Model, BaseModel):
#
#     __tablename__ = 'user_comments'
#
#     content = db.Column(db.Text, nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
#     user = db.relationship('User', backref='user_comments')
#     commentor_id = db.Column(db.Integer, db.ForeignKey('users.id'))
#     commentor = db.relationship('User', backref='user_comments')
