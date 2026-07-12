import { playwright_by_attribute_exists_assert } from "../../portfolio_qa/js/playwright_by_attribute_exists_assert.mjs";
import { qa_attribute_test_data } from "./qa_attribute_test_data.mjs";
export async function playwright_by_attribute_test_exists_assert(page, value) {
  let name = qa_attribute_test_data();
  await playwright_by_attribute_exists_assert(page, name, value);
}
