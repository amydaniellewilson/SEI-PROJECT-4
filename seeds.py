from app import app, db
from models.user import User

with app.app_context():
    db.drop_all()
    db.create_all()

    amy_wilson = User(
        username='amywilson',
        email='amy@email',
        password_hash='pass',
        name='Amy Wilson',
        occupation='Junior Software Engineering',
        industry='Software Engineering',
        location='London, United Kingdom',
        image='https://i.imgur.com/9gKMYKc.jpg?1'

    )

    db.session.add(amy_wilson)

    db.session.commit()
