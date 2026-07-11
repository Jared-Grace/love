import { bind } from "../../../love/public/src/bind.mjs";
import { module_acorn_get } from "../../../love/public/src/module_acorn_get.mjs";
import { invoke_until } from "../../../love/public/src/invoke_until.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_parse_generic_arg } from "../../../love/public/src/js_parse_generic_arg.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export function js_tokenizer_with_eof(code) {
  let acorn = module_acorn_get();
  let tokens = null;
  try {
    let a = js_parse_generic_arg();
    let tokenizer = acorn.tokenizer(code, a);
    function end_is(token) {
      let r = token.type.label === "eof";
      return r;
    }
    let next_get = bind(tokenizer.getToken, tokenizer);
    tokens = invoke_until(next_get, end_is);
    log(js_tokenizer_with_eof.name, {
      tokens,
    });
  } catch (e) {
    log_keep(js_tokenizer_with_eof.name, code);
    throw e;
  }
  return tokens;
}
