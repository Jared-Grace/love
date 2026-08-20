import { app_code_expression_node_not_of_parts } from "./app_code_expression_node_not_of_parts.mjs";
import { app_code_operator_truths_wanted } from "./app_code_operator_truths_wanted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { list_get } from "./list_get.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { not } from "./not.mjs";
export function app_code_lesson_expression_choose_order_not_pair_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a true and a false joined by an && or an || with a ! in front of the whole of it, built as a shape so the quiz can work one part out at a time: !(true && false), or !(false || false)");
  ("Three parts where the ! lesson before it had two, and the third is the whole of what is new. There, what stood under the ! was a comparison and the learner had a single part to work out before the ! could go. Here what stands under it is two things joined, so the same rule - a part is ready when nothing is left inside it - has to be read twice on the one line.");
  ("What the joined pair has to come to is the opposite of what the line has to come to, because the ! turns over whatever is under it. So the line is asked for as a true one or a false one exactly like every other, and the pair inside it is asked for the other way round.");
  ("Which of the two operators stands inside is drawn from question to question, because both are old and neither is what the lesson is teaching. Left as one of them always, a learner would have the whole line by the second question and could stop reading the middle of it - and the operator they would then never meet under a ! is the one that would surprise them.");
  ("It is drawn rather than taken in turns because the answer already alternates, one question true and the next false. An operator alternating in step with that would agree with the answer every single time, which hands the learner a rule for which button to press without ever solving the line.");
  let inner_true = not(want_true);
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let joins = [and_symbol, or_symbol];
  let symbol = list_random_item(joins);
  let truths = app_code_operator_truths_wanted(symbol, inner_true);
  let parts = {
    left: list_get(truths, 0),
    symbol,
    right: list_get(truths, 1),
  };
  let tree = app_code_expression_node_not_of_parts(parts);
  return tree;
}
