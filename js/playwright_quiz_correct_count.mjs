import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_quiz_correct } from "./qa_attribute_test_quiz_correct.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { playwright_selector_handles_now } from "./playwright_selector_handles_now.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { null_is } from "./null_is.mjs";
import { number_from_text } from "./number_from_text.mjs";
export async function playwright_quiz_correct_count(page) {
  "how many quiz questions this page says have been answered right so far, and none when it does not say";
  "A page that never says is not broken and is not asked about again - it is an app that has no quizzes in it, or one written before there was anything to say. What a walk does with the answer is compare it with the same answer a moment earlier, and a count that stays at none simply never moves.";
  arguments_assert(arguments, 1);
  let key = qa_attribute_test_quiz_correct();
  let selector = text_combine_multiple(["[", key, "]"]);
  let handles = await playwright_selector_handles_now(page, selector);
  let silent = list_empty_is(handles);
  if (silent) {
    let r = 0;
    return r;
  }
  let first = list_first(handles);
  let written = await first.getAttribute(key);
  let missing = null_is(written);
  if (missing) {
    let r2 = 0;
    return r2;
  }
  let count = number_from_text(written);
  return count;
}
