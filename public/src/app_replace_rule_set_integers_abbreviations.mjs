import { app_replace_rule_set_integer_digits_abbreviations } from "../../../love/public/src/app_replace_rule_set_integer_digits_abbreviations.mjs";
export function app_replace_rule_set_integers_abbreviations() {
  let i = app_replace_rule_set_integer_digits_abbreviations();
  let r = {
    di: ["", "di", "git (numbers 0-9)"],
    i: ["", "i", "nteger (non-negative whole number)"],
  };
  return r;
}
