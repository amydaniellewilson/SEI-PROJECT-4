from app import app
from controllers import users, events, auth

app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(events.api, url_prefix='/api')
app.register_blueprint(auth.api, url_prefix='/api')
