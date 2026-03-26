import { app_replace_rule_set_verify_from_try } from "../../../love/public/src/app_replace_rule_set_verify_from_try.mjs";
import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_replace_rule_set_verify_from(rules_parsed, start, end) {
  let dfs = app_replace_rule_set_verify_from_try(rules_parsed, start, end);
  let found = property_get(dfs, "found");
  function lambda3() {
    let r = {
      start,
      end,
    };
    return r;
  }
  assert_json_get(found, lambda3);
  return dfs;
}
