import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_parse_generic_arg } from "../../../love/public/src/js_parse_generic_arg.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export function js_tokenizer(acorn, code) {
  let ast = null;
  try {
    let a = js_parse_generic_arg();
    const tokenizer = acorn.tokenizer(code, a);
    function lambda(la) {
      while (true) {
        const token = tokenizer.getToken();
        list_add(tokens, token);
        if (token.type.label === "eof") {
          break;
        }
      }
    }
    let list = list_adder(lambda);
    const tokens = [];
  } catch (e) {
    log_keep(js_tokenizer.name, code);
    throw e;
  }
  return ast;
}
