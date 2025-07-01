import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a canvas
const canvas = createCanvas(64, 64);
const ctx = canvas.getContext('2d');

// Draw background
ctx.fillStyle = '#4A4A4A';
ctx.fillRect(0, 0, 64, 64);

// Draw letter "S"
ctx.fillStyle = '#FFFFFF';
ctx.font = 'bold 40px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('S', 32, 32);

// Save as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.ico'), buffer);

console.log('Favicon created successfully!'); 