import { js_parse_ecma_version } from "../../../love/public/src/js_parse_ecma_version.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export function js_parse_generic(acorn, code) {
  let ast = null;
  try {
    ast = acorn.parse(code, {
      ecmaVersion: js_parse_ecma_version(),
      sourceType: "module",
    });
  } catch (e) {
    log_keep(js_parse_generic.name, code);
    throw e;
  }
  return ast;
}
