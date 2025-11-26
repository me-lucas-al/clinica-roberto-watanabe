from flask import Flask
from flask_cors import CORS
from routes.user import user_bp
from routes.agendamentos import agendamentos_bp

app = Flask(__name__)

CORS(app)

@app.route('/')
def api_status():
    return "API is running"

app.register_blueprint(user_bp)
app.register_blueprint(agendamentos_bp)

if __name__ == '__main__':
    app.run(debug=True)