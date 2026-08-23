import { arguments_assert } from "./arguments_assert.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { qa_attribute_test_happy_end } from "./qa_attribute_test_happy_end.mjs";
export function html_data_set_test_happy_end(component) {
  ("mark this as the end of the road: a walker that reaches it has finished rather than got stuck");
  arguments_assert(arguments, 1);
  let key = qa_attribute_test_happy_end();
  html_attribute_set(component, key, "yes");
}
