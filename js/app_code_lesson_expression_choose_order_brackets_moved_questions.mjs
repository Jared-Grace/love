import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_brackets_moved_expression } from "./app_code_lesson_expression_choose_order_brackets_moved_expression.mjs";
import { app_code_lesson_expression_choose_order_brackets_moved_tree_of_code } from "./app_code_lesson_expression_choose_order_brackets_moved_tree_of_code.mjs";
export function app_code_lesson_expression_choose_order_brackets_moved_questions() {
  arguments_assert(arguments, 0);
  ("the question bank of the moved brackets lesson: lines holding an && and then an || with the one pair of brackets round the first two words on some and round the last two on others, given out one a screen and worked out again from the writing they were printed as");
  ("The asking is the same asking as every other press-at-a-time lesson - one line a screen, true and false taking turns - so it is asked for rather than written out here. What differs is the maker and the reader, and they differ together, because this lesson writes brackets its neighbour would have worked out and dropped.");
  ("Where the brackets go is drawn rather than taken in turns, because here the answer is the operator they gather. Turned, the answer would turn with them and a learner would have the two buttons in an order - press one, then the other - which is a rule that solves nothing.");
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    expression_drawn,
    app_code_lesson_expression_choose_order_brackets_moved_tree_of_code,
  );
  return bank;
  function expression_drawn(want_true) {
    "the next line, with the brackets at whichever end this draw gives them";
    let sides = [true, false];
    let brackets_left = list_random_item(sides);
    let tree =
      app_code_lesson_expression_choose_order_brackets_moved_expression(
        want_true,
        brackets_left,
      );
    return tree;
  }
}
