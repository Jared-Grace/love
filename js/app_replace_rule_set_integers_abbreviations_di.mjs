import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_integers_abbreviations_di(i) {
  object_merge_set(i, {
    di: ["", "di", "git (numbers 0-9)"],
  });
}
