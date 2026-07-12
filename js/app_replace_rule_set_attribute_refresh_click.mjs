import { app_replace_rule_set_attribute_refresh_count_assert } from "./app_replace_rule_set_attribute_refresh_count_assert.mjs";
import { playwright_by_attribute_test_click } from "./playwright_by_attribute_test_click.mjs";
export async function app_replace_rule_set_attribute_refresh_click(
  page,
  original,
  refresh_count,
) {
  await playwright_by_attribute_test_click(page, original);
  refresh_count = await app_replace_rule_set_attribute_refresh_count_assert(
    refresh_count,
    page,
  );
  return refresh_count;
}
