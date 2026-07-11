import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function server_sandbox() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const app = express();
  const PORT = 3000;
  console.log(__dirname);
  app.use(express.static(__dirname));
  app.listen(PORT, () => {
    console.log(text_combine("Server running on http://localhost:", PORT));
  });
}
