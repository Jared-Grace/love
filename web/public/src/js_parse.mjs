import { js_parse_generic } from "../../../karate_code/public/src/js_parse_generic.mjs";
import * as acorn from "acorn";
export function js_parse(code) {
  let v = js_parse_generic(acorn, code);
  return v;
}
