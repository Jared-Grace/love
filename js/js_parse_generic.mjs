import { js_parse_generic_arg } from "./js_parse_generic_arg.mjs";
export function js_parse_generic(acorn, code) {
  let r = js_parse_generic_arg();
  let ast = acorn.parse(code, r);
  return ast;
}
