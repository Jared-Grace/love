import { app_replace_rule_parse_left_right_only } from "../../../love/public/src/app_replace_rule_parse_left_right_only.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_parse(rule) {
  let p = app_replace_rule_parse_left_right_only(rule);
  let to2 = object_merge(p, {
    original: rule,
  });
  return p;
}
