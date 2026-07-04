import { app_code_symbol_separated } from "../../../love/public/src/app_code_symbol_separated.mjs";
export function app_code_symbol_separated_curried(parent) {
  let c = function app_code_symbol_separated_curried_result(d) {
    let s = app_code_symbol_separated(parent, d);
    return s;
  };
  return c;
}
