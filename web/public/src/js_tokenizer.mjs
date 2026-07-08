import { invoke_until } from "../../../love/public/src/invoke_until.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_parse_generic_arg } from "../../../love/public/src/js_parse_generic_arg.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export function js_tokenizer(acorn, code) {
  let ast = null;
  try {
    let a = js_parse_generic_arg();
    const tokenizer = acorn.tokenizer(code, a);
    const next_get = tokenizer.getToken;
    function end_is(token) {
      let r = token.type.label === "eof";
      return r;
    }
    const tokens = invoke_until(next_get, end_is);
    log(js_tokenizer.name, {
      tokens,
    });
  } catch (e) {
    log_keep(js_tokenizer.name, code);
    throw e;
  }
  return ast;
}
