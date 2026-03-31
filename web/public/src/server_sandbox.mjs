
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url'; // 

export function server_sandbox() {
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

console.log(__dirname)
app.use(express.static(__dirname));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
}