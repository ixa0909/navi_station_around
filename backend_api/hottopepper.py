import requests
import json

API_KEY = input('ホットペッパーのAPIキーを入力してください:')
URL = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/'


def get_hottopepper_shops(API_KEY, URL, lat, lng):
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


# 緯度、経度を定義 (今回はなんば駅)
lat = '34.6663576'
lng = '135.5003519'
shops = get_hottopepper_shops(API_KEY, URL, lat, lng)

# jsonで保存
with open('hottopepper.json', 'w', encoding='utf-8') as f:
    json.dump(shops, f, ensure_ascii=False, indent=4)
