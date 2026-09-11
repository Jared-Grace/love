import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_flat_random_same_strength } from "./app_code_expression_flat_random_same_strength.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_expression_flat_tree_of_code } from "./app_code_expression_flat_tree_of_code.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
export function app_code_lesson_expression_choose_order_same_strength_questions_generic(
  operator_count,
) {
  arguments_assert(arguments, 1);
  ("the question bank a same-strength pressing lesson draws on: lines carrying as many operators as asked for, every one of them the same strength as the rest, handed out one a screen and worked out again from the writing they were printed as");
  ("No line carries both a strength that jumps and one that waits, so no line can be answered by knowing which operator is the stronger. What is left to read is position, and position is the whole of what these lessons are about.");
  ("Which strength a line is drawn from is left to the growing rather than arranged, so a learner sees adding lines and scaling lines mixed through a sitting and cannot settle into reading only one of them.");
  ("HOW MANY OPERATORS IS HANDED IN, because that is the only thing the two lessons on this bank differ by. One asks for two steps and one for three, and everything else about them is the same doing: the same growing, the same reading back, one line a screen. Written out twice, the day somebody improved the reading back only one lesson would have got it.");
  function item_new() {
    "a question is the line as written and its answer is what the line comes to";
    let tree = app_code_expression_flat_random_same_strength(operator_count);
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
