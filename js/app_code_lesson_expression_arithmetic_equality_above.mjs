import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
export function app_code_lesson_expression_arithmetic_equality_above(root) {
  arguments_assert(arguments, 1);
  ("first the rule, then it worked once true and once false: each side is done first to its own number, and only then are the two numbers compared");
  let header = app_code_container_light_blue(root);
  html_div_cycle_code(header, ["Both sides of a comparison can be arithmetic"]);
  let yes = app_code_container_light_blue(root);
  ("the rule is named by its two operators before the line is worked, because a learner who has just been told that both sides MAY be arithmetic still has no reason to do the arithmetic first - the naming is what turns the worked line below from a thing to copy into a thing that follows");
  ("The same words as the lessons ahead of this one - X is solved before Y - so that a learner meeting the shape again with a different operator in the middle recognises the sentence rather than reading a new rule.");
  let plus = js_operator_plus_symbol();
  let equality = js_operator_triple_equal_symbol();
  html_div_cycle_code(yes, ["", plus, " is solved before ", equality]);
  html_div_cycle_code(yes, [
    "So, for ",
    "3 + 4 === 5 + 2",
    ", we solve ",
    "3 + 4",
    " and ",
    "5 + 2",
    " first, before the ",
    "===",
  ]);
  html_div_cycle_code(yes, [
    "Both are ",
    "7",
    ", so ",
    "7 === 7",
    " is ",
    "true",
  ]);
  let no = app_code_container_light_blue(root);
  html_div_cycle_code(no, [
    "For ",
    "10 - 4 === 2 + 5",
    ", we solve ",
    "10 - 4",
    " and ",
    "2 + 5",
    " first",
  ]);
  html_div_cycle_code(no, [
    "That is ",
    "6",
    " and ",
    "7",
    ", so ",
    "6 === 7",
    " is ",
    "false",
  ]);
}
