from re import sub
from flask import Blueprint, jsonify, request
from models.models import Terapia, session as db_session

terapia_bp = Blueprint('terapia_bp', __name__)

@terapia_bp.route('/api/criar-terapia', methods=['POST'])
def criar_terapia():
    data = request.get_json()

    required_fields = ['nomeTerapia']
    for field in required_fields:
        if field not in data:
            return jsonify({'success': False, 'message': f'Campo obrigatório ausente: {field}'}), 400
    
    try:
        nova_terapia = Terapia(
            nomeTerapia=data['nomeTerapia'],
            descricao=data.get('descricao'),
            subTitulo=data.get('subTitulo') 
        )
        db_session.add(nova_terapia)
        db_session.commit()

        return jsonify({"success": True, "message": "Terapia criada com sucesso!"}), 201
    except Exception as e:
        db_session.rollback()
        return jsonify({"success": False, "message": f"Erro ao criar terapia: {str(e)}"}), 500


@terapia_bp.route('/api/terapias', methods=['GET'])
def get_terapia_por_usuario():
    terapias = db_session.query(Terapia).all()
    lista_terapia = []
    for h in terapias:
        lista_terapia.append({
            'idTerapia': h.idTerapia,
            'nomeTerapia': h.nomeTerapia,
            'subTitulo': h.subTitulo,
            'descricao': h.descricao
        })
    return jsonify({'success': True, 'terapias': lista_terapia}), 200

@terapia_bp.route('/api/terapia/<int:idTerapia>', methods=['GET'])
def get_terapia_por_id(idTerapia):
    terapia = db_session.query(Terapia).filter_by(idTerapia=idTerapia).first()
    if terapia is None:
        return jsonify({'success': False, 'message': 'Terapia não encontrada'}), 404
    terapia_data = {
        'idTerapia': terapia.idTerapia,
        'nomeTerapia': terapia.nomeTerapia,
        'descricao': terapia.descricao
    }
    return jsonify({'success': True, 'terapia': terapia_data}), 200