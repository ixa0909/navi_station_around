import requests
import json
import pandas as pd

station_df = pd.read_excel('config/station.xlsx', sheet_name='Sheet1')
station_to_lat_lng_dict = {}
for index, row in station_df.iterrows():
    station_to_lat_lng_dict[row['station']] = {
        'lat': row['lat'],
        'lng': row['lng']
    }
print(station_to_lat_lng_dict)
# jsonで保存
with open('config/station.json', 'w', encoding='utf-8') as f:
    json.dump(station_to_lat_lng_dict, f, ensure_ascii=False, indent=4)

API_KEY = input('ホットペッパーのAPIキーを入力してください:')
URL = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/'


def get_hottopepper_shops(API_KEY, URL, lat, lng):
    query = {
        'key': API_KEY,
        'lat': lat,
        'lng': lng,
        'range': '3',  # 300m以内
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
import time

# 緯度、経度を定義 (今回はなんば)
for station_name in station_to_lat_lng_dict:
    # station_name = 'なかもず'
    lat, lng = station_to_lat_lng_dict[station_name]['lat'], station_to_lat_lng_dict[station_name]['lng']
    shops = get_hottopepper_shops(API_KEY, URL, lat, lng)
    print(f'{station_name}', len(shops))
    time.sleep(1)

# jsonで保存
with open('hottopepper.json', 'w', encoding='utf-8') as f:
    json.dump(shops, f, ensure_ascii=False, indent=4)
