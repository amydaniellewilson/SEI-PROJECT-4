from flask import Blueprint, jsonify, request
from models.user import User, UserSchema
from lib.secure_route import secure_route


api = Blueprint('users', __name__)
user_schema = UserSchema()

@api.route('/users', methods=['GET'])
def index():
    users = User.query.all()
    return user_schema.jsonify(users, many=True), 200

@api.route('/users/<int:user_id>', methods=['GET'])
def show(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'Not Found'}), 404
    return user_schema.jsonify(user), 200

@api.route('/users', methods=['POST'])
def create():
    data = request.get_json()
    user, errors = user_schema.load(data)
    if errors:
        return jsonify(errors), 422
    user.save()
    return user_schema.jsonify(user), 201

@api.route('/users/<int:user_id>', methods=['PUT'])
@secure_route
def update(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'Not Found'}), 404
    data = request.get_json()
    user, errors = user_schema.load(data, instance=user, partial=True)
    if errors:
        return jsonify(errors), 422
    user.save()
    return user_schema.jsonify(user), 202

@api.route('/users/<int:user_id>', methods=['DELETE'])
@secure_route
def delete(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'Not Found'}), 404
    user.remove()
    return '', 204
