from PIL import Image
import os

img_path = 'core/static/images/logo.jpeg'
out_path = 'core/static/images/logo_cropped.png'

original = Image.open(img_path)

# Based on inspection: X: 130, Y: 50, W: 310, H: 380
# Adding some padding
left = 100
top = 30
right = left + 360  # W: 360
bottom = top + 420  # H: 420

cropped = original.crop((left, top, right, bottom))
cropped.save(out_path)
print(f"Cropped image saved to {out_path}")
