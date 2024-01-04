'''
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
'''
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/osaka')
def osaka_info():
    return jsonify({"message": "USJが有名です"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
