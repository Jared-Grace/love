import { log_keep } from "./log_keep.mjs";
import { path_join } from "./path_join.mjs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { folder_public } from "./folder_public.mjs";
export function server() {
  const app = express();
  const port = 8080;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let result = folder_public();
  let result2 = path_join([__dirname, "..", "..", result]);
  let v = express.static(result2);
  app.use(v);
  app.listen(port, () => {
    log_keep(`Static server running at http://localhost:${port}`);
  });
}
