import { app_shared_name_text_to_identifier } from "./app_shared_name_text_to_identifier.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
export function app_replace_rule_sets_name(found) {
  let n = app_replace_rule_sets.name;
  let prefix = text_suffix_without(n, "s");
  let f_name_new = app_shared_name_text_to_identifier(prefix, found);
  return f_name_new;
}
