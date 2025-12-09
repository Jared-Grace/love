import { function_dependencies_code_call } from "../../../love/public/src/function_dependencies_code_call.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
export function server() {
  marker("1");
  const app = express();
  let v2 = express.json();
  app.use(v2);
  const port = 8080;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let previous = folder_previous();
  let result2 = path_join([__dirname, previous, previous, previous]);
  let v = express.static(result2);
  async function lambda2(req, res) {
    let body2 = object_property_get(req, "body");
    let f_name = object_property_get(body2, "function_name");
    const middle = await function_dependencies_code_call(f_name);
    let result = await eval(middle);
    res.json({
      result,
    });
  }
  app.post("/api", lambda2);
  app.use(v);
  function lambda() {
    log_keep(`Static server running at http://localhost:${port}`);
  }
  app.listen(port, lambda);
}
