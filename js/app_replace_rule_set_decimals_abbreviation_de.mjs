import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_decimals_abbreviation_de(i) {
  let a = {
    de: ["", "de", "cimal number"],
  };
  let ab = object_merge_set(i, a);
  return ab;
}
