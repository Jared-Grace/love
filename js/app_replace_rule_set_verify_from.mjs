import { app_replace_rule_set_verify_from_try } from "./app_replace_rule_set_verify_from_try.mjs";
import { assert_json } from "./assert_json.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_rule_set_verify_from(rules_parsed, start, end) {
  let dfs = app_replace_rule_set_verify_from_try(rules_parsed, start, end);
  let found = property_get(dfs, "found");
  let r = {
    start,
    end,
  };
  assert_json(found, r);
  return dfs;
}
