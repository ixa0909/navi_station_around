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
import json
from modules.hottopepper import get_hottopepper_shops

app = Flask(__name__)
CORS(app)

api_key_json = json.load(open('api_key.json', 'r'))
API_KEY = api_key_json['hottopepper']
print(API_KEY)

"""
https://qiita.com/nagataaaas/items/24e68a9c736aec31948e
"""
app.config["JSON_AS_ASCII"] = False

"""
@app.route('/osaka')
def osaka_info():
    return jsonify({"message": "USJが有名です"})
"""

@app.route('/osaka')
def response_hottopepper():
    response = get_hottopepper_shops(API_KEY, 'なんば駅')
    response = jsonify(response)
    print('response')
    print(response)
    return response
    # return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
