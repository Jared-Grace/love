import { playwright_by_attribute_test_exists_assert } from "../../../love/public/src/playwright_by_attribute_test_exists_assert.mjs";
import { playwright_by_attribute_click } from "../../../love/public/src/playwright_by_attribute_click.mjs";
import { qa_attribute_test_data } from "../../../love/public/src/qa_attribute_test_data.mjs";
export async function playwright_by_attribute_test_click(
  page,
  attribute_value,
) {
  await playwright_by_attribute_test_exists_assert(page, attribute_value);
  const name = qa_attribute_test_data();
  await playwright_by_attribute_click(page, name, attribute_value);
}
