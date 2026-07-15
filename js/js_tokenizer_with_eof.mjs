import { bind } from "./bind.mjs";
import { module_acorn_get } from "./module_acorn_get.mjs";
import { invoke_until } from "./invoke_until.mjs";
import { js_parse_generic_arg } from "./js_parse_generic_arg.mjs";
import { log_keep } from "./log_keep.mjs";
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
  } catch (e) {
    log_keep(js_tokenizer_with_eof.name, code);
    throw e;
  }
  return tokens;
}
