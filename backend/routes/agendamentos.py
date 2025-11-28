from flask import Blueprint, jsonify, request
from models.models import Agendamento, session as db_session

agendamentos_bp = Blueprint('agendamentos_bp', __name__)

@agendamentos_bp.route('/api/criar-agendamento', methods=['POST'])
def criar_agendamento():
    data = request.get_json()

    required_fields = ['dataPreferencial', 'horaAgendamento', 'idUsuario', 'idTerapia']
    for field in required_fields:
        if field not in data:
            return jsonify({'success': False, 'message': f'Campo obrigatório ausente: {field}'}), 400
    
    try:
        novo_agendamento = Agendamento(
            dataPreferencial=data['dataPreferencial'],
            horaAgendamento=data['horaAgendamento'],
            queixa=data.get('queixa'),
            info=data.get('info'),
            idTerapia=data['idTerapia'],
            idUsuario=data['idUsuario']
        )
        db_session.add(novo_agendamento)
        db_session.commit()

        return jsonify({"success": True, "message": "Agendamento criado com sucesso!"}), 201
    except Exception as e:
        db_session.rollback()
        return jsonify({"success": False, "message": f"Erro ao criar agendamento: {str(e)}"}), 500

@agendamentos_bp.route('/api/agendamentos/<int:user_id>', methods=['GET'])
def get_agendamentos_por_usuario(user_id):
    agendamentos = db_session.query(Agendamento).filter_by(idUsuario=user_id).all()
    lista_agendamentos = []
    for a in agendamentos:
        lista_agendamentos.append({
            'idAgendamento': a.idAgendamento,
            'dataPreferencial': str(a.dataPreferencial),
            'queixa': a.queixa,
            'info': a.info,
            'horaAgendamento': str(a.horaAgendamento),
            'idUsuario': a.idUsuario,
            'idTerapia': a.idTerapia
        })
    return jsonify({'success': True, 'agendamentos': lista_agendamentos}), 200