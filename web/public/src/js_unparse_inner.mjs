import { property_get } from "../../../love/public/src/property_get.mjs";
import { global_import_get } from "../../../love/public/src/global_import_get.mjs";
import { global_import_exists } from "../../../love/public/src/global_import_exists.mjs";
import { generate } from "astring";
export function js_unparse_inner(ast) {
  let g = null;
  let module_name = "astring";
  let e = global_import_exists(module_name);
  if (e) {
    let v = global_import_get(module_name);
    g = property_get(v, "generate");
  } else {
    g = generate;
  }
  let output = g(ast);
  return output;
}
