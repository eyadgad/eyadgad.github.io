imgfile=r"C:\Users\eyade\Desktop\profileweb\global\assets\img\testlogo.png"
from PIL import Image
img = Image.open(imgfile)
img = img.convert("RGBA")
datas = img.getdata()
newData = []
threshold = 10
for item in datas:
    if item[0] >= 60 and item[1] <= 35 and item[2] >= 60:newData.append((114, 32, 117, 255))
    else:newData.append((255, 255, 255, 0))
img.putdata(newData)
#resize to 100X45
img = img.resize((100,45), Image.ANTIALIAS)
img.save("C:\\Users\\eyade\\Desktop\\profileweb\\global\\assets\\img\\logo.png", "PNG")