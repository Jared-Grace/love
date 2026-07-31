import { app_replace_rule_sets_prefix } from "./app_replace_rule_sets_prefix.mjs";
import { app_shared_name_text_to_identifier } from "./app_shared_name_text_to_identifier.mjs";
export function app_replace_rule_sets_name(found) {
  let prefix = app_replace_rule_sets_prefix();
  let f_name_new = app_shared_name_text_to_identifier(prefix, found);
  return f_name_new;
}
