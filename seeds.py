from app import app, db
from models.user import User
from models.skill import Skill
from models.event import Event, Comment

with app.app_context():
    db.drop_all()
    db.create_all()

    # SKILLS

    software_engineering = Skill(skill='Software Engineering')
    javascript = Skill(skill='JavaScript')
    react = Skill(skill='React')
    html = Skill(skill='HTML')
    css = Skill(skill='CSS')
    python = Skill(skill='Python')

    # USERS

    amy_wilson = User(
        username='amywilson',
        email='amy@email',
        password_hash='pass',
        name='Amy Wilson',
        occupation='Junior Software Engineer',
        industry='Software Engineering',
        location='London, United Kingdom',
        description='Currently studying Software Engineering at General Assembly in London. I will be embarking on my career within the tech industry from September 2019',
        image='https://i.imgur.com/9gKMYKc.jpg?1',
        skills=[software_engineering]
    )

    joss_farmer = User(
        username='jossfarmer',
        email='joss@email',
        password_hash='pass',
        name='Joss Farmer',
        occupation='Junior Software Engineer',
        industry='Senior Software Engineering',
        location='London, United Kingdom',
        description='I have worked in the tech industry for 10 years and currently hold a Senior Position at Sky.',
        image='https://i.imgur.com/QOTx7EU.jpg?1',
        skills=[software_engineering, html, css, javascript, react, python]
    )

    #EVENTS

    women_in_tech = Event(
        date='12/09/2019',
        time='18:00',
        address='123 Tech Street, London',
        postcode='E1 1AB',
        industry='Software Engineering',
        details='There will be a talk from esteemed Senior Developer Joss Farmer followed by cheese, wine and networking. All levels welcome, please join us for a fantastic evening.',
        creator=joss_farmer
    )

    # COMMENTS

    comment_one = Comment(
        content='What a great event.',
        event=women_in_tech,
        user=amy_wilson
    )

    db.session.add(software_engineering)
    db.session.add(javascript)
    db.session.add(react)
    db.session.add(html)
    db.session.add(css)
    db.session.add(python)
    db.session.add(amy_wilson)
    db.session.add(joss_farmer)
    db.session.add(women_in_tech)
    db.session.add(comment_one)

    db.session.commit()
