import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_data } from "./qa_attribute_test_data.mjs";
import { text_combine } from "./text_combine.mjs";
export function qa_attribute_test_quiz_correct() {
  "the attribute an app writes on the page carrying how many quiz questions have been answered right since it opened - a count that only ever goes up";
  "A walk cannot see a right answer land. The screen a moment before and a moment after look the same to it, and the difference between them is a record written where it cannot read. This is that difference said out loud, so a walk waits for the answer to be TAKEN rather than for a length of time to pass and hopes.";
  "It is one number for the whole page rather than one per lesson, because the only question anybody asks of it is whether it moved. What it counts is never read; the app already knows which quiz of which lesson was answered, and saying that here would be the second copy of it that can disagree.";
  arguments_assert(arguments, 0);
  let base = qa_attribute_test_data();
  let r = text_combine(base, "-quiz-correct");
  return r;
}
