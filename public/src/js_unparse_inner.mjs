import { global_external_exists } from "../../../love/public/src/global_external_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { generate } from "astring";
export function js_unparse_inner(ast) {
  marker("1");
  let output = generate(ast);
  return output;
  let module_name = "astring";
  let e = global_external_exists(module_name);
  if (false) {
  }
}
