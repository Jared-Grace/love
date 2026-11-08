import { noop } from "./noop.mjs";
import { app_learn_js_symbols_separated_on_question_generic } from "./app_learn_js_symbols_separated_on_question_generic.mjs";
export function app_learn_js_symbols_separated_on_question(parent, symbols) {
  let r = app_learn_js_symbols_separated_on_question_generic(
    parent,
    symbols,
    noop,
  );
  return r;
}
