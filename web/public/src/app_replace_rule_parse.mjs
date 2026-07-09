import { app_replace_rule_parse_left_right_only } from "../../../love/public/src/app_replace_rule_parse_left_right_only.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
export function app_replace_rule_parse(rule) {
  let p = app_replace_rule_parse_left_right_only(rule);
  let to = object_merge_set(p, {
    original: rule,
  });
  return p;
}
