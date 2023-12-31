from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

print(1)
@app.route('/osaka')
def osaka_info():
    return jsonify({"message": "USJが有名です"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
