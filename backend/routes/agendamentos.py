from flask import Blueprint, jsonify, request
from models.models import Agendamento, session as db_session

agendamentos_bp = Blueprint('agendamentos_bp', __name__)

@agendamentos_bp.route('/api/criar-agendamento', methods=['POST'])
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

        return jsonify({"success": True, "message": "Agendamento criado com sucesso!"}), 201
    except Exception as e:
        db_session.rollback()
        return jsonify({"success": False, "message": f"Erro ao criar agendamento: {str(e)}"}), 500
