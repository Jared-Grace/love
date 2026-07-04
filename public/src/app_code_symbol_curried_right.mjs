import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
export function app_code_symbol_curried_right(text) {
  let c = function app_code_symbol_curried_right_result(parent) {
    let span = app_code_symbol(parent, text);
    return span;
  };
  return c;
}
