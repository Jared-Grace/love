import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { folder_public } from "./folder_public.mjs";

export function server() {
  const app = express();
  const port = 3000;

  // __dirname workaround for ES modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Serve static files from the "public" directory
  app.use(express.static(path.join(__dirname, folder_public())));

  app.listen(port, () => {
    console.log(`Static server running at http://localhost:${port}`);
  });
}
