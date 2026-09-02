import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_happy } from "./qa_attribute_test_happy.mjs";
import { qa_attribute_test_happy_onward } from "./qa_attribute_test_happy_onward.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function playwright_happy_answer_selector() {
  "the marked controls that ANSWER the screen: everything marked as the way on, less the one also marked as the way out of it";
  "Said as one selector rather than as two lists compared afterwards, because the two lists come back as fresh handles each time they are asked for and nothing in them can be matched up with anything in the other.";
  arguments_assert(arguments, 0);
  let happy = qa_attribute_test_happy();
  let onward = qa_attribute_test_happy_onward();
  let selector = text_combine_multiple(["[", happy, "]:not([", onward, "])"]);
  return selector;
}
