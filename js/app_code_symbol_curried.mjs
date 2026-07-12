import { app_code_symbol } from "./app_code_symbol.mjs";
export function app_code_symbol_curried(parent) {
  let c = function app_code_symbol_curried_result(text) {
    let span = app_code_symbol(parent, text);
    return span;
  };
  return c;
}
