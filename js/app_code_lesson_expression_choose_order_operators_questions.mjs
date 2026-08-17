import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_operators_expression } from "./app_code_lesson_expression_choose_order_operators_expression.mjs";
import { app_code_lesson_expression_choose_order_operators_tree_of_code } from "./app_code_lesson_expression_choose_order_operators_tree_of_code.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_choose_order_operators_questions() {
  arguments_assert(arguments, 0);
  ("the question bank this lesson draws on: lines built as shapes, handed out one a screen, and worked out again from the writing they were printed as");
  ("The first line a learner ever meets puts the stronger operator on the RIGHT, so choosing the leftmost operator is wrong on the very first press. A learner shown the other shape first would be right by reading position rather than by reading the operators, and would be right for a reason that fails on the next question - the same reason the two banks before this one open the way they do.");
  ("After that the two sides take turns rather than being drawn by chance, because there are only two of them: chance would run three or four of one side together often enough for a learner to settle into it, and turns cost nothing to arrange. The operators themselves are still drawn, because there are four of them in two pairs and a fixed march through the combinations would be a longer pattern to ride than the one it removed.");
  let strong_right = true;
  function tree_new() {
    "the next line: the stronger operator on the other side from last time";
    let tree =
      app_code_lesson_expression_choose_order_operators_expression(strong_right);
    strong_right = not(strong_right);
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
      app_code_lesson_expression_choose_order_operators_tree_of_code(question);
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
