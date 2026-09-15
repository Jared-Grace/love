import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_reason_run } from "./app_code_lesson_expression_choose_order_reason_run.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { app_code_lesson_expression_choose_order_decoys_generic } from "./app_code_lesson_expression_choose_order_decoys_generic.mjs";
export function app_code_lesson_expression_choose_order_twin_read_generic(
  title_words,
  twin_get,
  tree_of_code,
  decoys,
) {
  arguments_assert(arguments, 4);
  ("the pressing lesson that stands in front of an all-at-once lesson: the same lines, taken apart one press at a time before they are asked for whole");
  ("★ THE LINES ARE THE TWIN'S OWN, ASKED OF THE TWIN. The lesson after this one already knows how to build its lines - which numbers keep a divide whole, which keep a minus at or above nought - so a pressing lesson that built its own would be a second copy of those choices, free to drift the day one of them was changed. Drawn from the twin, the line pressed here is always a line the next screen could hand out.");
  ("★ THE TELLING ABOVE IS THE TWIN'S OWN TOO, WITH ONE LINE WALKED UNDER IT. The two lessons open out of one opening, so the learner reads it here, presses the lines, and then meets the same words again where the whole answer is asked for. The walk is the one every pressing lesson reads, and it says why each step is the one that may go.");
  ("The title is the twin's own words with Solve in front, handed in as the parts to write, plain and code in turn.");
  ("★ THE READER AND THE WRONG VALUES ARE HANDED IN, BECAUSE THEY ARE WHAT THE TWIN'S LINES DECIDE. A reader has to take apart exactly what the twin writes and then print it back the same way, so a line with parentheses needs a reader that knows them. A line of numbers is answered with other numbers, and a line that ends in true or false needs true or false offered on those parts.");
  let twin = twin_get();
  let twin_above = property_get(twin, "above");
  let twin_batch = property_get(twin, "batch");
  function tree_new() {
    "one line out of the twin, read back into the shape it was printed from";
    let items = twin_batch();
    let item = list_first(items);
    let code = property_get(item, "question");
    let tree = tree_of_code(code);
    return tree;
  }
  function expression(turn_unused) {
    "the next line to press; the bank's turning is not used, because which line comes next is the twin's own choosing";
    let tree = tree_new();
    return tree;
  }
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    expression,
    tree_of_code,
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
  function paint(parent) {
    "the home title: the twin's own words with Solve in front";
    html_cycle_code(parent, title_words);
  }
  let left = app_code_category_expressions();
  let name_id = app_code_lesson_name_id_category_then(left, paint);
  let lesson = app_code_lesson_expression_choose_order_decoys_generic(
    name_id,
    above,
    bank,
    decoys,
  );
  return lesson;
}
