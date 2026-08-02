import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { text_combine } from "./text_combine.mjs";
export function server_sandbox() {
  let __filename = fileURLToPath(import.meta.url);
  let __dirname = path.dirname(__filename);
  let app = express();
  let PORT = 3000;
  console.log(__dirname);
  let v = express.static(__dirname);
  app.use(v);
  function lambda() {
    let combined = text_combine("Server running on http://localhost:", PORT);
    console.log(combined);
  }
  app.listen(PORT, lambda);
}
