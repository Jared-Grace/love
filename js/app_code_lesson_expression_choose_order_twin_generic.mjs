import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_expression_flat_tree_of_code } from "./app_code_expression_flat_tree_of_code.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_reason_run } from "./app_code_lesson_expression_choose_order_reason_run.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
export function app_code_lesson_expression_choose_order_twin_generic(
  title_words,
  twin_get,
) {
  arguments_assert(arguments, 2);
  ("the pressing lesson that stands in front of an all-at-once lesson whose lines carry two operators and no parentheses: the same lines, taken apart one press at a time before they are asked for whole");
  ("★ THE LINES ARE THE TWIN'S OWN, ASKED OF THE TWIN. The lesson after this one already knows how to build its lines - which numbers keep a divide whole, which keep a minus at or above nought - so a pressing lesson that built its own would be a second copy of those choices, free to drift the day one of them was changed. Drawn from the twin, the line pressed here is always a line the next screen could hand out.");
  ("★ THE TELLING ABOVE IS THE TWIN'S OWN TOO, WITH ONE LINE WALKED UNDER IT. The two lessons open out of one opening, so the learner reads it here, presses the lines, and then meets the same words again where the whole answer is asked for. The walk is the one every pressing lesson reads, and it says why each step is the one that may go.");
  ("The title is the twin's own words with Solve in front, handed in as the parts to write, plain and code in turn.");
  ("The line is read back with the reader for any line with no parentheses, because every twin this serves writes its lines that way. A twin whose lines carry parentheses would need a reader of its own, and is not one to hand in here.");
  let twin = twin_get();
  let twin_above = property_get(twin, "above");
  let twin_batch = property_get(twin, "batch");
  function tree_new() {
    "one line out of the twin, read back into the shape it was printed from";
    let items = twin_batch();
    let item = list_first(items);
    let code = property_get(item, "question");
    let tree = app_code_expression_flat_tree_of_code(code);
    return tree;
  }
  function expression(turn_unused) {
    "the next line to press; the bank's turning is not used, because which line comes next is the twin's own choosing";
    let tree = tree_new();
    return tree;
  }
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    expression,
    app_code_expression_flat_tree_of_code,
  );
  function above(root, context) {
    "the twin's opening, then one of its lines walked all the way down";
    twin_above(root, context);
    let tree = tree_new();
    let heading_none = [];
    app_code_lesson_expression_choose_order_reason_run(
      root,
      heading_none,
      tree,
    );
  }
  function answer_draw(parent, tree, on_success, on_wrong, answer_label_set) {
    "the quiz, with the wrong values every arithmetic pressing lesson offers";
    app_code_lesson_expression_choose_order_solve_answer_draw(
      parent,
      tree,
      on_success,
      on_wrong,
      answer_label_set,
      app_code_expression_value_decoys,
    );
  }
  function example_draw(parent, card, tree) {
    "the front page, with the same wrong values the quiz offers";
    app_code_lesson_expression_choose_order_solve_example(
      parent,
      card,
      tree,
      app_code_expression_value_decoys,
    );
  }
  function paint(parent) {
    "the home title: the twin's own words with Solve in front";
    html_cycle_code(parent, title_words);
  }
  let left = app_code_category_expressions();
  let name_id = app_code_lesson_name_id_category_then(left, paint);
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
