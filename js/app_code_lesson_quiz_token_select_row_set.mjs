import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_token_select_marks_set } from "./app_code_lesson_quiz_token_select_marks_set.mjs";
import { app_code_lesson_quiz_token_select_counts_set } from "./app_code_lesson_quiz_token_select_counts_set.mjs";
export function app_code_lesson_quiz_token_select_row_set(
  tokens_unique,
  chosen,
  variations,
  buttons,
) {
  arguments_assert(arguments, 4);
  ("bring the row of pieces up to date with the orders still standing: which pieces may be tapped next, and how many more times each is still wanted.");
  ("BOTH ARE SAID AT THE SAME MOMENT AND OUT OF THE SAME ORDERS, so one place is called after a tap instead of two. Two calls side by side is two chances for a later hand to move one and leave the other, and the two would then be describing different moments of the same row - a mark from the tap before beside a count from this one.");
  ("THEY ARE STILL TWO FUNCTIONS BECAUSE THEY ARE SAID TO DIFFERENT READERS. What may go next is written where only a walk of the course can read it, on purpose: shown to the learner it would light the one right piece and there would be nothing left to work out. How many are still wanted is written on the face of the piece, for the learner, because without it the row says a line wants one of something when it wants two. Folding them into one body would put those two audiences in one place and invite the next reader to give the learner the first one too.");
  app_code_lesson_quiz_token_select_marks_set(
    tokens_unique,
    chosen,
    variations,
    buttons,
  );
  app_code_lesson_quiz_token_select_counts_set(
    tokens_unique,
    chosen,
    variations,
    buttons,
  );
}
