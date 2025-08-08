import {path_join} from "./path_join.mjs";
import express from "express";
import path from "path";
import {fileURLToPath} from "url";
import {folder_public} from "./folder_public.mjs";
export function server() {
  const app = express();
  marker();
  const port = 3000;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  app.use(express.static(path_join([__dirname, "..", "..", folder_public()])));
  app.listen(port, () => {
    console.log(`Static server running at http://localhost:${port}`);
  });
}
