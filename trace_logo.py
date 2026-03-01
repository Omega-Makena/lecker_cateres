from PIL import Image
import os

def trace_logo(input_path, output_path):
    print(f"Tracing logo from {input_path} to {output_path}")
    
    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        # Try finding the original logo instead
        alt_path = 'core/static/images/logo.jpeg'
        if os.path.exists(alt_path):
            input_path = alt_path
            print(f"Using alternative file: {input_path}")
        else:
            return

    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    # Threshold for black background
    threshold = 30
    for item in datas:
        # Check if the pixel is close to black
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            newData.append((255, 255, 255, 0))  # Transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Successfully saved {output_path}")

if __name__ == "__main__":
    trace_logo('core/static/images/logo_cropped.png', 'core/static/images/logo_traced.png')
