import { app_code_lesson_statement_name_count_pair } from "./app_code_lesson_statement_name_count_pair.mjs";
import { app_code_lesson_statement_name_pair_first } from "./app_code_lesson_statement_name_pair_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_statement_name_count() {
  arguments_assert(arguments, 0);
  ("a name given one more than it holds twice over: let a = 7; console.log(a); a = a + 1; console.log(a); a = a + 1; console.log(a); writes out 7, 8 and 9");
  ("The screen before this one taught the line. This one says the line twice and nothing else, so the one thing a learner has to work out is what the second copy does.");
  ("It is quizzed and not merely shown, which is the change this screen was split out to make. The line said twice used to sit at the foot of the screen that taught the line, where it was something to read on the way past; a learner who read it as doing nothing was never asked a question that would tell them so. Asked, they answer one number too low and find out.");
  ("Counting is what the whole of programming does with this line, and it is worth a screen of its own for that reason rather than because the line is hard. A learner meeting it first inside a loop would be working out the loop and this line at once.");
  let pair = app_code_lesson_statement_name_count_pair();
  let lesson = app_code_lesson_statement_name_pair_first(pair);
  return lesson;
}
