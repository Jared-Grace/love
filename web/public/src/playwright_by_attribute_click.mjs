import { playwright_by_attribute_exists_assert } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_assert.mjs";
import { playwright_by_attribute_single } from "../../../love/public/src/playwright_by_attribute_single.mjs";
export async function playwright_by_attribute_click(
  page,
  name,
  attribute_value,
) {
  await playwright_by_attribute_exists_assert(page, name, attribute_value);
  let only = await playwright_by_attribute_single(page, name, attribute_value);
  await only.click();
}
