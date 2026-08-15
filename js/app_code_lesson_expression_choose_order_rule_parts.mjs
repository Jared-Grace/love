import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_expression_choose_order_rule_parts(lead, line) {
  arguments_assert(arguments, 2);
  ("the one wording of this lesson's rule, said of whichever line it is being said about: the card that states it up front and the walkthrough that reminds a learner of it after a wrong press read from here");
  ("Said of a LINE rather than of operators in the abstract, because that is how the lesson has stated it from the first card - a learner who was shown the rule about the line in front of them and then reminded of it in other words would be reading a second rule and checking it against the first.");
  ("lead carries the words in front of the line, so the reminder can open differently from the statement while the rule itself stays one wording; it is the leading PLAIN part of the interleaving, which is why it is passed rather than joined on afterwards.");
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let parts = [lead, line, " we solve the ", times, " before the ", plus];
  return parts;
}
