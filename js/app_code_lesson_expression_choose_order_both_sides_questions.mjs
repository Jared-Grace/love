import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_both_sides_expression } from "./app_code_lesson_expression_choose_order_both_sides_expression.mjs";
import { app_code_lesson_expression_choose_order_both_sides_tree_of_code } from "./app_code_lesson_expression_choose_order_both_sides_tree_of_code.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_choose_order_both_sides_questions() {
  arguments_assert(arguments, 0);
  ("the question bank a press-both-sides lesson draws on: lines built as shapes, handed out one a screen, and worked out again from the writing they were printed as");
  ("The first line a learner meets is a true one, because a true line is the one that has something to say: two sides that look nothing alike and land on the same number. A false line met first would be read as the ordinary case and the true one as the surprise, which is the wrong way round for what the lesson is about.");
  ("After that true and false take turns rather than being drawn by chance. Chance would run three or four true lines together often enough for a learner to settle into answering true without solving, and turns cost nothing to arrange.");
  ("One shape and no turning of it, because both sides of this line are ready from the start - either may be solved first, and there is no leftmost-is-right habit for a second shape to break. That is what the two-comparisons lesson exists to say, and it says it about brackets; here it is simply true of the line.");
  let want_true = true;
  function tree_new() {
    "the next line: the other answer from last time";
    let tree =
      app_code_lesson_expression_choose_order_both_sides_expression(want_true);
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
      app_code_lesson_expression_choose_order_both_sides_tree_of_code(question);
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
