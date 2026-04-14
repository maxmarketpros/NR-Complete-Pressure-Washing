import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const DIR = join(process.cwd(), 'public', 'images');
const files = await readdir(DIR);

let converted = 0;
let savedBytes = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (ext !== '.jpg' && ext !== '.jpeg') continue;

  const srcPath = join(DIR, file);
  const destName = basename(file, ext) + '.webp';
  const destPath = join(DIR, destName);

  try {
    const srcStat = await sharp(srcPath).metadata();
    const srcSize = (await import('fs')).statSync(srcPath).size;

    await sharp(srcPath)
      .webp({ quality: 80 })
      .toFile(destPath);

    const destSize = (await import('fs')).statSync(destPath).size;
    const saved = srcSize - destSize;
    savedBytes += saved;

    // Remove the old jpg
    await unlink(srcPath);

    converted++;
    process.stdout.write(`[${converted}] ${file} → ${destName} (saved ${Math.round(saved / 1024)}KB)\n`);
  } catch (err) {
    console.error(`ERROR: ${file}: ${err.message}`);
  }
}

console.log(`\nDone! Converted ${converted} images. Total savings: ${Math.round(savedBytes / 1024)}KB`);
