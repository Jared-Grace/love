import { arguments_assert } from "./arguments_assert.mjs";
import { html_attribute_remove } from "./html_attribute_remove.mjs";
import { qa_attribute_test_happy } from "./qa_attribute_test_happy.mjs";
export function html_data_set_test_happy_remove(component) {
  ("this control is no longer the way on - it has been taken, and what carries a person forward now is something else on the screen");
  ("A right answer stays on the screen after it is chosen, green and locked. Left marked, it is still the first thing a walk finds, so the walk presses a locked button forever and reports going round in a circle. Unmarking it as it is taken hands the marking on to whatever appears next, which is what a person's attention does too.");
  arguments_assert(arguments, 1);
  let key = qa_attribute_test_happy();
  html_attribute_remove(component, key);
}
