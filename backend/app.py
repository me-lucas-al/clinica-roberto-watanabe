from backend.models import models
from flask import Flask, jsonify, request
from flask_cors import CORS
from models import Usuario

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
        dataNasc=data_nascimento,
        senha_hash=hashed_password,
        email=email,
        telefone=data.get('telefone'), # Usa .get() para campos opcionais
        tipoUsuario=data['tipoUsuario']
    )
    return jsonify({"message": "User registered successfully!"}), 201

if __name__ == '__main__':
    app.run(debug=True)