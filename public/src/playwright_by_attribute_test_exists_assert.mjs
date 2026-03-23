import { qa_attribute_test_data } from "../../../love/public/src/qa_attribute_test_data.mjs";
import { playwright_by_attribute_exists_assert_assertion } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_assert_assertion.mjs";
import { playwright_by_attribute_exists } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists.mjs";
export async function playwright_by_attribute_test_exists_assert(page, value) {
  const name = qa_attribute_test_data();
  let e = await playwright_by_attribute_exists(page, name, value);
  playwright_by_attribute_exists_assert_assertion(e, name, value);
}
