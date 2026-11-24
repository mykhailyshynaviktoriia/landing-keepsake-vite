import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = 'src/assets';
const outputDir = 'public/images';
const widths = [400, 800];
const skipFiles = new Set(['icon4.jpg']); // сюди можна додати іконки/логотип, які мають бути в SVG

await fs.mkdir(outputDir, { recursive: true });
const entries = await fs.readdir(inputDir, { withFileTypes: true });

for (const entry of entries) {
  if (!entry.isFile()) continue;
  const lowerName = entry.name.toLowerCase();
  if (skipFiles.has(lowerName)) continue;

  const ext = path.extname(entry.name).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const baseName = path.basename(entry.name, ext).toLowerCase();
  const fullPath = path.join(inputDir, entry.name);

  for (const w of widths) {
    await sharp(fullPath)
      .resize({ width: w, withoutEnlargement: true })
      .avif({ quality: 55 })
      .toFile(path.join(outputDir, `${baseName}-${w}.avif`));

    await sharp(fullPath)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(path.join(outputDir, `${baseName}-${w}.webp`));

    await sharp(fullPath)
      .resize({ width: w, withoutEnlargement: true })
      .jpeg({ quality: 82 })
      .toFile(path.join(outputDir, `${baseName}-${w}.jpg`));
  }
}