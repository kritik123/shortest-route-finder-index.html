import requests

url = 'https://app.nanonets.com/api/v2/ObjectDetection/Model/1497b277-4e1a-416c-b97c-e843463ad66e/LabelFile/'

data = {'file': open('img3.jpg', 'rb')}

response = requests.post(url, auth=requests.auth.HTTPBasicAuth('5rsRb00JkEnWN_EV6hRI8jcgJEC9nkln', ''), files=data)

print(response.text)