import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_expression_tree_of_array_program } from "./app_learn_js_expression_tree_of_array_program.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { app_learn_js_expression_value } from "./app_learn_js_expression_value.mjs";
import { app_learn_js_lesson_quiz_qa_question } from "./app_learn_js_lesson_quiz_qa_question.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { app_learn_js_lesson_expression_choose_order_reason_run } from "./app_learn_js_lesson_expression_choose_order_reason_run.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_expression_choose_order_decoys_generic } from "./app_learn_js_lesson_expression_choose_order_decoys_generic.mjs";
import { app_learn_js_expression_array_decoys } from "./app_learn_js_expression_array_decoys.mjs";
export function app_learn_js_lesson_expression_choose_order_twin_array_generic(
  title,
  code_titled,
  twin_get,
) {
  arguments_assert(arguments, 3);
  ('the pressing lesson in front of an array lesson whose programs name an array on one line and write out a line reading it on the next: let a = ["love", "joy", "peace"]; console.log(a[a.length - 1]); pressed as a.length, then 3 - 1, then a[2]');
  ("The lines are the twin's own programs, asked of the twin, for the reason the plain twin reader gives. What differs is that a line reading an array means nothing without the array, so the question kept is the whole program rather than the line printed back from its shape, and the line walked above says which array it reads.");
  let twin = twin_get();
  let twin_above = property_get(twin, "above");
  let twin_batch = property_get(twin, "batch");
  let tree_of_code = app_learn_js_expression_tree_of_array_program;
  function program_new() {
    "one program out of the twin";
    let items = twin_batch();
    let code = list_first_property(items, "question");
    return code;
  }
  function batch_get() {
    "one program a screen, answered with what its last line comes to";
    let question = program_new();
    let tree = tree_of_code(question);
    let answer = app_learn_js_expression_value(tree);
    let item = {
      question,
      answer,
    };
    let list = [item];
    return list;
  }
  function tree_for(question) {
    let tree = tree_of_code(question);
    return tree;
  }
  function tree_of(qa, info) {
    let answer_property = property_get(info, "answer_property");
    let question = app_learn_js_lesson_quiz_qa_question(qa, answer_property);
    let tree = tree_for(question);
    return tree;
  }
  let bank = {
    batch_get,
    tree_for,
    tree_of,
  };
  function above(root, context) {
    "the twin's opening, then one of its programs walked all the way down, under the line naming its array";
    twin_above(root, context);
    let code = program_new();
    let lines = text_split_newline(code);
    let head = list_first(lines);
    let heading = ["", head];
    let tree = tree_of_code(code);
    app_learn_js_lesson_expression_choose_order_reason_run(root, heading, tree);
  }
  ("titled the way the twin is, words then code, so the two stand side by side on the home screen as one subject");
  let name_id = app_learn_js_lesson_statement_title_name_id(title, code_titled);
  let lesson = app_learn_js_lesson_expression_choose_order_decoys_generic(
    name_id,
    above,
    bank,
    app_learn_js_expression_array_decoys,
  );
  return lesson;
}
