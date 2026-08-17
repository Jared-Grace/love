import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_flat_random_strong_first } from "./app_code_expression_flat_random_strong_first.mjs";
import { app_code_expression_flat_tree_of_code } from "./app_code_expression_flat_tree_of_code.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_three_operator_count } from "./app_code_lesson_expression_choose_order_three_operator_count.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_choose_order_three_questions() {
  arguments_assert(arguments, 0);
  ("the question bank this lesson draws on: lines of three operators built as shapes, handed out one a screen, and worked out again from the writing they were printed as");
  ("Every line carries a times or a divide that has to go first, so no line can be answered by pressing from the left and hoping. Where on the line that operator falls is left to the growing rather than arranged, because at three operators there are more places for it than there are questions in a sitting, and a learner cannot settle into a pattern they never see repeat.");
  let count = app_code_lesson_expression_choose_order_three_operator_count();
  function item_new() {
    "a question is the line as written and its answer is what the line comes to";
    let tree = app_code_expression_flat_random_strong_first(count);
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
    let tree = app_code_expression_flat_tree_of_code(question);
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
