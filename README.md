# image-converter-to-webp

# Image Processing Script for WordPress

This is a Node.js script designed to **download**, **convert**, and **upload** images in three stages. I created this script specifically for converting PNG and JPEG images within WordPress, and it is customized to meet this specific need.

You provide the script with an array of image URLs, and it performs the following commands in sequence to process and upload the images to your server, next to the original PNG or JPEG files:

## Steps

1. **Create Source JSON File**  
   ```bash
   yarn start
2. **Download Images**  
   ```bash
   yarn dl
3. **Convert Image Formats**  
   ```bash
   yarn convert
4. **Upload to Your Server (not yet implemented)**  
   ```bash
   yarn upload
