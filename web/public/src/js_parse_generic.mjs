import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { global_import_get } from "../../../love/public/src/global_import_get.mjs";
import { global_import_exists } from "../../../love/public/src/global_import_exists.mjs";
export function js_parse_generic(acorn, code) {
  let ast = null;
  try {
    let a = null;
    let module_name = "acorn";
    let e = global_import_exists(module_name);
    if (e) {
      a = global_import_get(module_name);
    } else {
      a = acorn;
    }
    ast = a.parse(code, {
      ecmaVersion: 2020,
      sourceType: "module",
    });
  } catch (e) {
    log_keep(code);
    throw e;
  }
  return ast;
}
