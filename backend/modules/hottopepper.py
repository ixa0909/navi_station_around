import requests
import json

class Hottopepper:
    def __init__(self, api_path, station_path) -> None:
        api_key_json = json.load(open(api_path, 'r'))
        self.API_KEY = api_key_json['hottopepper']

        self.station_to_lat_lng_dict = json.load(open(station_path, 'r'))

    def station_to_lat_lng(self, station_name):
        lat, lng = self.station_to_lat_lng_dict[station_name]['lat'], self.station_to_lat_lng_dict[station_name]['lng']

        return lat, lng
    
    def get_hottopepper_shops(self, station_name):
        URL = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/'

        lat, lng = self.station_to_lat_lng(station_name)
        query = {
            'key': self.API_KEY,
            'lat': lat,
            'lng': lng,
            'range': '3',
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

