from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/')
def home():
    return "Welcome to the Home Page!"

@app.route('/api/data')
def get_data():
    return jsonify({'message': 'Dados do Flask recebidos no React!'})

if __name__ == '__main__':
    app.run(debug=True)