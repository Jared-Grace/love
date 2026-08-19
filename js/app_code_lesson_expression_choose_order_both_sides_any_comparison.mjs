export function app_code_lesson_expression_choose_order_both_sides_any_comparison() {
  "choosing which part of a line to solve and then what that part comes to, on a line with arithmetic on each side of a comparison that is not ===: 9 - 2 < 4 + 1, choose the 9 - 2, choose 7, then the 4 + 1, choose 5, then the <, choose false";
  "The lesson before this one is the same doing with === in the middle every single time. A learner who has only ever seen that line can carry away that a line is solved from the sides in when the middle is ===, which is a rule about one symbol rather than the rule there is.";
  "So the middle here is drawn fresh for every line from the other five comparisons. Nothing else moves: the two sides are still solved first, and the press that comes last is still answered with a true or a false. What is left over once the middle keeps changing and the doing does not is the thing the lesson is for.";
  let name_id =
    app_code_lesson_expression_choose_order_both_sides_any_comparison_title_name_id();
  let bank =
    app_code_lesson_expression_choose_order_both_sides_any_comparison_questions();
  let lesson = app_code_lesson_expression_choose_order_mixed_generic(
    name_id,
    app_code_lesson_expression_choose_order_both_sides_any_comparison_above,
    bank,
  );
  return lesson;
}
