const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

// Function to convert image to WebP
async function convertToWebP(inputPath, outputPath, quality = 80) {
  try {
    await sharp(inputPath, { quality: 95 })
      .webp({ quality })
      .toFile(outputPath);
    console.log(`✅ Converted ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error);
  }
}

// Function to process directory recursively
async function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      
      // Convert JPG and PNG files to WebP
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const nameWithoutExt = path.basename(item, ext);
        const webpPath = path.join(dirPath, `${nameWithoutExt}.webp`);
        
        // Only convert if WebP doesn't already exist
        if (!fs.existsSync(webpPath)) {
          await convertToWebP(fullPath, webpPath);
        } else {
          console.log(`⏭️  WebP already exists for ${item}`);
        }
      }
    }
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting image optimization...');
  
  if (!fs.existsSync(imagesDir)) {
    console.error('❌ Images directory not found');
    return;
  }
  
  await processDirectory(imagesDir);
  console.log('✅ Image optimization completed!');
}

main().catch(console.error);
