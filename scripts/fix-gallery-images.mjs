import sharp from 'sharp';
import { join } from 'path';
import { mkdir } from 'fs/promises';

const ROOT = process.cwd();
const ASSETS = join(ROOT, 'NEW ASSETS', 'Client Photos');
const OUT = join(ROOT, 'public', 'images');

await mkdir(OUT, { recursive: true });

// New before/after pair images to process
const pairImages = {
  // Pair 1: Brick walkway
  'gallery-pair-1-before.jpg': 'IMG_0809.jpeg',
  'gallery-pair-1-after.jpg': 'IMG_0810.jpeg',
  // Pair 2: Paver walkway
  'gallery-pair-2-before.jpg': 'IMG_1065.jpeg',
  'gallery-pair-2-after.jpg': 'IMG_1066.jpeg',
  // Pair 3: Brick/masonry wall (algae)
  'gallery-pair-3-before.jpg': 'IMG_1498.jpeg',
  'gallery-pair-3-after.jpg': 'IMG_1499.jpeg',
  // Pair 4: Brick retaining wall
  'gallery-pair-4-before.jpg': 'IMG_1725.jpeg',
  'gallery-pair-4-after.jpg': 'IMG_1727.jpeg',
  // Pair 5: Roof/concrete surface
  'gallery-pair-5-before.jpg': 'IMG_1049.jpeg',
  'gallery-pair-5-after.jpg': 'IMG_1050.jpeg',
};

let count = 0;
const total = Object.keys(pairImages).length;

for (const [dest, src] of Object.entries(pairImages)) {
  const srcPath = join(ASSETS, src);
  const destPath = join(OUT, dest);

  try {
    await sharp(srcPath)
      .rotate() // auto-orient from EXIF
      .resize(1200, null, { withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(destPath);
    count++;
    console.log(`[${count}/${total}] ${dest}`);
  } catch (err) {
    console.error(`ERROR: ${dest} from ${src}: ${err.message}`);
  }
}

console.log(`\nDone! Processed ${count}/${total} pair images.`);
