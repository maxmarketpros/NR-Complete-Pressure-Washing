import sharp from 'sharp';
import { join } from 'path';

const ROOT = process.cwd();
const LOGO = join(ROOT, 'NEW ASSETS', 'LOGO', 'NR Complete Pressure Washing logo.png');
const PUBLIC = join(ROOT, 'public');

// Generate favicon.ico (32x32)
await sharp(LOGO)
  .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(join(PUBLIC, 'favicon.png'));
console.log('favicon.png (32x32)');

// Generate apple-touch-icon (180x180)
await sharp(LOGO)
  .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile(join(PUBLIC, 'apple-touch-icon.png'));
console.log('apple-touch-icon.png (180x180)');

// Generate icon-192 for manifest
await sharp(LOGO)
  .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile(join(PUBLIC, 'icon-192.png'));
console.log('icon-192.png (192x192)');

// Generate icon-512 for manifest
await sharp(LOGO)
  .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile(join(PUBLIC, 'icon-512.png'));
console.log('icon-512.png (512x512)');

// Generate OG image (1200x630) - logo centered on blue background
await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 37, g: 99, b: 235, alpha: 1 }, // primary-600
  },
})
  .composite([
    {
      input: await sharp(LOGO)
        .resize(600, null, { withoutEnlargement: true })
        .png()
        .toBuffer(),
      gravity: 'center',
    },
  ])
  .jpeg({ quality: 90 })
  .toFile(join(PUBLIC, 'images', 'og-image.jpg'));
console.log('og-image.jpg (1200x630)');

console.log('\nDone! All favicon and OG files generated.');
