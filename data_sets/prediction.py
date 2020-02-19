import requests, os, sys
from PIL import Image, ImageDraw
model_id = "ca9df6e0-37a7-4155-bb8e-5ad2ccb675bf"
api_key = os.environ.get('5rsRb00JkEnWN_EV6hRI8jcgJEC9nkln')
image_path = sys.argv[1]
url = 'https://app.nanonets.com/api/v2/ObjectDetection/Model/'
url += model_id + '/LabelFile/'
data = {'file': open(image_path, 'rb'),'modelId': ('', model_id)}
response = requests.post(url, auth=requests.auth.HTTPBasicAuth(api_key, ''), files=data)
result = response.json()["result"][0]
im = Image.open(image_path)
draw = ImageDraw.Draw(im)
for b in result["prediction"]:
  box = (b["xmin"],b["ymin"],b["xmax"],b["ymax"])
  draw.rectangle(box, fill=None, outline=128)
im.show()
print(response.text)
