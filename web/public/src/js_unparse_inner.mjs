import { global_get } from "../../../love/public/src/global_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { global_import_get } from "../../../love/public/src/global_import_get.mjs";
import { global_import_exists } from "../../../love/public/src/global_import_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import astring from "astring";
export function js_unparse_inner(ast) {
  marker("1");
  let g = null;
  let module_name = "astring";
  let global = global_get();
  log({
    globall: global,
  });
  let e = global_import_exists(module_name);
  if (e) {
    a = global_import_get(module_name);
  } else {
    a = astring;
  }
  let { generate }=a
  let output = g(ast);
  return output;
}
