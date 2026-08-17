import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_compare_expression } from "./app_code_lesson_expression_choose_order_compare_expression.mjs";
import { app_code_lesson_expression_choose_order_compare_tree_of_code } from "./app_code_lesson_expression_choose_order_compare_tree_of_code.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_choose_order_compare_questions() {
  arguments_assert(arguments, 0);
  ("the question bank a press-the-comparisons lesson draws on: lines built as shapes, handed out one a screen, and worked out again from the writing they were printed as");
  ("The first line a learner ever meets puts the comparison on the RIGHT, so the part that may be solved first is not the leftmost thing on the line. A learner shown the other shape first would be right by reading position rather than by reading the line, and would be right for a reason that fails on the next question - the same reason the arithmetic bank opens on the line whose times is on the right.");
  ("After that the two shapes take turns rather than being drawn by chance, because there are only two of them: chance would run three or four of one shape together often enough for a learner to settle into it, and turns cost nothing to arrange.");
  ("True and false take turns as the whole line's answer for the same reason. The answer turns every line and the shape turns every second one, so all four pairings of the two come round; turning both every line would leave two of the four never drawn at all.");
  let comparison_left = false;
  let want_true = true;
  function tree_new() {
    "the next line: the other answer from last time, and the other shape once the two answers have both been asked of this one";
    let tree = app_code_lesson_expression_choose_order_compare_expression(
      want_true,
      comparison_left,
    );
    want_true = not(want_true);
    if (want_true) {
      comparison_left = not(comparison_left);
    }
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
      app_code_lesson_expression_choose_order_compare_tree_of_code(question);
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
