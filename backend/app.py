from flask import Flask, session
from flask_cors import CORS
from routes.users import user_bp
from routes.agendamentos import agendamentos_bp
from routes.terapias import terapia_bp
from routes.historico import historico_bp
from models.models import session
    
app = Flask(__name__)

CORS(app)

@app.teardown_appcontext
def shutdown_session(exception=None):
    session.remove()

@app.route('/')
def api_status():
    return "API is running"

app.register_blueprint(user_bp)
app.register_blueprint(agendamentos_bp)
app.register_blueprint(terapia_bp)
app.register_blueprint(historico_bp)

if __name__ == '__main__':
    app.run(debug=True)