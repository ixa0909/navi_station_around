'''
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
'''
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from modules.hottopepper import Hottopepper

app = Flask(__name__)
CORS(app)

"""
https://qiita.com/nagataaaas/items/24e68a9c736aec31948e
"""
app.config["JSON_AS_ASCII"] = False

hottopepper_api = Hottopepper('config/api_key.json', 'config/station.json')

"""
@app.route('/osaka')
def osaka_info():
    return jsonify({"message": "USJが有名です"})
"""

@app.route('/osaka')
def response_hottopepper():
    station_name = request.args.get('station')
    response = hottopepper_api.get_hottopepper_shops(station_name)
    response = jsonify(response)
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
