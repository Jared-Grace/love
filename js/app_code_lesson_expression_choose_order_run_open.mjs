import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_choose_order_run_open(
  root,
  line_card,
  tree,
) {
  "Name the line the walk is about - Suppose, and the line written out whole - into the card it is named in, then open the card the steps will be written into and hand that back.";
  "EVERY WALK OF A LINE OPENS THE SAME WAY and the lessons wrote it out again each time. The wording of the naming row is the part that matters: a learner reads Suppose on one lesson and then a different word on the next, and reads it as a different kind of step rather than as the same one.";
  "IT IS HANDED THE CARD TO NAME THE LINE IN RATHER THAN MAKING IT, because one caller puts a heading of its own above the line and needs the card already there to put it in. The card the steps go in has no such caller, so that one is made here.";
  arguments_assert(arguments, 3);
  let whole_line = app_code_expression_code(tree);
  app_code_lesson_suppose_solve_line(line_card, "Suppose", whole_line);
  let run = app_code_container_light_blue(root);
  return run;
}
