import { text_suffix_without } from "./text_suffix_without.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
export function app_replace_rule_sets_prefix() {
  let n = app_replace_rule_sets.name;
  let prefix = text_suffix_without(n, "s");
  return prefix;
}
