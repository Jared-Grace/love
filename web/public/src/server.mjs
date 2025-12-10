import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { function_dependencies_code } from "../../../love/public/src/function_dependencies_code.mjs";
import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
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
  async function api(req, res) {
    let body = object_property_get(req, "body");
    async function lambda2(temp_path_input) {
      let result5 = await file_overwrite(file_path, contents);
      async function lambda3(temp_path_output) {}
      let result4 = await file_temp(lambda3);
    }
    let result3 = await file_temp(lambda2);
    let args = object_property_get(body, "args");
    let f_name = object_property_get(body, "function_name");
    let { unaliased } = await function_name_unalias(f_name);
    let global_init = js_code_global_init();
    let code = await function_dependencies_code(unaliased);
    let call = js_code_call_statement(unaliased);
    log({
      f_name,
    });
    let code2 = js_code_call_args(f_name, args);
    let middle = `${global_init}
    ${code}
    ${code2}`;
    let result = await eval(middle);
    res.json({
      result,
    });
  }
  app.post("/api", api);
  app.use(v);
  function lambda() {
    log_keep(`Static server running at http://localhost:${port}`);
  }
  app.listen(port, lambda);
}
