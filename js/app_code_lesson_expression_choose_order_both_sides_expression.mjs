export function app_code_lesson_expression_choose_order_both_sides_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a line with arithmetic on each side of ===, built as a shape so the quiz can work one operator out at a time: 3 + 4 === 5 + 2");
  ("=== alone, because what the line asks is whether the two sides land on the same number, which is the most intuitive both-sides case and the one the lesson after this asks for whole. The other five comparisons on a both-sides line are the lesson after this one, so that a learner meeting the shape for the first time has only the shape to meet.");
  let outer_symbol = js_operator_triple_equal_symbol();
  let tree =
    app_code_lesson_expression_choose_order_both_sides_expression_generic(
      want_true,
      outer_symbol,
    );
  return tree;
}
