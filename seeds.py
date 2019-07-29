from app import app, db
from models.user import User, UserSchema
from models.skill import Skill
from models.event import Event, EventComment

user_schema = UserSchema()

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
    ruby = Skill(skill='Ruby')
    mentoring = Skill(skill='Mentoring')

    # USER PROFILES

    amy_wilson, errors = user_schema.load({
        'username': 'amywilson',
        'email': 'amy@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Amy Wilson',
        'occupation': 'Junior Software Engineer',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'Currently studying Software Engineering at General Assembly in London. I will be embarking on my career within the tech industry from September 2019',
        'image': 'https://i.imgur.com/WCByxUF.jpg'
    })

    if errors:
        raise Exception(errors)

    amy_wilson.skills = [software_engineering]

    joss_farmer, errors = user_schema.load({
        'username': 'jossfarmer',
        'email': 'joss@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Joss Farmer',
        'occupation': 'Senior Software Engineer',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'I have worked in the tech industry for 25 years and currently hold a Senior Position at Sky.',
        'image': 'https://i.imgur.com/fdRdbj8.jpg'
    })

    if errors:
        raise Exception(errors)

    joss_farmer.skills = [software_engineering, html, css, javascript, react, python, mentoring]

    ines_alston, errors = user_schema.load({
        'username': 'inesalston',
        'email': 'ines@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Ines Alston',
        'occupation': 'Junior Software Engineer',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'I have recently graduated from a software engineering bootcamp. I am looking for a mentor to help me progress.',
        'image': 'https://i.imgur.com/FmjQj3i.jpg'
    })

    if errors:
        raise Exception(errors)

    ines_alston.skills = [software_engineering, html, css, javascript, react, python]

    crystal_crowther, errors = user_schema.load({
        'username': 'crystal_crowther',
        'email': 'crystal@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Crystal Crowther',
        'occupation': 'Senior Software Engineer',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'After 10 years in the industy, I enjoy mentoring Junior Engineers to help them progress in their careers. I own my own start up tech company. ',
        'image': 'https://i.imgur.com/7xpULi2.jpg'
    })

    if errors:
        raise Exception(errors)

    crystal_crowther.skills = [software_engineering, html, css, javascript, react, python, ruby, mentoring]


    evie_rose_whelan, errors = user_schema.load({
        'username': 'evie_rose_whelan',
        'email': 'evie@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Evie-Rose Whelan',
        'occupation': 'Software Engineer',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'I completed a Computer Science Degree and have been working in the tech industry for 5 years. ',
        'image': 'https://i.imgur.com/wVauDWd.jpg'
    })

    if errors:
        raise Exception(errors)

    evie_rose_whelan.skills = [software_engineering, html, css, javascript, ruby, mentoring]

    kiki_farley, errors = user_schema.load({
        'username': 'kiki_farley',
        'email': 'kiki@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Kiki Farley',
        'occupation': 'Software Engineer',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'I love coding, it\'s my passion and I have been lucky enough to have been coding professionally for the last 3 years. I am looking to do some coaching for new graduates to help the next wave of women in tech like I was helped myself.  ',
        'image': 'https://i.imgur.com/Sr6ehbs.jpg?1'
    })

    if errors:
        raise Exception(errors)

    kiki_farley.skills = [software_engineering, html, css, javascript, react, mentoring]

    onur_soto, errors = user_schema.load({
        'username': 'onur_soto',
        'email': 'onur@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Onur Soto',
        'occupation': 'Student',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'I am starting a software engineering bootcamp at General Assembly and am looking to meet up with other women in this industry to help with my my learning process.',
        'image': 'https://i.imgur.com/7MdYBHs.jpg'
    })

    if errors:
        raise Exception(errors)

    marie_middleton, errors = user_schema.load({
        'username': 'marie_middleton',
        'email': 'marie@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Marie Middleton',
        'occupation': 'Student',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'I am 3 weeks into a 12 week coding bootcamp and just love coding so much. It\'s something I am enjoying studying but also doing for fun. ',
        'image': 'https://i.imgur.com/WvsRfVg.jpg'
    })

    if errors:
        raise Exception(errors)

    marie_middleton.skills = [html, css]

    cadence_molloy, errors = user_schema.load({
        'username': 'cadence_molloy',
        'email': 'cadence@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Cadence Molloy',
        'occupation': 'Senior Software Engineer',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'I have been in the software engineering and tech industry for 15 years since I was 16. It\'s not just my job, it\'s my passion.',
        'image': 'https://i.imgur.com/2pev2OL.jpg'
    })

    if errors:
        raise Exception(errors)

    cadence_molloy.skills = [html, css, javascript, react, ruby, software_engineering, python]

    lacie_mae_blackwell, errors = user_schema.load({
        'username': 'lacie_mae_blackwell',
        'email': 'lacie@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Lacie-Mae Blackwell',
        'occupation': 'Software Engineer',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'I am fairly new in the world of tech, I have been working at my first software engineering job for just under 12 months and enjoy it immesly. I\'d love to meet up with some other women in tech as my currwent workplace is mainly male dominated. I also have a passion for art and the theatre.',
        'image': 'https://i.imgur.com/Aj74afo.jpg'
    })

    if errors:
        raise Exception(errors)

    lacie_mae_blackwell.skills = [html, css, javascript, react]

    meera_wu, errors = user_schema.load({
        'username': 'meera_wu',
        'email': 'meera@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Meera Wu',
        'occupation': 'Senior Software Engineer',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'I own a tech company in the center of London that specialises in the design of websites for High Dental Practices. ',
        'image': 'https://i.imgur.com/p2Zq1Ju.jpg'
    })

    if errors:
        raise Exception(errors)

    meera_wu.skills = [html, css, javascript, react, python, mentoring, software_engineering, mentoring]

    hallie_lim, errors = user_schema.load({
        'username': 'hallie_lim',
        'email': 'hallie@email',
        'password': 'pass',
        'password_confirmation': 'pass',
        'name': 'Hallie Lim',
        'occupation': 'Junior Software Engineer',
        'industry': 'Software Engineering',
        'location': 'London, United Kingdom',
        'description': 'Looking to connect with and be inspired by other women in tech.',
        'image': 'https://i.imgur.com/JmisaDv.jpg'
    })

    if errors:
        raise Exception(errors)

    hallie_lim.skills = [html, css, javascript, react, python, software_engineering]

    #EVENTS

    women_in_tech = Event(
        name='Women in Tech',
        date='12/09/2019',
        time='18:00',
        address='The Sugar Loaf, 65 Cannon St, London ',
        postcode='EC4N 5AA',
        lat=51.51235,
        lng=-0.09299,
        industry='Software Engineering',
        details='There will be a talk from esteemed Senior Developer Joss Farmer followed by cheese, wine and networking. All levels welcome, please join us for a fantastic evening.',
        image='https://i.imgur.com/mQ30rT4.jpg',
        creator=joss_farmer,
        attending=[amy_wilson, joss_farmer, marie_middleton, kiki_farley, evie_rose_whelan]
    )

    javascript_monthly = Event(
        name='Javascript Monthly',
        date='13/10/2019',
        time='19:00',
        address='64–73 Minories, London',
        postcode='EC3N 1JL',
        lat=51.51032,
        lng=-0.07454,
        industry='Software Engineering',
        details='An intresting reflection on Javascript and it\'s history. Food and drinks provided. Looking forward to seeing our regulars and welcoming any newcomers.',
        image='https://i.imgur.com/czZi01s.jpg',
        creator=crystal_crowther,
        attending=[amy_wilson, crystal_crowther, marie_middleton, kiki_farley, onur_soto]
    )

    react_monthly = Event(
        name='React Monthly',
        date='13/08/2019',
        time='17:00',
        address='40 Commercial St, Spitalfields, London',
        postcode='E1 6LP',
        lat=51.51633,
        lng=-0.07230,
        industry='Software Engineering',
        details='There will be a technical challange for anyone who wants to participate. We have a talk from Sue Longson, an entrepreneur in the tech sector and an inspiration to us all. ',
        image='https://i.imgur.com/EYi8gxD.jpg',
        creator=kiki_farley,
        attending=[amy_wilson, crystal_crowther, marie_middleton, kiki_farley, onur_soto]
    )

    software_engineer_women = Event(
        name='Software Engineering Women',
        date='30/08/2019',
        time='18:00',
        address='1 Garrick St, Covent Garden, London',
        postcode='WC2E 9BF',
        lat=51.51128,
        lng=-0.12568,
        industry='Software Engineering',
        details='A monthly meet-up for women in tech with a talk from an industry leader. Pizza, beers and networking always follow after the tech talk.',
        image='https://i.imgur.com/RoWFU0z.jpg',
        creator=meera_wu,
        attending=[amy_wilson, crystal_crowther, meera_wu, marie_middleton, kiki_farley, onur_soto]
    )

    lady_tech = Event(
        name='Lady Tech',
        date='01/10/2019',
        time='19:00',
        address='93 Charing Cross Rd, Soho, London',
        postcode='WC2H 0DP',
        lat=51.51365,
        lng=-0.12956,
        industry='Software Engineering',
        details='Free beer, great company. We talk tech, life and everything that goes along with it. Very casual meet-up with opportunities to network, mentor and gain mentors.',
        image='https://i.imgur.com/pwXDIC6.jpg',
        creator=crystal_crowther,
        attending=[amy_wilson, crystal_crowther, joss_farmer, marie_middleton, kiki_farley, onur_soto]
    )

    coding_for_women = Event(
        name='Coding For Women',
        date='29/10/2019',
        time='19:00',
        address='The Depot, Carpenters Mews, 1, North Road, London',
        postcode='N7 9EF',
        lat=51.54874,
        lng=-0.12161,
        industry='Software Engineering',
        details='Come along for our monthly get together to chat everything coding and creating a support network for women in tech.',
        image='https://i.imgur.com/VzrAaZW.jpg',
        creator=meera_wu
    )

    women_dome = Event(
        name='Women Dome',
        date='11/10/2019',
        time='17:00',
        address='The Red Lion & Sun, 25 North Rd, Highgate, London',
        postcode='N6 4BE',
        lat=51.57305,
        lng=-0.15012,
        industry='Software Engineering',
        details='This is a safe space for all women in tech in North London. We discuss the day to day struggles and triumphs of being a woman in tech. Snacks and drinks provided. Networking essential. ',
        image='https://i.imgur.com/6heda8q.jpg',
        creator=amy_wilson
    )

    coding_encore = Event(
        name='Coding Encore',
        date='12/08/2019',
        time='18:00',
        address='Canton Arms, 177 S Lambeth Rd, Stockwell, London',
        postcode='SW8 1XP',
        lat=51.47675,
        lng=-0.12289,
        industry='Software Engineering',
        details='A great coding event for women in tech.',
        image='https://i.imgur.com/XCWSk4a.jpg',
        creator=amy_wilson
    )

    women_go = Event(
        name='Women Go',
        date='12/10/2019',
        time='18:00',
        address='The Riverside, Hamilton House, 5 St George Wharf, Vauxhall, London',
        postcode='SW8 2LE',
        lat=51.48566,
        lng=-0.12615,
        industry='Software Engineering',
        details='Coding event, networking, wine and cheese. Tech!',
        image='https://i.imgur.com/WcgbgUw.jpg',
        creator=lacie_mae_blackwell
    )

    coding_masterglass = Event(
        name='Coding Masterclass',
        date='12/11/2019',
        time='19:00',
        address='The Ivy House, 40 Stuart Rd, London',
        postcode='SE15 3BE',
        lat=51.45849,
        lng=-0.05237,
        industry='Software Engineering',
        details='Coding challange set at the beginning of the night, followed by a talk by a Senior Tech Lead and then networking with beers and pizza. ',
        image='https://i.imgur.com/Wf5xwsl.jpg',
        creator=joss_farmer
    )

    # COMMENTS

    event_comment_one = EventComment(
        content='What a great event.',
        event=women_in_tech,
        user=amy_wilson
    )

    # ADD USERS
    db.session.add_all([
        amy_wilson,
        joss_farmer
    ])

    # ADD SKILLS
    db.session.add_all([
        software_engineering,
        javascript,
        react,
        html,
        css,
        python
    ])

    # ADD EVENTS
    db.session.add_all([
        women_in_tech,
        javascript_monthly,
        react_monthly,
        software_engineer_women,
        lady_tech
    ])

    # ADD EVENT COMMENTS
    db.session.add_all([
        event_comment_one
    ])

    db.session.commit()
