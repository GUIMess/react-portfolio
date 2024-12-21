const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const SIZES = {
  thumbnail: { width: 150, height: 150 },
  medium: { width: 600, height: 400 },
  large: { width: 1200, height: 800 }
};

async function optimizeImages() {
  const publicDir = path.join(__dirname, '../public');
  const outputDir = path.join(publicDir, 'optimized');
  
  try {
    await fs.mkdir(outputDir, { recursive: true });
    const files = await fs.readdir(publicDir);
    
    for (const file of files) {
      if (file.match(/\.(jpe?g|png)$/i)) {
        const filePath = path.join(publicDir, file);
        const fileNameWithoutExt = path.parse(file).name;
        
        for (const [size, dimensions] of Object.entries(SIZES)) {
          try {
            await sharp(filePath)
              .resize(dimensions.width, dimensions.height, {
                fit: 'cover',
                position: 'center'
              })
              .webp({ quality: 80 }) // Convert to WebP for better compression
              .toFile(path.join(outputDir, `${fileNameWithoutExt}-${size}.webp`));
            
            console.log(`Optimized ${file} to ${size}`);
          } catch (error) {
            console.error(`Error optimizing ${file} to ${size}:`, error);
          }
        }
      }
    }
  } catch (error) {
    console.error('Error in optimization process:', error);
  }
}

optimizeImages(); 