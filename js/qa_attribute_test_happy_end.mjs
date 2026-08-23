import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_happy } from "./qa_attribute_test_happy.mjs";
import { text_combine } from "./text_combine.mjs";
export function qa_attribute_test_happy_end() {
  ("the attribute an app puts on the screen that means there is nowhere further to go - the walk is over and it finished rather than got stuck");
  ("A walk that simply ran out of things to click cannot tell arriving from breaking. Both look like a screen with no way on, and one of them is the whole reason for walking. So finishing is something the app SAYS, and a walk that stops without hearing it said has failed.");
  arguments_assert(arguments, 0);
  let base = qa_attribute_test_happy();
  let r = text_combine(base, "-end");
  return r;
}
