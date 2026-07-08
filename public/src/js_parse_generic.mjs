import { js_parse_generic_arg } from "../../../love/public/src/js_parse_generic_arg.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export function js_parse_generic(acorn, code) {
  let ast = null;
  try {
    let r = js_parse_generic_arg();
    ast = acorn.parse(code, r);
  } catch (e) {
    log_keep(js_parse_generic.name, code);
    throw e;
  }
  return ast;
}
