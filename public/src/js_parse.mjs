import { ternary } from "../../../love/public/src/ternary.mjs";
import { js_parse_generic } from "../../../love/public/src/js_parse_generic.mjs";
import * as acorn from "acorn";
import { global_import_get } from "../../../love/public/src/global_import_get.mjs";
import { global_import_exists } from "../../../love/public/src/global_import_exists.mjs";
export function js_parse(code) {
  let a = null;
  let module_name = "acorn";
  let e = global_import_exists(module_name);
  a = ternary(e, global_import_get(module_name), acorn);
  let ast = js_parse_generic(a, code);
  return ast;
}
