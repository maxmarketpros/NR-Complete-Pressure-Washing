import sharp from 'sharp';
import { mkdir } from 'fs/promises';
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
  'hero-home.webp': 'Stock Photos/8.jpg',
  'about-preview.webp': 'Client Photos/IMG_1720.jpeg',
  'standards-feature.webp': 'Stock Photos/4.jpg',

  // About page
  'about-hero.webp': 'Stock Photos/9.jpg',
  'about-story.webp': 'Stock Photos/12.jpg',
  'about-team.webp': 'Client Photos/IMG_7040.jpeg',

  // Contact
  'contact-hero.webp': 'Stock Photos/15.jpg',

  // Gallery, FAQ, Areas heroes
  'gallery-hero.webp': 'Stock Photos/7.jpg',
  'areas-hero.webp': 'Stock Photos/16.jpg',
  'faq-hero.webp': 'Stock Photos/22.jpg',

  // Service cards + heroes
  'service-pw.webp': 'Stock Photos/8.jpg',
  'service-pw-hero.webp': 'Stock Photos/20.jpg',
  'service-pw-detail-1.webp': 'Stock Photos/11.jpg',
  'service-pw-detail-2.webp': 'Stock Photos/2.jpg',

  'service-hw.webp': 'Stock Photos/3.jpg',
  'service-hw-hero.webp': 'Stock Photos/9.jpg',
  'service-hw-detail-1.webp': 'Stock Photos/13.jpg',
  'service-hw-detail-2.webp': 'Client Photos/IMG_0689.JPG',

  'service-cc.webp': 'Stock Photos/5.jpg',
  'service-cc-hero.webp': 'Stock Photos/2.jpg',
  'service-cc-detail-1.webp': 'Stock Photos/10.jpg',
  'service-cc-detail-2.webp': 'Stock Photos/20.jpg',

  'service-cs.webp': 'Stock Photos/10.jpg',
  'service-cs-hero.webp': 'Stock Photos/20.jpg',
  'service-cs-detail-1.webp': 'Stock Photos/5.jpg',
  'service-cs-detail-2.webp': 'Stock Photos/2.jpg',

  'service-pc.webp': 'Stock Photos/6.jpg',
  'service-pc-hero.webp': 'Stock Photos/6.jpg',
  'service-pc-detail-1.webp': 'Client Photos/IMG_0678.PNG',
  'service-pc-detail-2.webp': 'Client Photos/IMG_1049.jpeg',

  'service-ps.webp': 'Stock Photos/18.jpg',
  'service-ps-hero.webp': 'Stock Photos/17.jpg',
  'service-ps-detail-1.webp': 'Client Photos/IMG_1065.jpeg',
  'service-ps-detail-2.webp': 'Client Photos/IMG_1066.jpeg',

  'service-psl.webp': 'Stock Photos/19.jpg',
  'service-psl-hero.webp': 'Stock Photos/15.jpg',
  'service-psl-detail-1.webp': 'Stock Photos/18.jpg',
  'service-psl-detail-2.webp': 'Stock Photos/17.jpg',

  'service-sc.webp': 'Stock Photos/13.jpg',
  'service-sc-hero.webp': 'Stock Photos/3.jpg',
  'service-sc-detail-1.webp': 'Stock Photos/9.jpg',
  'service-sc-detail-2.webp': 'Client Photos/IMG_0810.jpeg',

  'service-dp.webp': 'Stock Photos/14.jpg',
  'service-dp-hero.webp': 'Stock Photos/7.jpg',
  'service-dp-detail-1.webp': 'Stock Photos/16.jpg',
  'service-dp-detail-2.webp': 'Client Photos/IMG_0795.jpeg',

  'service-rw.webp': 'Stock Photos/1.jpg',
  'service-rw-hero.webp': 'Stock Photos/11.jpg',
  'service-rw-detail-1.webp': 'Client Photos/IMG_1727.jpeg',
  'service-rw-detail-2.webp': 'Client Photos/IMG_1725.jpeg',

  // Gallery - Before/After composites
  'gallery-ba-1.webp': 'Client Photos/IMG_0678.PNG',
  'gallery-ba-2.webp': 'Client Photos/IMG_0689.JPG',
  'gallery-ba-3.webp': 'Client Photos/IMG_0712.JPG',
  'gallery-ba-4.webp': 'Client Photos/IMG_0713.JPG',
  'gallery-ba-5.webp': 'Client Photos/IMG_1049.jpeg',
  'gallery-ba-6.webp': 'Client Photos/IMG_1498.jpeg',
  'gallery-ba-7.webp': 'Client Photos/IMG_1727.jpeg',

  // Gallery - Additional client photos
  'gallery-client-1.webp': 'Client Photos/IMG_0795.jpeg',
  'gallery-client-2.webp': 'Client Photos/IMG_0809.jpeg',
  'gallery-client-3.webp': 'Client Photos/IMG_0810.jpeg',
  'gallery-client-4.webp': 'Client Photos/IMG_0904.jpeg',
  'gallery-client-5.webp': 'Client Photos/IMG_1050.jpeg',
  'gallery-client-6.webp': 'Client Photos/IMG_1065.jpeg',
  'gallery-client-7.webp': 'Client Photos/IMG_1066.jpeg',
  'gallery-client-8.webp': 'Client Photos/IMG_1725.jpeg',
  'gallery-client-9.webp': 'Client Photos/IMG_0159.jpeg',
  'gallery-client-10.webp': 'Client Photos/IMG_0170.jpeg',

  // OG Image (kept as JPG — social crawlers prefer JPG/PNG over WebP)
  'og-image.jpg': 'Stock Photos/8.jpg',
};

let count = 0;
const total = Object.keys(imageMap).length;

for (const [dest, src] of Object.entries(imageMap)) {
  const srcPath = join(ASSETS, src);
  const destPath = join(OUT, dest);
  const ext = extname(dest).toLowerCase();

  try {
    if (dest === 'logo.png') {
      // Logo: 2x of ~142x70 header display.
      await sharp(srcPath)
        .rotate()
        .resize(300, null, { withoutEnlargement: true })
        .png({ compressionLevel: 9, quality: 85 })
        .toFile(destPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      // OG / social images stay JPEG — some crawlers still don't handle WebP well.
      await sharp(srcPath)
        .rotate()
        .resize(1200, null, { withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(destPath);
    } else if (dest === 'about-preview.webp') {
      // About-preview renders at ~665x887 on mobile. 1000px wide is a safe 2x cap.
      await sharp(srcPath)
        .rotate()
        .resize(1000, null, { withoutEnlargement: true })
        .webp({ quality: 62, effort: 6 })
        .toFile(destPath);
    } else if (dest === 'hero-home.webp') {
      // LCP image. Tighter quality and cap at 1600px — covers typical desktops.
      await sharp(srcPath)
        .rotate()
        .resize(1600, null, { withoutEnlargement: true })
        .webp({ quality: 65, effort: 6 })
        .toFile(destPath);
    } else if (dest.includes('hero')) {
      // Other full-width heroes.
      await sharp(srcPath)
        .rotate()
        .resize(1600, null, { withoutEnlargement: true })
        .webp({ quality: 68, effort: 6 })
        .toFile(destPath);
    } else if (dest.startsWith('service-') && !dest.includes('detail')) {
      // Service card images: 3-up grid, smaller display.
      await sharp(srcPath)
        .rotate()
        .resize(800, null, { withoutEnlargement: true })
        .webp({ quality: 68, effort: 6 })
        .toFile(destPath);
    } else {
      // Everything else (detail images, gallery): balanced size/quality.
      await sharp(srcPath)
        .rotate()
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 70, effort: 6 })
        .toFile(destPath);
    }
    count++;
    process.stdout.write(`[${count}/${total}] ${dest}\n`);
  } catch (err) {
    console.error(`ERROR processing ${dest} from ${src}: ${err.message}`);
  }
}

console.log(`\nDone! Processed ${count}/${total} images.`);
