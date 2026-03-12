import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_integer_digits_abbreviations } from "../../../love/public/src/app_replace_rule_set_integer_digits_abbreviations.mjs";
export function app_replace_rule_set_integers_abbreviations() {
  let i = app_replace_rule_set_integer_digits_abbreviations();
  let r = {
    di: ["", "di", "git (numbers 0-9)"],
    i: ["", "i", "nteger (non-negative whole number)"],
    p: ["", "p", "ositive digit (numbers 1-9)"],
  };
  object_merge(r, i);
  return r;
}
