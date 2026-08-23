import { app_code_lesson_expression_round_nearest_digit_card } from "./app_code_lesson_expression_round_nearest_digit_card.mjs";
import { text_decimal_combine } from "./text_decimal_combine.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_lesson_chip_color } from "./app_code_lesson_chip_color.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_expression_round_nearest_round_code } from "./app_code_lesson_expression_round_nearest_round_code.mjs";
import { app_code_lesson_expression_round_nearest_rule_line } from "./app_code_lesson_expression_round_nearest_rule_line.mjs";
import { app_code_first_decimal_digit_phrase } from "./app_code_first_decimal_digit_phrase.mjs";
import { app_shared_spaced_below } from "./app_shared_spaced_below.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
import { app_code_lesson_expression_round_nearest_rounds_line } from "./app_code_lesson_expression_round_nearest_rounds_line.mjs";
export function app_code_lesson_expression_round_nearest_above(root) {
  arguments_assert(arguments, 1);
  ("TWO QUESTIONS, ASKED IN ORDER, each with its answer under it. First: what is the first digit after the decimal point? Second: what does Math.round do with it? The whole screen is those two and nothing else, and a learner can say where they are on it at any point by which question they are under.");
  ("It used to open on two worked Math.round lines and the word nearest, and only then explain what decides. So the answer arrived before the question, and the digit that decides was named for the first time three lines after two numbers had already been rounded by it. Now the deciding digit is found first, on its own, and every line after it is about what that digit does.");
  ("EACH CASE OF THE RULE CARRIES ITS OWN EXAMPLES rather than sending the learner back up the screen. The rule line says which digits round down, the line under it rounds one of them, and the line under that rounds the knife-edge case the same way. Read straight down, a case is stated and then shown twice; read as it used to be, the examples stood four lines above the rule they were examples of.");
  ("Nearest comes LAST, as a conclusion. It is the word the lesson is named for, and it is the one thing on the screen that follows from everything else rather than explaining any of it - so Therefore, and nothing under it.");
  ("Randomized each visit. The whole part avoids 3 and 4 so it never equals a highlighted first digit (3 or 4 below), which would make the number look like it repeats a digit");
  let whole = list_random_item([2, 5, 6, 7]);
  let whole_text = text_to(whole);
  ("the two highlighted first digits get two of the shared categorical chip colours (amber and blue) so digit colouring is chosen the same way as everywhere else, and the two digits read as clearly distinct");
  let color_low = app_code_lesson_chip_color(3);
  let color_high = app_code_lesson_chip_color(2);
  let low_digit = integer_random(1, 4);
  let low_decimal = text_decimal_combine(whole_text, low_digit);
  let high_digit = integer_random(5, 9);
  let high_decimal = text_decimal_combine(whole_text, high_digit);
  let input = add(whole, 1);
  let whole_up = text_to(input);
  ("first question: which digit is it. Two numbers, two different first digits in two colours, and nothing about rounding yet - the digit is found before it is put to work");
  app_code_lesson_expression_round_nearest_digit_card(
    root,
    whole_text,
    color_low,
    color_high,
  );
  ("second question: what the digit decides. Each case is a rule line, then that rule on an ordinary number, then that rule on the knife-edge number where a learner would most doubt it");
  let rule = app_code_container_light_blue(root);
  html_div_cycle_code(rule, ["What does ", "Math.round", " do?"]);
  app_code_lesson_expression_round_nearest_rule_line(
    rule,
    ["0", "1", "2", "3", "4"],
    "Math.floor",
  );
  let v = app_code_lesson_expression_round_nearest_round_code(low_decimal);
  html_div_cycle_code(rule, ["For example, ", v, " is ", whole_text]);
  let down = app_code_lesson_expression_round_nearest_rounds_line(
    "4999",
    ' rounds "down" to ',
    whole_text,
    rule,
    whole_text,
    "And, likewise, ",
  );
  ("a gap under the first case, so the second reads as the other half of one rule rather than as a fifth line of the first");
  app_shared_spaced_below(down);
  app_code_lesson_expression_round_nearest_rule_line(
    rule,
    ["5", "6", "7", "8", "9"],
    "Math.ceil",
  );
  let v2 = app_code_lesson_expression_round_nearest_round_code(high_decimal);
  html_div_cycle_code(rule, ["For example, ", v2, " is ", whole_up]);
  let up = app_code_lesson_expression_round_nearest_rounds_line(
    "5",
    ' rounds "up" to ',
    whole_up,
    rule,
    whole_text,
    "And, likewise, ",
  );
  app_shared_spaced_below(up);
  let decides = html_div(rule);
  html_span_text(decides, "So the ");
  app_code_first_decimal_digit_phrase(decides);
  html_span_text(
    decides,
    ' decides which way a number rounds - "up" or "down"',
  );
  app_shared_spaced_below(decides);
  let name_line = html_div(rule);
  html_span_text(name_line, "Therefore, ");
  html_span_text_code_dark(name_line, "Math.round");
  html_span_text(name_line, " gives the ");
  let term = html_span_text(name_line, "nearest");
  html_bold(term);
  html_span_text(name_line, " whole number");
}
