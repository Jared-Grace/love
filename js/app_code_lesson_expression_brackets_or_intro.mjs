import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_parentheses_inside_before_outside } from "./app_code_parentheses_inside_before_outside.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_expression_brackets_worked_card } from "./app_code_lesson_expression_brackets_worked_card.mjs";
import { app_code_lesson_expression_choose_order_brackets_either_side } from "./app_code_lesson_expression_choose_order_brackets_either_side.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_brackets_or_intro(root) {
  arguments_assert(arguments, 1);
  ("the three cards above the brackets around || lesson: the rule in two sentences, then the same line carried all the way to its value with the brackets at one end and then the other");
  ("The general rule comes first and this lesson's consequence of it second, in that order, because the second is only believable once the first is in front of the reader. Said the other way round - a || beating an && - it reads as a new fact about those two marks, and a learner has no reason to expect it to hold for any other pair.");
  ("The first of the two is the sentence the parentheses lessons taught, asked for from the one place that holds it rather than written again, so it arrives word-for-word as the thing the learner already knows. What is new here is only the second row.");
  ("The second row says the two operators would go the other way round without the marks, which is the whole of why the marks are worth reading. Left off, the row would say a || goes first and a learner who remembers that && goes first would take one of the two rules to be wrong.");
  ("Each worked line is one the brackets change. Without them the same three words come to true, and with them they come to false, so a learner who reads past the marks gets the card wrong in front of themselves. A line that came to the same thing either way would be a card that never had to be read.");
  ("Both sides are worked rather than one of them being drawn, which is what the two lessons that taught brackets do: each says the marks may stand at either end and then works a line with them at the other end, in the same card. Drawn instead, half the visits would show the sentence with nothing beside it that moves - and half the questions ask for the side that visit never showed.");
  ("The second working is the first one turned round: the same three words, in the other order, with the brackets at the other end. Different words would leave a reader finding which of two things had changed before they could see that only one had.");
  ("The sentence between them is asked for from the pressing lesson rather than written again here, because a learner reads the two screens one after the other and a near-copy is a thing to be compared where the same words are a thing already known.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let heading_none = [];
  let heading_either =
    app_code_lesson_expression_choose_order_brackets_either_side();
  let rule_card = app_code_container_light_blue(root);
  let inside_first = app_code_parentheses_inside_before_outside("");
  html_div_cycle_code(rule_card, [
    "Remember, whatever is inside ",
    left_bracket,
    " and ",
    right_bracket,
    inside_first,
  ]);
  html_div_cycle_code(rule_card, [
    "So a ",
    or_symbol,
    " inside ",
    left_bracket,
    " and ",
    right_bracket,
    " is solved before a ",
    and_symbol,
    ", even though a ",
    and_symbol,
    " is normally solved before a ",
    or_symbol,
  ]);
  app_code_lesson_expression_brackets_worked_card(
    root,
    heading_none,
    false,
    true,
    true,
    false,
    true,
  );
  app_code_lesson_expression_brackets_worked_card(
    root,
    heading_either,
    true,
    true,
    false,
    true,
    true,
  );
}
