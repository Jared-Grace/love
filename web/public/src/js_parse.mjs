import { js_parse_generic } from "../../../love/public/src/js_parse_generic.mjs";
import * as acorn from "acorn";
export function js_parse(code) {
  let ast = js_parse_generic(acorn, code);
  return ast;
}
