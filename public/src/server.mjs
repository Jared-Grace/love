import { marker } from "../../../love/public/src/marker.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
export function server() {
  marker("1");
  const app = express();
  const port = 8080;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let result = folder_public();
  let previous = folder_previous();
  let result2 = path_join([__dirname, previous, previous, result]);
  let v = express.static(result2);
  app.use(v);
  function lambda() {
    log_keep(`Static server running at http://localhost:${port}`);
  }
  app.listen(port, lambda);
}
