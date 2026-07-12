import { playwright_by_attribute_click } from "./playwright_by_attribute_click.mjs";
import { qa_attribute_test_data } from "./qa_attribute_test_data.mjs";
export async function playwright_by_attribute_test_click(
  page,
  attribute_value,
) {
  let name = qa_attribute_test_data();
  await playwright_by_attribute_click(page, name, attribute_value);
}
