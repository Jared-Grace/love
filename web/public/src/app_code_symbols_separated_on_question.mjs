import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_symbols_separated_on_question_generic } from "../../../love/public/src/app_code_symbols_separated_on_question_generic.mjs";
export function app_code_symbols_separated_on_question(parent, symbols) {
  let r = app_code_symbols_separated_on_question_generic(parent, symbols, noop);
  return r;
}
