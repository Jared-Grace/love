import { app_code_lesson_expression_choose_order_solve_title_name_id } from "./app_code_lesson_expression_choose_order_solve_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_questions } from "./app_code_lesson_expression_choose_order_questions.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_label_solve_next } from "./app_code_label_solve_next.mjs";
import { app_code_label_solve_choice } from "./app_code_label_solve_choice.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_expression_value_choose_await } from "./app_code_expression_value_choose_await.mjs";
import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
import { app_code_label_line_to_solve } from "./app_code_label_line_to_solve.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_label_solve_first } from "./app_code_label_solve_first.mjs";
import { app_code_lesson_quizzes_exercises } from "./app_code_lesson_quizzes_exercises.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { noop } from "./noop.mjs";
export function app_code_lesson_expression_choose_order_solve() {
  "choosing which part of a line to solve, and then working that part out: 1 + 2 * 3, choose the times, choose 6 out of what it could come to, see 1 + 6, choose the plus, choose 7";
  "The lesson before this one chooses the order and is GIVEN each value; the lessons after it ask for the answer to a whole two-operator line in one go. Between those two stands one step, and this is it: the order is still chosen the same way, and the value that was handed over is now asked for.";
  "That step used to be missing, and the jump was the steepest in the block - a learner went from a screen that did the arithmetic for them straight to a screen that asked for the answer to the whole line with no steps shown at all. Doing the order and doing the arithmetic were separated on purpose one lesson earlier, and they have to be put back together somewhere before a line is asked for whole.";
  "The same two operators and the same digits as the lesson before, because the only new thing here is being asked for the value. A line that changed shape at the same time would be two new things at once, and a learner who got it wrong would not know which of them they had missed.";
  "The wrong values offered are worked out from the line itself rather than typed, so no line can be printed beside choices that do not belong to it.";
  let name_id = app_code_lesson_expression_choose_order_solve_title_name_id();
  ("the same bank of lines as the lesson before, asked for again so this lesson has its own - which is what makes ITS first line one whose multiplication is not the leftmost part");
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
    "the quiz: the same line to press as the front page, and after every press the values it could come to";
    "The line and the values stand in two places set aside before either is drawn, so the buttons are always UNDER the line - built as they are needed they would land wherever the line had left off.";
    "What is being asked changes twice a step and the asking says so: choose what to solve, then what it comes to, then what to solve next.";
    let tree = tree_of(qa, info);
    let line_holder = html_div(parent);
    let choices_holder = html_div(parent);
    let current = tree;
    function on_change(step) {
      current = property_get(step, "current");
      let solved = property_get(step, "solved");
      if (null_is(solved)) {
        return;
      }
      let said = app_code_label_solve_next();
      answer_label_set(said);
    }
    async function on_chosen(node, value, node_span) {
      "a right press is answered by asking what that part comes to, and the line does not move until the right value is pressed";
      let said = app_code_label_solve_choice();
      answer_label_set(said);
      let decoys = app_code_expression_value_decoys(current, node);
      await app_code_expression_value_choose_await(
        choices_holder,
        value,
        decoys,
        on_wrong,
      );
    }
    app_code_expression_choose_line(
      line_holder,
      tree,
      on_change,
      on_wrong,
      on_chosen,
      on_success,
    );
  }
  function on_question_example(parent, question, card) {
    "the lesson's front page, which is the rehearsal next door: all this end of it has to do is find the shape the question was printed from";
    let tree = tree_for(question);
    app_code_lesson_expression_choose_order_solve_example(parent, tree);
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
