import { app_code_lesson_expression_choose_order_tree_of_code } from "./app_code_lesson_expression_choose_order_tree_of_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { app_code_lesson_expression_choose_order_expression } from "./app_code_lesson_expression_choose_order_expression.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
export function app_code_lesson_expression_choose_order_questions() {
  arguments_assert(arguments, 0);
  ("the question bank a press-the-operators lesson draws on: lines built as shapes, handed out one a screen, and worked out again from the writing they were printed as");
  ("The quiz hands its question over as text, so the working out needs the shape back. Every line here used to be kept beside the writing it produced and looked up there, which held only for as long as this one run of the lesson - a review saves the line to ask it again, and comes back to it after the page has been loaded afresh, at which point the map had never heard of it and the lesson threw. The shape is worked out from the line instead, which no reload can take away.");
  ("Each lesson calls this for itself and gets its own bank. That is what makes the very first line a learner meets in EACH of them the one with the multiplication on the right, rather than only in whichever of them they opened first.");
  let first_done = false;
  function tree_new() {
    "the first line a learner ever meets puts the times on the RIGHT, so choosing the leftmost operator is wrong on the very first press; after that the side is left to chance, because a strict left-right-left would be a pattern to ride instead of a line to read";
    let strong_right = true;
    if (first_done) {
      strong_right = boolean_random();
    }
    first_done = true;
    let tree = app_code_lesson_expression_choose_order_expression(strong_right);
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
    let tree = app_code_lesson_expression_choose_order_tree_of_code(question);
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
