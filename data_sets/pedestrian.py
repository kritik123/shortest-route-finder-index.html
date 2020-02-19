import requests

url = 'https://app.nanonets.com/api/v2/ObjectDetection/Model/1497b277-4e1a-416c-b97c-e843463ad66e/LabelUrls/'

headers = {
    'accept': 'application/x-www-form-urlencoded'
}

data = {'urls' : ['https://goo.gl/ICoiHc']}

response = requests.request('POST', url, headers=headers, auth=requests.auth.HTTPBasicAuth('5rsRb00JkEnWN_EV6hRI8jcgJEC9nkln', ''), data=data)

print(response.text)