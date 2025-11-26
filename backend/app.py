from flask import Flask, jsonify, request
from flask_cors import CORS
from models.models import Usuario, Agendamento, session as db_session

app = Flask(__name__)

CORS(app)


@app.route('/')
def api_status():
    return "API is running"

@app.route('/api/register', methods=['POST'])
def register():

    data = request.get_json()
    
    required_fields = ['nomeCompleto', 'senha', 'email', 'tipoUsuario', 'dataNasc', 'telefone']
    for field in required_fields:
        if field not in data:
            return jsonify({'success': False, 'message': f'Campo obrigatório ausente: {field}'}), 400
    
    try:
        novo_usuario = Usuario(
            nomeCompleto=data['nomeCompleto'],
            dataNasc=data['dataNasc'],
            senha=data['senha'],  
            email=data['email'],
            telefone=data['telefone'], 
            tipoUsuario=data['tipoUsuario']
        )

        db_session.add(novo_usuario)
        db_session.commit()

        return jsonify({"message": "User registered successfully!"}), 201
    except Exception as e:
        db_session.rollback() 
        return jsonify({"message": f"Erro ao criar usuário: {str(e)}"}), 500

@app.route('/api/users', methods=['GET'])
def get_all_users():
    usuarios = db_session.query(Usuario).all()
    lista_usuarios = []
    
    for u in usuarios:
        lista_usuarios.append({
            'id': u.idUsuario,
            'nomeCompleto': u.nomeCompleto,
            'email': u.email,
            'tipoUsuario': u.tipoUsuario
        })
        
    return jsonify({'success': True, 'users': lista_usuarios}), 200

@app.route('/api/criar-agendamento', methods=['POST'])
def criar_agendamento():
    data = request.get_json()

    required_fields = ['dataPreferencial', 'horaAgendamento', 'usuarioId']
    for field in required_fields:
        if field not in data:
            return jsonify({'success': False, 'message': f'Campo obrigatório ausente: {field}'}), 400
    
    try:
        novo_agendamento = Agendamento(
            dataPreferencial=data['dataPreferencial'],
            horaAgendamento=data['horaAgendamento'],
            usuarioId=data['usuarioId']
        )
        db_session.add(novo_agendamento)
        db_session.commit()

        return jsonify({"message": "Agendamento criado com sucesso!"}), 201
    except Exception as e:
        db_session.rollback()
        return jsonify({"message": f"Erro ao criar agendamento: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)