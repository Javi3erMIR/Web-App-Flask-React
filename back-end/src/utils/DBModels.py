from app import db
import uuid

class Users(db.Model):
    user_id = db.Column(db.String(150), primary_key=True, nullable=False)
    d_name = db.Column(db.String(250), nullable=False)
    school_cct = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String(16), nullable=False)
    roll = db.Column(db.Integer, nullable=False, default=0)

    def __repr__(self):
        return f"User('{self.user_id}', '{self.d_name}', '{self.school_cct}', '{self.password}')"

    def __init__(self, data: dict):
        self.user_id = uuid.uuid4()
        self.d_name = data['d_name']
        self.school_cct = data['school_cct']
        self.email = data['email']
        self.password = data['password']
        self.roll = data['roll']


class Schools(db.Model):
    school_id = db.Column(db.String(150), primary_key=True)
    school_name = db.Column(db.String(250), nullable=False)
    school_cct = db.Column(db.String(150), nullable=False)
    group_number = db.Column(db.Integer, nullable=False)
    director_id = db.Column(db.String(150), db.ForeignKey('users.user_id'), nullable=False)

    def __repr__(self):
        return f"School('{self.school_id}', '{self.school_name}', '{self.school_cct}', '{self.group_number}', '{self.director_id}')"

    def __init__(self, data: dict):
        self.school_id = uuid.uuid4()
        self.school_name = data['schoolName']
        self.school_cct = data['cct']
        self.group_number = data['groups']
        self.director_id = data['director_id']


class Groups(db.Model):
    group_id = db.Column(db.String(150), primary_key=True)
    student_num = db.Column(db.Integer, nullable=False)
    school_id = db.Column(db.String(150), db.ForeignKey('schools.school_id'), nullable=False)
    teacher_name = db.Column(db.String(250), nullable=False)

    def __repr__(self):
        return f"Group('{self.group_id}', '{self.student_num}', '{self.school_id}')"

    def __init__(self, data: dict):
        self.group_id = uuid.uuid4()
        self.student_num = data['students']
        self.school_id = data['school_id']       
        self.teacher_name = data['teacher_name']


class Students(db.Model):
    student_id = db.Column(db.String(150), primary_key=True)
    student_name = db.Column(db.String(250), nullable=False)
    school_id = db.Column(db.String(150), db.ForeignKey('schools.school_id'), nullable=False)
    group_id = db.Column(db.String(150), db.ForeignKey('groups.group_id'), nullable=False)
    degree = db.Column(db.Integer, default=1, nullable=False)

    def __repr__(self):
        return f"Student('{self.student_id}', '{self.student_name}', '{self.school_id}', '{self.group_id}', '{self.degree}')"

    def __init__(self, data: dict):
        self.student_id = uuid.uuid4()
        self.student_name = data['student_name']
        self.school_id = data['school_id']
        self.group_id = data['group_id']
        self.degree = data['degree']