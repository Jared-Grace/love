import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_expression_tree_of_array_program } from "./app_learn_js_expression_tree_of_array_program.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { app_learn_js_expression_value } from "./app_learn_js_expression_value.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { app_learn_js_lesson_quiz_qa_question } from "./app_learn_js_lesson_quiz_qa_question.mjs";
import { app_learn_js_lesson_expression_choose_order_reason_run } from "./app_learn_js_lesson_expression_choose_order_reason_run.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_expression_array_decoys } from "./app_learn_js_expression_array_decoys.mjs";
import { app_learn_js_label_code_question } from "./app_learn_js_label_code_question.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_empty } from "./text_empty.mjs";
import { app_learn_js_example_answer_label } from "./app_learn_js_example_answer_label.mjs";
import { app_learn_js_label_text_set } from "./app_learn_js_label_text_set.mjs";
import { app_learn_js_lesson_expression_choose_order_solve_answer_draw } from "./app_learn_js_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_learn_js_label_text } from "./app_learn_js_label_text.mjs";
import { app_learn_js_lesson_expression_choose_order_solve_example } from "./app_learn_js_lesson_expression_choose_order_solve_example.mjs";
import { app_learn_js_lesson_expression_choose_order_generic } from "./app_learn_js_lesson_expression_choose_order_generic.mjs";
export function app_learn_js_lesson_expression_choose_order_twin_array_generic(
  title,
  code_titled,
  twin,
) {
  arguments_assert(arguments, 3);
  ('the pressing lesson in front of an array lesson whose programs name an array on one line and write out a line reading it on the next: let a = ["love", "joy", "peace"]; console.log(a[a.length - 1]); pressed as a.length, then 3 - 1, then a[2]');
  ("The lines are the twin's own programs, asked of the twin, for the reason the plain twin reader gives. What differs is that a line reading an array means nothing without the array, so the question kept is the whole program rather than the line printed back from its shape, and the line walked above says which array it reads.");
  ("2026-11-12: handed the twin itself rather than a way to build it, so the twin can build this lesson from inside itself and merge the two");
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
  ("each line read is kept beside the line naming its array, looked up by the line itself, so the front page can show the array above the line to press - seen on screen 2026-11-09, a[a.length - 1] standing alone with no array to read it in");
  let heads = new WeakMap();
  function tree_for(question) {
    let tree = tree_of_code(question);
    let lines_read = text_split_newline(question);
    let head_read = list_first(lines_read);
    heads.set(tree, head_read);
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
  let decoys = app_learn_js_expression_array_decoys;
  function answer_draw(parent, tree, on_success, on_wrong, answer_label_set) {
    "the quiz: the line naming the array under the quiz's own label, now saying Code, then the line to press under a label of its own that does the asking";
    "2026-11-09, at the human's asking: Code over the array and Expression to solve over the line, in that order, so each label sits over the one thing it names - the quiz's label slot stands above everything in the answers, so it names the code that comes first, and the asking moves to a label under it";
    let code_label = app_learn_js_label_code_question();
    answer_label_set(code_label);
    let head_shown = heads.get(tree);
    app_learn_js_div_cycle_code(parent, ["", head_shown]);
    let quiz_label = text_empty();
    let asking = app_learn_js_example_answer_label(parent, quiz_label);
    function say(words) {
      app_learn_js_label_text_set(asking, words);
    }
    app_learn_js_lesson_expression_choose_order_solve_answer_draw(
      parent,
      tree,
      on_success,
      on_wrong,
      say,
      decoys,
    );
  }
  function example_draw(parent, card, tree) {
    "the front page: the line naming the array under a Code label, then the line to press under the asking";
    let head_shown = heads.get(tree);
    let code_label = app_learn_js_label_code_question();
    app_learn_js_label_text(parent, code_label);
    app_learn_js_div_cycle_code(parent, ["", head_shown]);
    app_learn_js_lesson_expression_choose_order_solve_example(
      parent,
      card,
      tree,
      decoys,
    );
  }
  let lesson = app_learn_js_lesson_expression_choose_order_generic(
    name_id,
    above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
