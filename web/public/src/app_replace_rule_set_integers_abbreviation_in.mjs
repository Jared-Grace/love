import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_set_integers_abbreviation_in(a) {
  object_merge(a, {
    in: ["", "in", "teger (non-negative whole number)"],
  });
}
