import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 const config = {
  entry: './main.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    iife: false, 
  },
};
export default config;