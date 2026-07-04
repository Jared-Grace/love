import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
export function app_code_symbol_curried(parent) {
  let c = function app_code_symbol_curried_result(text) {
    return app_code_symbol(parent, text);
  };
  return c;
}
