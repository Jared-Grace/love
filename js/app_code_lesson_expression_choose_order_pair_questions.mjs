import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_pair_expression } from "./app_code_lesson_expression_choose_order_pair_expression.mjs";
import { app_code_lesson_expression_choose_order_pair_tree_of_code } from "./app_code_lesson_expression_choose_order_pair_tree_of_code.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_choose_order_pair_questions() {
  arguments_assert(arguments, 0);
  ("the question bank a two-comparisons-compared lesson draws on: lines built as shapes, handed out one a screen, and worked out again from the writing they were printed as");
  ("True and false take turns as the whole line's answer rather than being drawn by chance, because there are only two of them and chance would run three or four of one together often enough for a learner to settle into answering the same way twice.");
  ("There is only one SHAPE here, unlike the lesson before it - the two sides of the line are alike by construction, so there is no left and right version of it to alternate between. What varies from line to line is which comparisons the two sides are built from, and that is drawn afresh every time.");
  let want_true = true;
  function tree_new() {
    "the next line, landing on the other answer from last time";
    let tree =
      app_code_lesson_expression_choose_order_pair_expression(want_true);
    want_true = not(want_true);
    return tree;
  }
  function item_new() {
    "a question is the line as written and its answer is what the line comes to";
    let tree = tree_new();
    let question = app_code_expression_code(tree);
    let answer = app_code_expression_value(tree);
    let item = {
      question,
      answer,
    };
    return item;
  }
  function batch_get() {
    "one line a screen";
    let item = item_new();
    let list = [item];
    return list;
  }
  function tree_for(question) {
    "the shape behind a line, worked out again from the writing it was printed as";
    let tree =
      app_code_lesson_expression_choose_order_pair_tree_of_code(question);
    return tree;
  }
  function tree_of(qa, info) {
    "the same working out done from a quiz's question and answer pair, which is how the quiz side of a lesson holds the line it is asking about";
    let answer_property = property_get(info, "answer_property");
    let question = app_code_lesson_quiz_qa_question(qa, answer_property);
    let tree = tree_for(question);
    return tree;
  }
  let bank = {
    batch_get,
    tree_for,
    tree_of,
  };
  return bank;
}
