from app import db, ma
from marshmallow import fields
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

class UserSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = User

    skills = fields.Nested('SkillSchema', many=True, exclude=('created_at', 'updated_at'))
    created_events = fields.Nested('EventSchema', many=True, only=('name', 'id'))
