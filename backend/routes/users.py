from flask import Blueprint, jsonify, request
from models.models import Usuario, session as db_session

user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/api/register', methods=['POST'])
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

        return jsonify({"success": True,"message": "User registered successfully!"}), 201
    except Exception as e:
        db_session.rollback() 
        return jsonify({"success": False,"message": f"Erro ao criar usuário: {str(e)}"}), 500
    
@user_bp.route('/api/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    usuario = db_session.query(Usuario).filter_by(idUsuario=user_id).first()
    
    if not usuario:
        return jsonify({'success': False, 'message': 'Usuário não encontrado'}), 404
    
    return jsonify({
        'success': True,
        'user': {
            'id': usuario.idUsuario,
            'nomeCompleto': usuario.nomeCompleto,
            'email': usuario.email,
            'telefone': usuario.telefone,
            'tipoUsuario': usuario.tipoUsuario,
            'dataNasc': str(usuario.dataNasc) if usuario.dataNasc else None
        }
    }), 200

@user_bp.route('/api/users', methods=['GET'])
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