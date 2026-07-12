import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_integers_abbreviation_in(a) {
  object_merge_set(a, {
    in: ["", "in", "teger (non-negative whole number)"],
  });
}
