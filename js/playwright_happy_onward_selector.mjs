import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_happy_onward } from "./qa_attribute_test_happy_onward.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function playwright_happy_onward_selector() {
  "the marked control that leaves the screen: the one a walk presses when it has finished with what the screen was asking";
  arguments_assert(arguments, 0);
  let onward = qa_attribute_test_happy_onward();
  let selector = text_combine_multiple(["[", onward, "]"]);
  return selector;
}
