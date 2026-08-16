import { null_is } from "./null_is.mjs";
import { app_code_label_solve_next } from "./app_code_label_solve_next.mjs";
import { app_code_label_solve_first } from "./app_code_label_solve_first.mjs";
import { app_code_label_line_to_solve } from "./app_code_label_line_to_solve.mjs";
import { app_code_expression_chosen_pause } from "./app_code_expression_chosen_pause.mjs";
import { app_code_lesson_quizzes_exercises } from "./app_code_lesson_quizzes_exercises.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_walkthrough } from "./app_code_lesson_expression_choose_order_walkthrough.mjs";
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
  ("the lines this lesson asks about, and the shapes they were printed from, kept by the bank both press-the-operators lessons draw on");
  let bank = app_code_lesson_expression_choose_order_questions();
  let batch_get = property_get(bank, "batch_get");
  let tree_for = property_get(bank, "tree_for");
  let tree_of = property_get(bank, "tree_of");
  function on_answer(
    parent,
    info,
    qa,
    on_success,
    on_wrong,
    batch_get_unused,
    answer_label_set,
  ) {
    "the quiz: the same line to press as the front page, with nothing said about which operator to press - that is the whole of what is being asked";
    "Drawn wholly inside the answers area rather than partly in the question area above it, because the line CHANGES as it is worked out and the question area is redrawn only when the whole question changes.";
    "The only thing said as the line is worked out is the asking itself, which moves from first to next once a part has been solved. The front page next door says what to press; here nothing does, and what changes is only the word that would otherwise be wrong.";
    let tree = tree_of(qa, info);
    function on_change(step) {
      let solved = property_get(step, "solved");
      if (null_is(solved)) {
        return;
      }
      let said = app_code_label_solve_next();
      answer_label_set(said);
    }
    app_code_expression_choose_line(
      parent,
      tree,
      on_change,
      on_wrong,
      app_code_expression_chosen_pause,
      on_success,
    );
  }
  function on_question_example(parent, question, card) {
    "the lesson's front page, which is the walkthrough next door: all this end of it has to do is find the shape the question was printed from, because that is the one thing kept here and nowhere else";
    let tree = property_get(trees, question);
    app_code_lesson_expression_choose_order_walkthrough(parent, card, tree);
  }
  function quizzes_get(question, answer) {
    "one kind, so one quiz";
    let info = {
      question_label: app_code_label_line_to_solve(),
      on_question: html_text_set_code_dark,
      answer_label: app_code_label_solve_first(),
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
  ("nothing stands above the example, because what this lesson is for is said INSIDE it, about the line the learner is about to press rather than about a line built to be read");
  let lesson = app_code_lesson_base(
    name_id,
    noop,
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
