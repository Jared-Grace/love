import { fn_name } from "./fn_name.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
export function app_replace_rule_sets_prefix() {
  let n = fn_name("app_replace_rule_sets");
  let prefix = text_suffix_without(n, "s");
  return prefix;
}
