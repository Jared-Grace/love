import { app_code_review_due_is } from "./app_code_review_due_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { add_1 } from "./add_1.mjs";
import { list_add } from "./list_add.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_review_numbers() {
  "every lesson number that has a review standing under it";
  "It is worked out from the lessons rather than written down beside them, because where the reviews fall is already decided by a rule - one under every fifth lesson, a longer one under every twenty-fifth - and a written list would be a second answer to a question that already has one. The two would agree until the day somebody wrote a lesson.";
  "The whole run of lessons is asked, not the run a learner is being shown, because these numbers are used to forget what a learner has finished. A learner who has finished a review that has since been held back still has it written down, and a list that skipped it would leave that behind after they asked for everything to be forgotten.";
  arguments_assert(arguments, 0);
  let lessons = app_code_lessons();
  let numbers = [];
  function lambda(lesson, index) {
    let number = add_1(index);
    let has_review = app_code_review_due_is(number);
    if (has_review) {
      list_add(numbers, number);
    }
  }
  each_index(lessons, lambda);
  return numbers;
}
