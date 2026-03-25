import { playwright_by_attribute_exists_assert } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_assert.mjs";
import { playwright_by_attribute_click } from "../../../love/public/src/playwright_by_attribute_click.mjs";
import { qa_attribute_test_data } from "../../../love/public/src/qa_attribute_test_data.mjs";
export async function playwright_by_attribute_test_click(
  page,
  attribute_value,
) {
  const name2 = qa_attribute_test_data();
  await playwright_by_attribute_exists_assert(page, name2, attribute_value);
  const name = qa_attribute_test_data();
  await playwright_by_attribute_click(page, name, attribute_value);
}
