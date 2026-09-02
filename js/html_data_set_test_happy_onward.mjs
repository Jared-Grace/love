import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_happy_onward } from "./qa_attribute_test_happy_onward.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_data_set_test_happy_onward(component) {
  "mark this control as the one that leaves the screen, as opposed to one that answers what the screen is asking";
  "It is set beside the happy mark and never instead of it, because the way out is still a way on - what this adds is only that it is the way out in particular.";
  arguments_assert(arguments, 1);
  let key = qa_attribute_test_happy_onward();
  html_attribute_set(component, key, "yes");
}
