import requests
import json


def station_to_lat_lng(station_name):
    lat = '34.6663576'
    lng = '135.5003519'

    return lat, lng

# todo class化
def get_hottopepper_shops(API_KEY, station_name):
    URL = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/'

    lat, lng = station_to_lat_lng(station_name)
    query = {
        'key': API_KEY,
        'lat': lat,
        'lng': lng,
        'range': '1',  # 300m以内
        'count': 5,  # 取得データ数
        'format': 'json'
    }

    responce = requests.get(URL, query)

    items = json.loads(responce.text)['results']['shop']

    result_dict = {}
    for item in items:
        result_dict[item['name']] = {
            'name': item['name'],  # 店名
            'address': item['address'],  # 住所
            'url': item['urls']['pc'],  # URL
            'photo': item['photo']['pc']['l']  # 写真
        }

    return result_dict

