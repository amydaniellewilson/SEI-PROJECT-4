from flask import Blueprint
from models.event import Event, EventSchema

api = Blueprint('events', __name__)
event_schema = EventSchema()

@api.route('/events', methods=['GET'])
def index():
    events = Event.query.all()
    return event_schema.jsonify(events, many=True), 200
