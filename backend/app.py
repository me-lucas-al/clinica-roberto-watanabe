from backend.models import models
from flask import Flask, jsonify, request, session
from flask_cors import CORS
from backend.models import Usuario
from backend.models import Agendamento

app = Flask(__name__)

CORS(app)


@app.route('/')
def home():
    return "Welcome to the Home Page!"

@app.route('/api/register', methods=['POST'])
def register():

    data = request.get_json()
    
    required_fields = ['nomeCompleto', 'senha', 'email', 'tipoUsuario', 'dataNasc']
    for field in required_fields:
        if field not in data:
            return jsonify({'success': False, 'message': f'Campo obrigatório ausente: {field}'}), 400
    
    novo_usuario = Usuario(
        nomeCompleto=data['nomeCompleto'],
        dataNasc=data['dataNasc'],
        senha_hash=data['senha'],
        email=data['email'],
        telefone=data['telefone'],
        tipoUsuario=data['tipoUsuario']
    )

    session.add(novo_usuario)
    session.commit()

    return jsonify({"message": "User registered successfully!"}), 201

@app.route('/api/criar-agendamento', methods=['POST'])
def criar_agendamento():
    data = request.get_json()

    required_fields = ['dataAgendamento', 'horaAgendamento', 'usuarioId']
    for field in required_fields:
        if field not in data:
            return jsonify({'success': False, 'message': f'Campo obrigatório ausente: {field}'}), 400
    
    novo_agendamento = Agendamento(
        dataAgendamento=data['dataAgendamento'],
        horaAgendamento=data['horaAgendamento'],
        usuarioId=data['usuarioId']
    )
    session.add(novo_agendamento)
    session.commit()

    return jsonify({"message": "Agendamento criado com sucesso!"}), 201

if __name__ == '__main__':
    app.run(debug=True)