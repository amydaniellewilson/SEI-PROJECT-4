from marshmallow import fields
from app import db, ma
from .base import BaseModel, BaseSchema

class Skill(db.Model, BaseModel):

    __tablename__ = 'skills'

    skill = db.Column(db.String(50), unique=True, nullable=False)

class SkillSchema(ma.ModelSchema, BaseSchema):
    skills = fields.Nested('UserSchema', many=True, only=('name', 'id'))

    class Meta:
        model = Skill
