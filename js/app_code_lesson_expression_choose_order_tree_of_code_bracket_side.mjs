import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { app_code_lesson_expression_choose_order_tree_of_code_generic } from "./app_code_lesson_expression_choose_order_tree_of_code_generic.mjs";
export function app_code_lesson_expression_choose_order_tree_of_code_bracket_side(
  code,
  node_left,
  node_right,
) {
  arguments_assert(arguments, 3);
  ("the shape behind a line whose brackets stand at one end or the other, worked out again from the line itself: a line opening with a bracket is hung with the first two words gathered, and any other line with the last two");
  ("Which of the two hangings it is, is read off the one mark that says it. A line these lessons write carries exactly one pair of brackets, so the pair either opens the line or stands further along it, and nothing has to be remembered from the run that printed it.");
  ("The two builders are handed in because a lesson that shows brackets which change nothing needs them written back into the shape, and a lesson whose brackets always change something can let the printer work them out. Both read the line the same way and differ only in what they build from it.");
  let left_bracket = js_code_parenthesis_left();
  let opens_bracketed = text_starts_with(code, left_bracket);
  if (opens_bracketed) {
    let tree_left =
      app_code_lesson_expression_choose_order_tree_of_code_generic(
        code,
        node_left,
      );
    return tree_left;
  }
  let tree = app_code_lesson_expression_choose_order_tree_of_code_generic(
    code,
    node_right,
  );
  return tree;
}
