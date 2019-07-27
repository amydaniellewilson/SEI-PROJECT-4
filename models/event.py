from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

attendees = db.Table(
    'attendees',
    db.Column('event_id', db.Integer, db.ForeignKey('events.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'))
)

class Event(db.Model, BaseModel):

    __tablename__ = 'events'

    name = db.Column(db.String(30), nullable=False)
    date = db.Column(db.String(15), nullable=False)
    time = db.Column(db.String(15), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    postcode = db.Column(db.String(15), nullable=False)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
    industry = db.Column(db.String(50), nullable=False)
    details = db.Column(db.Text, nullable=False, unique=True)
    image = db.Column(db.String(300), unique=True)
    creator = db.relationship('User', backref='created_events')
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    attending = db.relationship('User', secondary=attendees, backref='attendees')

class EventSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Event

    event_comments = fields.Nested('EventCommentSchema', many=True, exclude=('created_at', 'updated_at', 'event'))
    creator = fields.Nested('UserSchema', only=('id', 'username'))
    attending = fields.Nested('UserSchema', many=True, only=('id', 'username'))

class EventComment(db.Model, BaseModel):

    __tablename__ = 'event_comments'

    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='event_comments')
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'))
    event = db.relationship('Event', backref='event_comments')

class EventCommentSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = EventComment

    user = fields.Nested('UserSchema', only=('id', 'username'))
