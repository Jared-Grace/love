import { log_keep } from "../../../love/public/src/log_keep.mjs";
export function js_tokenizer(acorn, code) {
  let ast = null;
  try {
    ast = acorn.parse(code, {
      ecmaVersion: 2020,
      sourceType: "module",
    });
    const tokenizer = acorn.tokenizer(code, {
      ecmaVersion: "latest",
    });
    const tokens = [];
    while (true) {
      const token = tokenizer.getToken();
      tokens.push(token);
      if (token.type.label === "eof") {
        break;
      }
    }
  } catch (e) {
    log_keep(js_tokenizer.name, code);
    throw e;
  }
  return ast;
}
