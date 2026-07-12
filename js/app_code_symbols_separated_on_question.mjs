import { noop } from "./noop.mjs";
import { app_code_symbols_separated_on_question_generic } from "./app_code_symbols_separated_on_question_generic.mjs";
export function app_code_symbols_separated_on_question(parent, symbols) {
  let r = app_code_symbols_separated_on_question_generic(parent, symbols, noop);
  return r;
}
