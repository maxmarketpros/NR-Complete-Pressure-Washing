import sharp from 'sharp';
import { readdir, copyFile, mkdir } from 'fs/promises';
import { join, extname } from 'path';

const ROOT = process.cwd();
const ASSETS = join(ROOT, 'NEW ASSETS');
const OUT = join(ROOT, 'public', 'images');

await mkdir(OUT, { recursive: true });

// Image mapping: destination filename -> source path (relative to ASSETS)
const imageMap = {
  // Logo
  'logo.png': 'LOGO/NR Complete Pressure Washing logo.png',

  // Homepage
  'hero-home.jpg': 'Stock Photos/8.jpg',
  'about-preview.jpg': 'Client Photos/IMG_1720.jpeg',
  'standards-feature.jpg': 'Stock Photos/4.jpg',

  // About page
  'about-hero.jpg': 'Stock Photos/9.jpg',
  'about-story.jpg': 'Stock Photos/12.jpg',
  'about-team.jpg': 'Client Photos/IMG_7040.jpeg',

  // Contact
  'contact-hero.jpg': 'Stock Photos/15.jpg',

  // Gallery, FAQ, Areas heroes
  'gallery-hero.jpg': 'Stock Photos/7.jpg',
  'areas-hero.jpg': 'Stock Photos/16.jpg',
  'faq-hero.jpg': 'Stock Photos/22.jpg',

  // Service cards + heroes
  'service-pw.jpg': 'Stock Photos/8.jpg',
  'service-pw-hero.jpg': 'Stock Photos/20.jpg',
  'service-pw-detail-1.jpg': 'Stock Photos/11.jpg',
  'service-pw-detail-2.jpg': 'Stock Photos/2.jpg',

  'service-hw.jpg': 'Stock Photos/3.jpg',
  'service-hw-hero.jpg': 'Stock Photos/9.jpg',
  'service-hw-detail-1.jpg': 'Stock Photos/13.jpg',
  'service-hw-detail-2.jpg': 'Client Photos/IMG_0689.JPG',

  'service-cc.jpg': 'Stock Photos/5.jpg',
  'service-cc-hero.jpg': 'Stock Photos/2.jpg',
  'service-cc-detail-1.jpg': 'Stock Photos/10.jpg',
  'service-cc-detail-2.jpg': 'Stock Photos/20.jpg',

  'service-cs.jpg': 'Stock Photos/10.jpg',
  'service-cs-hero.jpg': 'Stock Photos/20.jpg',
  'service-cs-detail-1.jpg': 'Stock Photos/5.jpg',
  'service-cs-detail-2.jpg': 'Stock Photos/2.jpg',

  'service-pc.jpg': 'Stock Photos/6.jpg',
  'service-pc-hero.jpg': 'Stock Photos/6.jpg',
  'service-pc-detail-1.jpg': 'Client Photos/IMG_0678.PNG',
  'service-pc-detail-2.jpg': 'Client Photos/IMG_1049.jpeg',

  'service-ps.jpg': 'Stock Photos/18.jpg',
  'service-ps-hero.jpg': 'Stock Photos/17.jpg',
  'service-ps-detail-1.jpg': 'Client Photos/IMG_1065.jpeg',
  'service-ps-detail-2.jpg': 'Client Photos/IMG_1066.jpeg',

  'service-psl.jpg': 'Stock Photos/19.jpg',
  'service-psl-hero.jpg': 'Stock Photos/15.jpg',
  'service-psl-detail-1.jpg': 'Stock Photos/18.jpg',
  'service-psl-detail-2.jpg': 'Stock Photos/17.jpg',

  'service-sc.jpg': 'Stock Photos/13.jpg',
  'service-sc-hero.jpg': 'Stock Photos/3.jpg',
  'service-sc-detail-1.jpg': 'Stock Photos/9.jpg',
  'service-sc-detail-2.jpg': 'Client Photos/IMG_0810.jpeg',

  'service-dp.jpg': 'Stock Photos/14.jpg',
  'service-dp-hero.jpg': 'Stock Photos/7.jpg',
  'service-dp-detail-1.jpg': 'Stock Photos/16.jpg',
  'service-dp-detail-2.jpg': 'Client Photos/IMG_0795.jpeg',

  'service-rw.jpg': 'Stock Photos/1.jpg',
  'service-rw-hero.jpg': 'Stock Photos/11.jpg',
  'service-rw-detail-1.jpg': 'Client Photos/IMG_1727.jpeg',
  'service-rw-detail-2.jpg': 'Client Photos/IMG_1725.jpeg',

  // Gallery - Before/After composites
  'gallery-ba-1.jpg': 'Client Photos/IMG_0678.PNG',
  'gallery-ba-2.jpg': 'Client Photos/IMG_0689.JPG',
  'gallery-ba-3.jpg': 'Client Photos/IMG_0712.JPG',
  'gallery-ba-4.jpg': 'Client Photos/IMG_0713.JPG',
  'gallery-ba-5.jpg': 'Client Photos/IMG_1049.jpeg',
  'gallery-ba-6.jpg': 'Client Photos/IMG_1498.jpeg',
  'gallery-ba-7.jpg': 'Client Photos/IMG_1727.jpeg',

  // Gallery - Additional client photos
  'gallery-client-1.jpg': 'Client Photos/IMG_0795.jpeg',
  'gallery-client-2.jpg': 'Client Photos/IMG_0809.jpeg',
  'gallery-client-3.jpg': 'Client Photos/IMG_0810.jpeg',
  'gallery-client-4.jpg': 'Client Photos/IMG_0904.jpeg',
  'gallery-client-5.jpg': 'Client Photos/IMG_1050.jpeg',
  'gallery-client-6.jpg': 'Client Photos/IMG_1065.jpeg',
  'gallery-client-7.jpg': 'Client Photos/IMG_1066.jpeg',
  'gallery-client-8.jpg': 'Client Photos/IMG_1725.jpeg',
  'gallery-client-9.jpg': 'Client Photos/IMG_0159.jpeg',
  'gallery-client-10.jpg': 'Client Photos/IMG_0170.jpeg',

  // OG Image
  'og-image.jpg': 'Stock Photos/8.jpg',
};

let count = 0;
const total = Object.keys(imageMap).length;

for (const [dest, src] of Object.entries(imageMap)) {
  const srcPath = join(ASSETS, src);
  const destPath = join(OUT, dest);
  const ext = extname(dest).toLowerCase();

  try {
    if (ext === '.png' && dest === 'logo.png') {
      // Logo: resize to reasonable web size, keep PNG
      await sharp(srcPath)
        .resize(400, null, { withoutEnlargement: true })
        .png({ quality: 90 })
        .toFile(destPath);
    } else if (dest.includes('hero') || dest === 'og-image.jpg') {
      // Hero/OG images: larger size
      await sharp(srcPath)
        .resize(1920, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(destPath);
    } else if (dest.startsWith('service-') && !dest.includes('hero') && !dest.includes('detail')) {
      // Service card images: medium
      await sharp(srcPath)
        .resize(800, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(destPath);
    } else {
      // Everything else: reasonable web size
      await sharp(srcPath)
        .resize(1200, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(destPath);
    }
    count++;
    process.stdout.write(`[${count}/${total}] ${dest}\n`);
  } catch (err) {
    console.error(`ERROR processing ${dest} from ${src}: ${err.message}`);
  }
}

console.log(`\nDone! Processed ${count}/${total} images.`);
