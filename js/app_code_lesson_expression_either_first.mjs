import { app_code_label_line_to_solve } from "./app_code_label_line_to_solve.mjs";
import { app_code_lesson_expression_either_first_above } from "./app_code_lesson_expression_either_first_above.mjs";
import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
import { app_code_expression_chosen_pause } from "./app_code_expression_chosen_pause.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_expression_either_first_expression } from "./app_code_lesson_expression_either_first_expression.mjs";
import { app_code_lesson_expression_either_first_title_name_id } from "./app_code_lesson_expression_either_first_title_name_id.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { app_code_lesson_quizzes_exercises } from "./app_code_lesson_quizzes_exercises.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { noop } from "./noop.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_lesson_expression_either_first() {
  "two operators ready at the same time, and either of them may be worked out first: 2 * 3 + 4 * 5 has a times on each side of the plus, and the line lands on the same value whichever times is taken";
  "The one new fact. Every line up to here has had exactly one operator that could go next, so a learner has never had to make a choice that was theirs - the rule picked for them and they only had to read it. Here the rule leaves two, and the thing to learn is that leaving two is not the rule failing to say: both answers are right.";
  "It stands immediately before arithmetic on both sides of a comparison, which is the first line in the course with three operators in it and two of them ready at once. That lesson has been asking a learner to make this choice with nothing said about it, on a line that is also teaching them something else. Here the choice is met on its own, on the smallest line that can carry one.";
  "Times and plus, no comparison, because the choice is about the shape of the line and not about what the operators mean. Adding a comparison on top of it is the next lesson, and it is one step from this one.";
  "The example and the quiz are the same pressing, and neither of them says which operator to take. What the lesson adds is a third line above the card, worked out both ways round to one value - so the claim is made where it can be read and tested, and the two lines under it are left to be pressed.";
  let name_id = app_code_lesson_expression_either_first_title_name_id();
  let trees = {};
  function item_new() {
    "a question is the line as written and its answer is what the line comes to; the shape it was built from is kept beside them under the same writing, because both the working and the quiz need the shape and a shape cannot be recovered from its own text";
    let tree = app_code_lesson_expression_either_first_expression();
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
    "the quiz: the same line to press as the example, with nothing said about which operator to press - either of the two that are ready is accepted, and the plus is refused because it still holds a times on each side";
    let tree = tree_of(qa, info);
    app_code_expression_choose_line(
      parent,
      tree,
      noop,
      on_wrong,
      app_code_expression_chosen_pause,
      on_success,
    );
  }
  function on_question_example(parent, question, card) {
    "the front page presses the same line the quiz does, with nothing said about which of the two ready operators to press - either is taken and the line goes on down";
    "It used to be the line written out flat with both orders worked underneath it. That is the one thing this lesson exists to teach handed over as something to read, on the very screen where it could be found by pressing instead. The working out still stands, above the card, on a line of its own.";
    let tree = property_get(trees, question);
    app_code_expression_choose_line(
      parent,
      tree,
      noop,
      noop,
      app_code_expression_chosen_pause,
      noop,
    );
  }
  function quizzes_get(question, answer) {
    "one kind, so one quiz";
    let info = {
      question_label: app_code_label_line_to_solve(),
      on_question: html_text_set_code_dark,
      answer_label: "Choose an operator to work out first: ",
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
  ("the working out stands ABOVE the examples, on a line of its own, and every line on the card is pressed - so what a learner reads and what a learner does are not the same line, and the card asks for a press without having just answered it");
  let lesson = app_code_lesson_base(
    name_id,
    app_code_lesson_expression_either_first_above,
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
