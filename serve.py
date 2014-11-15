from bottle import route, run, request
import requests

IP_API = "http://ip-api.com/json/{ip_address}"
WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}"

## ip passed through nginx with REMOTE_ADDR
@route('/<ip>')
def weather(ip):
    ip_info = requests.get(IP_API.format(ip_address=ip)).json()
    weather_info = requests.get(WEATHER_API.format(lat=ip_info['lat'],
                                                   lon=ip_info['lon']))
    return weather_info.json()

run(host='localhost', port=8011)

