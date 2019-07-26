from flask import Blueprint, jsonify, request
from models.user import User, UserSchema

api = Blueprint('auth', __name__)
user_schema = UserSchema()

@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user, errors = user_schema.load(data)
    if errors:
        return jsonify(errors), 422
    user.save()
    return jsonify({'message': 'Registration Successful'}), 201
