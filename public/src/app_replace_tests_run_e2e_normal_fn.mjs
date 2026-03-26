import { equal } from "../../../love/public/src/equal.mjs";
import { app_replace_rule_set_attribute_symbol } from "../../../love/public/src/app_replace_rule_set_attribute_symbol.mjs";
import { app_replace_rule_set_attribute_refresh_click } from "../../../love/public/src/app_replace_rule_set_attribute_refresh_click.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_replace_tests_run_e2e_normal_fn(
  p,
  refresh_count,
  page,
  rule_original_previous,
) {
  let rule = property_get(p, "rule");
  let original = property_get(rule, "original");
  if (equal(left, right)) {
  }
  refresh_count = await app_replace_rule_set_attribute_refresh_click(
    page,
    original,
    refresh_count,
  );
  rule_original_previous = original;
  let index = property_get(p, "index");
  let symbol_id = app_replace_rule_set_attribute_symbol(index);
  let r3 = {
    refresh_count,
    symbol_id,
    rule_original_previous,
  };
  return r3;
}
