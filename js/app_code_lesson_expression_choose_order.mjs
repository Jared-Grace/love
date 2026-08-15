import { app_code_lesson_quizzes_exercises } from "./app_code_lesson_quizzes_exercises.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_walkthrough } from "./app_code_lesson_expression_choose_order_walkthrough.mjs";
import { app_code_lesson_expression_choose_order_above } from "./app_code_lesson_expression_choose_order_above.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
import { noop } from "./noop.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_expression_choose_order_expression } from "./app_code_lesson_expression_choose_order_expression.mjs";
import { app_code_lesson_expression_choose_order_title_name_id } from "./app_code_lesson_expression_choose_order_title_name_id.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_lesson_expression_choose_order() {
  "choosing which operator to work out first, and then the next, with the quiz working each one out as it is chosen: 1 + 2 * 3, choose the times, see 1 + 6, choose the plus";
  "Every lesson before this asks for the answer to a whole line at once, so a learner who knows the rule and slips on the arithmetic, and one who does the arithmetic and does not know the rule, are marked the same. Here the two are separated: the arithmetic is done FOR the learner and the only thing asked is the order.";
  "It stands BEFORE the cross-precedence lessons rather than after everything, because it is the tutorial version of what they ask for. A learner met two-step solving here first, as a line worked out one press at a time with the arithmetic done for them, and only then is asked for the answer to such a line in one go. Placed last it taught the step-at-a-time reading to somebody who had already had to find it for themselves - and a learner who never found it was stuck on every two-step line from the cross-precedence ones right through to two comparisons compared, which is where the difficulty was actually reported.";
  "One quiz kind, not three. Backwards asks what code produces this value, and here the value is not what is being asked for; unscramble asks the learner to build the line, and the line is given. Both would be questions about something the lesson is not teaching.";
  "Two operators a line - the smallest number that is still a choice. A wrong press refuses that operator and leaves the other pressable, so a wrong first press is followed by a forced right one; that is why the review now requeues twice rather than once. Three operators is the next step, and it belongs after this shape has been met, not inside it.";
  "The front page and the quiz press the same line, built by the one unit both of them call. What the front page adds is words: which operator to press, and what the press just did. Two copies of the pressing, one of them narrated, would drift the moment either was touched.";
  let name_id = app_code_lesson_expression_choose_order_title_name_id();
  let trees = {};
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
    "a question is the line as written and its answer is what the line comes to; the shape it was built from is kept beside them under the same writing, because the quiz works the line out a step at a time and a shape cannot be recovered from its own text";
    let tree = tree_new();
    let question = app_code_expression_code(tree);
    property_set(trees, question, tree);
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
  function tree_of(qa, info) {
    "the shape behind a question, found again from the writing it was printed as - the quiz hands its question over as text, and the step-at-a-time working needs the shape it came from";
    let answer_property = property_get(info, "answer_property");
    let question = app_code_lesson_quiz_qa_question(qa, answer_property);
    let tree = property_get(trees, question);
    return tree;
  }
  function on_answer(parent, info, qa, on_success, on_wrong) {
    "the quiz: the same line to press as the front page, with nothing said about which operator to press - that is the whole of what is being asked";
    "Drawn wholly inside the answers area rather than partly in the question area above it, because the line CHANGES as it is worked out and the question area is redrawn only when the whole question changes.";
    let tree = tree_of(qa, info);
    app_code_expression_choose_line(parent, tree, noop, on_wrong, on_success);
  }
  function on_question_example(parent, question, card) {
    "the lesson's front page, which is the walkthrough next door: all this end of it has to do is find the shape the question was printed from, because that is the one thing kept here and nowhere else";
    let tree = property_get(trees, question);
    app_code_lesson_expression_choose_order_walkthrough(parent, card, tree);
  }
  function quizzes_get(question, answer) {
    "one kind, so one quiz";
    let info = {
      question_label: "The line to work out: ",
      on_question: html_text_set_code_dark,
      answer_label: "Choose the operator to work out first: ",
      on_answer,
      answer_property: "answer",
    };
    let infos = [info];
    let quizzes_exercises = app_code_lesson_quizzes_exercises(
      infos,
      batch_get,
      question,
      answer,
    );
    return quizzes_exercises;
  }
  let example_question_label = app_code_label_code_question();
  let lesson = app_code_lesson_base(
    name_id,
    app_code_lesson_expression_choose_order_above,
    1,
    batch_get,
    on_question_example,
    null,
    quizzes_get,
    example_question_label,
    noop,
  );
  return lesson;
}
