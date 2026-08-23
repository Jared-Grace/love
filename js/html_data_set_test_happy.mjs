import { arguments_assert } from "./arguments_assert.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { qa_attribute_test_happy } from "./qa_attribute_test_happy.mjs";
export function html_data_set_test_happy(component) {
  ("mark this control as the way on: the right answer, the next button, whatever a person who is getting it right would press here");
  ("Put it on where the app decides which one is right, so the marking cannot drift from the deciding.");
  ("The value is the word yes rather than anything about this particular control. What is being said is only that this is the one, and a walker that had to read a value would need to know what the values meant - which is the app knowledge it exists not to need.");
  arguments_assert(arguments, 1);
  let key = qa_attribute_test_happy();
  html_attribute_set(component, key, "yes");
}
