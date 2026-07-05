import { boolean_to_text_validity } from "../../../love/public/src/boolean_to_text_validity.mjs";
import { throws_not } from "../../../love/public/src/throws_not.mjs";
export function app_code_symbols_eval_valid(symbols) {
  function lambda2() {
    eval(symbols);
  }
  let valid = throws_not(lambda2);
  let result = boolean_to_text_validity(valid);
  return result;
}
