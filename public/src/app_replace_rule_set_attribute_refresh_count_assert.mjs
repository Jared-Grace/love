import { playwright_by_attribute_test_exists_assert } from "../../../love/public/src/playwright_by_attribute_test_exists_assert.mjs";
import { app_replace_rule_set_attribute_refresh_count } from "../../../love/public/src/app_replace_rule_set_attribute_refresh_count.mjs";
export async function app_replace_rule_set_attribute_refresh_count_assert(
  refresh_count,
  page,
) {
  refresh_count++;
  let a = app_replace_rule_set_attribute_refresh_count(refresh_count);
  await playwright_by_attribute_test_exists_assert(page, a);
  return refresh_count;
}
