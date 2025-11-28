from flask import Blueprint, jsonify, request
from models.models import HistoricoPaciente, session as db_session

historico_bp = Blueprint('historico_bp', __name__)

@historico_bp.route('/api/criar-historico', methods=['POST'])
def criar_historico():
    data = request.get_json()

    required_fields = ['dataConsulta', 'diagnostico', 'idUsuario']
    for field in required_fields:
        if field not in data:
            return jsonify({'success': False, 'message': f'Campo obrigatório ausente: {field}'}), 400
    
    try:
        novo_historico = HistoricoPaciente(
            dataConsulta=data['dataConsulta'],
            diagnostico=data['diagnostico'],
            idUsuario=data['idUsuario']
        )
        db_session.add(novo_historico)
        db_session.commit()

        return jsonify({"success": True, "message": "Historico criado com sucesso!"}), 201
    except Exception as e:
        db_session.rollback()
        return jsonify({"success": False, "message": f"Erro ao criar historico: {str(e)}"}), 500


@historico_bp.route('/api/historico/<int:user_id>', methods=['GET'])
def get_historico_por_usuario(user_id):
    historicos = db_session.query(HistoricoPaciente).filter_by(idUsuario=user_id).all()
    lista_historicos = []
    for h in historicos:
        lista_historicos.append({
            'idHistorico': h.idHistorico,
            'dataConsulta': str(h.dataConsulta),
            'diagnostico': h.diagnostico,
            'idUsuario': h.idUsuario
        })
    return jsonify({'success': True, 'historicos': lista_historicos}), 200
