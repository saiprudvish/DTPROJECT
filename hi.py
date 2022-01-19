import qrcode

Img = qrcode.make("http://localhost:4200/le-five")

Img.save("id.jpg")