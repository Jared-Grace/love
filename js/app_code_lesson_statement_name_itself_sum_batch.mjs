import { app_code_lesson_statement_name_first_written_batch } from "./app_code_lesson_statement_name_first_written_batch.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_sum_number_pairs } from "./app_code_lesson_statement_name_sum_number_pairs.mjs";
import { app_code_lesson_statement_name_itself_sum_title_code } from "./app_code_lesson_statement_name_itself_sum_title_code.mjs";
export function app_code_lesson_statement_name_itself_sum_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives two numbers two names, gives the first name what the two add up to, and writes the first one out");
  ("The same four pairs of numbers the two lessons before this one ask about, because all three differ in one line and not in their arithmetic. A learner who has just worked these four sums out twice meets them a third time with the total written back into a name they already read, so the only thing that can be new in the answer is the line this lesson changed.");
  ("So the three wrong answers a question offers are the other three questions' answers. Nothing has to be invented to fill the buttons, and every wrong answer is a total that some sum on this lesson really does come to.");
  let pairs = app_code_lesson_statement_name_sum_number_pairs();
  let line = app_code_lesson_statement_name_itself_sum_title_code();
  let codes = app_code_lesson_statement_name_first_written_batch(pairs, line);
  return codes;
}
