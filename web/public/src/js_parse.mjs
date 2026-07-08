import { module_acorn_get } from "../../../love/public/src/module_acorn_get.mjs";
import { js_parse_generic } from "../../../love/public/src/js_parse_generic.mjs";
import * as acorn from "acorn";
export function js_parse(code) {
  let a = module_acorn_get();
  let ast = js_parse_generic(a, code);
  return ast;
}
