from flask import Blueprint, jsonify, request, g
from models.event import Event, EventSchema, EventComment, EventCommentSchema
from lib.secure_route import secure_route

api = Blueprint('events', __name__)
event_schema = EventSchema()
comment_schema = EventCommentSchema()

@api.route('/events', methods=['GET'])
def index():
    events = Event.query.all()
    return event_schema.jsonify(events, many=True), 200

@api.route('/events/<int:event_id>', methods=['GET'])
def show(event_id):
    event = Event.query.get(event_id)
    if not event:
        return jsonify({'message': 'Not  Found'}), 404
    return event_schema.jsonify(event), 200

@api.route('/events', methods=['POST'])
@secure_route
def create():
    data = request.get_json()
    event, errors = event_schema.load(data)
    if errors:
        return jsonify(errors), 422
    event.save()
    return event_schema.jsonify(event), 201

@api.route('/events/<int:event_id>', methods=['PUT'])
@secure_route
def update(event_id):
    event = Event.query.get(event_id)
    if not event:
        return jsonify({'message': 'Not Found'}), 404
    if event.creator != g.current_user:
        return jsonify({'message': 'Unauthorized'})
    data = request.get_json()
    event, errors = event_schema.load(data, instance=event, partial=True)
    if errors:
        return jsonify(errors), 422
    event.save()
    return event_schema.jsonify(event), 202

@api.route('/events/<int:event_id>', methods=['DELETE'])
@secure_route
def delete(event_id):
    event = Event.query.get(event_id)
    if not event:
        return jsonify({'message': 'Not Found'}), 404
    event.remove()
    return '', 204

@api.route('/events/<int:event_id>/comments', methods=['POST'])
@secure_route
def comment_create(event_id):
    event = Event.query.get(event_id)
    if not event:
        return jsonify({'message': 'Not Found'}), 404
    data = request.get_json()
    comment, errors = comment_schema.load(data)
    if errors:
        return jsonify(errors), 422
    comment.event = event
    event.save()
    return comment_schema.jsonify(comment), 202

@api.route('/events/<int:event_id>/comments/<int:event_comment_id>', methods=['DELETE'])
@secure_route
def comment_delete(**kwargs):
    comment = EventComment.query.get(kwargs['event_comment_id'])
    if not comment:
        return jsonify({'message': 'Not Found'}), 404
    comment.remove()
    return '', 204

@api.route('/events/<int:event_id>/attending', methods=['POST'])
@secure_route
def attending(event_id):
    event = Event.query.get(event_id)
    if not event:
        return jsonify({'message': 'Not Found'}), 404
    event.attending.append(g.current_user)
    event.save()
    return event_schema.jsonify(event), 201
