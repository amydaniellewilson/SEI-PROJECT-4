from app import db, ma
from .base import BaseModel, BaseSchema

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(128), nullable=False, unique=True)
    password_hash = db.Column(db.String(128), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    occupation = db.Column(db.String(50), nullable=False)
    industry = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(50), nullable=False)
    image = db.Column(db.Text, nullable=False, unique=True)

class UserSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = User
