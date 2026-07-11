import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function server_sandbox() {
  let __filename = fileURLToPath(import.meta.url);
  let __dirname = path.dirname(__filename);
  let app = express();
  let PORT = 3000;
  console.log(__dirname);
  app.use(express.static(__dirname));
  app.listen(PORT, () => {
    console.log(text_combine("Server running on http://localhost:", PORT));
  });
}
