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


app.config["JSON_AS_ASCII"] = False

hottopepper_api = Hottopepper('config/api_key.json', 'config/station.json')

@app.route('/hottopepper')
def response_hottopepper():
    station_name = request.args.get('station')
    response = hottopepper_api.get_hottopepper_shops(station_name)
    response = jsonify(response)
    return response

spot_path = 'config/spot.json'

spot_data = json.load(open(spot_path, 'r'))

def get_spot(station_name):
    result_dict = {}
    for spot in spot_data.values():
        if spot['station_name'] == station_name:
            result_dict[spot['name']] = {
                'name': spot['name'], 
                'address': spot['address'], 
                'url': spot['url'], 
                'photo': spot['photo']
            }
    return result_dict

@app.route('/osaka')
def response_spot():
    station_name = request.args.get('station')
    response = get_spot(station_name)
    response = jsonify(response)
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
