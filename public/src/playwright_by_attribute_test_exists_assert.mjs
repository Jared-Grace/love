import { playwright_by_attribute_exists_assert_assertion } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_assert_assertion.mjs";
import { playwright_by_attribute_exists } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists.mjs";
export async function playwright_by_attribute_test_exists_assert(
  page,
  name,
  value,
) {
  let e = await playwright_by_attribute_exists(page, name, value);
  playwright_by_attribute_exists_assert_assertion(e, name, value);
}
