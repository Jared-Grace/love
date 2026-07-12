import { text_combine } from "./text_combine.mjs";
export function app_replace_rule_set_attribute_refresh_count(refresh_count) {
  let a = text_combine("refresh_count_", refresh_count);
  return a;
}
