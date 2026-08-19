export function app_code_lesson_expression_choose_order_or_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a line with a comparison on each side of ||, built as a shape so the quiz can work one operator out at a time: 3 < 5 || 2 < 4, or 7 >= 9 || 4 !== 4");
  ("The other way round from &&: a false || needs both sides false and there is only one way to have that, while a true one has three. So the two lessons are not the same lesson twice - a learner who has settled into two-trues-means-true meets a line that comes out true with a false side in it.");
  let outer_symbol = js_operator_or_symbol();
  let tree = app_code_lesson_expression_choose_order_boolean_expression_generic(
    want_true,
    outer_symbol,
  );
  return tree;
}
