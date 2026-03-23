import { playwright_by_attribute_exists_assert } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_assert.mjs";
import { qa_attribute_test_data } from "../../../love/public/src/qa_attribute_test_data.mjs";
export async function playwright_by_attribute_test_exists_assert(page, value) {
  const name = qa_attribute_test_data();
  let e = await playwright_by_attribute_exists_assert(page, name, value);
}
