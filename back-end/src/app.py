import re
from flask import Flask, jsonify, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from utils import DBModels
from werkzeug.security import generate_password_hash, check_password_hash

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@localhost/postgres'
app.config["JWT_SECRET_KEY"] = "super-secret" 
jwt = JWTManager(app)
db = SQLAlchemy(app)
session = db.session
CORS(app)


@app.route('/register', methods=['POST'])
def createTeacher():
    __hashed_password = generate_password_hash(request.json['password'])  

    user = session.query(DBModels.Users).filter(DBModels.Users.email == request.json['email']).first()
    if user == None:        
        if request.json['roll'] == 1:
            user = DBModels.Users({
                'd_name': request.json['d_name'],
                'school_cct': request.json['cct'],
                'email': request.json['email'],
                'password': __hashed_password,
                'roll': request.json['roll']
            })
            session.add(user)
            session.commit()        
            return jsonify({'Message': 'Director registrado'})
        if request.json['roll'] == 0:
            school = session.query(DBModels.Schools).filter(DBModels.Schools.school_cct == request.json['cct']).first()
            if school:
                user = DBModels.Users({
                    'd_name': request.json['d_name'],
                    'school_cct': request.json['cct'],
                    'email': request.json['email'],
                    'password': __hashed_password,
                    'roll': request.json['roll']
                })
                session.add(user)
                session.commit()        
                return jsonify({'Message': 'Maestro registrado'})
            else:
                return jsonify({'Message': 'No existe la escuela'}), 404
    else:
        return jsonify({'Message': 'El usuario ya existe'}), 401


@app.route('/login', methods=['POST'])
def login():    
    user = session.query(DBModels.Users).filter(DBModels.Users.email == request.json['email']).first()
    if user != None:
        if check_password_hash(user.password, request.json['password']):
            access_token = create_access_token(identity=request.json['email'])       
            return jsonify({'Message': 'Sesion iniciada', 'token': access_token, 'user_id': str(user.user_id), 'roll': user.roll})
        else:
            return jsonify({'Message': 'Email o contraseña incorrectas'}), 401
    else:    
        return jsonify({'Message': 'Usuario no encontrado'}), 404


@app.route('/dashboard/<id>')
@jwt_required()
def dashboard(id):
    user = session.query(DBModels.Users).filter(DBModels.Users.user_id == id).first()
    if user != None:
        if user.roll == 1:
            school = session.query(DBModels.Schools).filter(DBModels.Schools.school_cct == user.school_cct).first()
            if school != None:
                return jsonify({'Message': 'Director', 
                                'isSchoolRegister': True,
                                'userName': user.d_name,
                                'roll': False})
            else:
                return jsonify({'Message': 'School not found', 
                                'isSchoolRegister': False,
                                'userName': user.d_name,
                                'roll': False})
        if user.roll == 0:
            return jsonify({'Message': 'Maestro'})
    else:
        return jsonify({'Message': 'Usuario no encontrado'}), 404

if __name__ == '__main__':
    app.run(debug=True)