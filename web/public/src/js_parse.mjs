import { module_acorn_get } from "../../../love/public/src/module_acorn_get.mjs";
import { js_parse_generic } from "../../../love/public/src/js_parse_generic.mjs";
export function js_parse(code) {
  let acorn = module_acorn_get();
  let ast = js_parse_generic(acorn, code);
  return ast;
}
