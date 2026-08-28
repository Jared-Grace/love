import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
import { app_code_lesson_expression_choose_order_tree_of_code_generic } from "./app_code_lesson_expression_choose_order_tree_of_code_generic.mjs";
export function app_code_lesson_expression_choose_order_and_before_or_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: false && true || true gives back the shape whose && holds the first two words, and false || true && true gives back the one whose && holds the last two");
  ("WHICH OF THE TWO HANGINGS IT IS, IS READ OFF WHICH OPERATOR STANDS FIRST. The && gathers its own two sides wherever it stands, so a line opening on the && holds its first two words together and a line opening on the || holds its last two. That is the lesson itself, read backwards, and it means nothing has to be remembered from the run that printed the line.");
  ("Which hanging it is used to be handed in rather than looked for, because the maker built the one shape and the && was leftmost on every line the lesson had ever printed. A learner could then answer every question by pressing the leftmost operator, which is the one habit these lessons are built to break, so the maker now writes the line both ways round and the reading has to look.");
  ("These lines carry no brackets, so the second word is the first operator and nothing has to be cleaned off it before it can be looked at. Taking the rest of the line apart is the same work as on the brackets lesson, so it is said once, next door.");
  let and_symbol = js_operator_and_symbol();
  let words = text_split_space(code);
  let first_operator = list_get(words, 1);
  let and_leftmost = equal(first_operator, and_symbol);
  let node_from_parts = ternary(
    and_leftmost,
    app_code_expression_node_left_operator_first,
    app_code_expression_node_right_operator_first,
  );
  let tree = app_code_lesson_expression_choose_order_tree_of_code_generic(
    code,
    node_from_parts,
  );
  return tree;
}
