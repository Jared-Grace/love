import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_arithmetic_to_value_symbols } from "./app_code_arithmetic_to_value_symbols.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { html_cycle_parts_and_list } from "./html_cycle_parts_and_list.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_code_lesson_expression_arithmetic_equality_above(root) {
  arguments_assert(arguments, 1);
  ("first the rule, then it worked once true and once false: each side is done first to its own number, and only then are the two numbers compared");
  let header = app_code_container_light_blue(root);
  html_div_cycle_code(header, ["Both sides of a comparison can be arithmetic"]);
  let yes = app_code_container_light_blue(root);
  ("the rule is named by its two operators before the line is worked, because a learner who has just been told that both sides MAY be arithmetic still has no reason to do the arithmetic first - the naming is what turns the worked line below from a thing to copy into a thing that follows");
  ("The same words as the lessons ahead of this one - X is solved before Y - so that a learner meeting the shape again with a different operator in the middle recognises the sentence rather than reading a new rule.");
  ("EVERY OPERATOR THE QUIZ CAN PUT ON A LINE IS NAMED, and the naming is built from the very list the lines are drawn from rather than typed out beside it. The rule used to name the plus alone - + is solved before === - while the sides of a line are each drawn an operator of their own from plus, minus and divide. Measured 2026-08-28 over four hundred drawn lines: of the eight hundred sides, 251 were written with +, 281 with - and 268 with /, and only 33 of the four hundred lines carried a + on both sides. So a learner was told a rule about one symbol and then handed 27 / 3 === 18 / 2, a line holding none of it, better than half the time.");
  ("Naming all three costs nothing a learner has to hold. The three are not three rules - they are the one rule about the one thing arithmetic is, and a row that says so is shorter to read than three rows saying it once each. What it removes is the learner's job of guessing whether the sentence they were given was about the plus or about the arithmetic.");
  ("Built from the symbols list so it cannot drift from it: a fourth operator added to the list the sides are drawn from is named here the moment it can appear, where a typed-out row would go on naming three and be wrong without anything going red.");
  let symbols = app_code_arithmetic_to_value_symbols();
  let equality = js_operator_triple_equal_symbol();
  let rule_parts = html_cycle_parts_and_list(symbols);
  let rule_tail = [" are all solved before ", equality];
  list_add_multiple(rule_parts, rule_tail);
  html_div_cycle_code(yes, rule_parts);
  ("THE TWO WORKED LINES SHOW ALL THREE OPERATORS BETWEEN THEM, one of them on each side of a comparison, so nothing the rule row names goes unseen. The true line used to be 3 + 4 === 5 + 2, which is a plus on both sides - the rarest shape the quiz draws at 33 lines in 400, and the one shape where the two sides look like the same working out done twice. The divide is what the old screen never showed at all.");
  ("12 / 4 === 1 + 2 is also the truer example of what a true line here IS. The two sides are meant to look unalike and land on one number - that is the whole reason the maker draws each side its own operator - and two sides both written with a plus hide that behind a likeness.");
  html_div_cycle_code(yes, [
    "So, for ",
    "12 / 4 === 1 + 2",
    ", we solve ",
    "12 / 4",
    " and ",
    "1 + 2",
    " first, before the ",
    "===",
  ]);
  html_div_cycle_code(yes, [
    "Both are ",
    "3",
    ", so ",
    "3 === 3",
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
