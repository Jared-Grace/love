import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_happy } from "./qa_attribute_test_happy.mjs";
import { text_combine } from "./text_combine.mjs";
export function qa_attribute_test_happy_onward() {
  "the attribute an app puts on the control that LEAVES this screen rather than answering it - the Next button and nothing else";
  "A walk that knows only which controls are the way on cannot tell answering a question from walking out of one. On a screen holding both it takes whichever stands first in the page, so the moment the question stops being marked - which is the moment it is half answered - the way out is all that is left and the walk takes it. The lesson behind it is then never recorded as done, and a course whose last lesson sends the walk back to the first unfinished one has no exit at all.";
  "It rides alongside the happy attribute rather than replacing it, so an app that marks its Next and knows nothing about this goes on being walked exactly as before.";
  arguments_assert(arguments, 0);
  let base = qa_attribute_test_happy();
  let r = text_combine(base, "-onward");
  return r;
}
