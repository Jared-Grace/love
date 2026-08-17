import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_line_to_solve } from "./app_code_label_line_to_solve.mjs";
import { app_code_label_solve_first } from "./app_code_label_solve_first.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quizzes_exercises } from "./app_code_lesson_quizzes_exercises.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { noop } from "./noop.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_choose_order_generic(
  name_id,
  above,
  answer_draw,
  example_draw,
  bank,
) {
  arguments_assert(arguments, 5);
  ("the whole of a press-the-operators lesson, with the five things such lessons differ by handed in: what it is called, what stands above the card, what the quiz does with a line, what the front page draws, and which lines it draws on");
  ("The lessons on this engine are one lesson with a piece moved. Everything that makes them a lesson - the one quiz kind, the label above the code, the label under it, how the front page finds the shape its question was printed from - is on the unchanged side, and was written out once for all of them. A word altered in one copy would leave the same lesson taught two ways on two screens next door to each other.");
  ("The bank is handed in rather than asked for here, because the shape of the lines is the one thing that has to change to walk a learner up from 1 + 2 * 3 to two comparisons compared. It is asked for by each lesson, so each gets its OWN bank - which is what makes the first line a learner meets in each of them the one that lesson wants to open on.");
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
    "the quiz hands over a question and a place to draw it, and the shape it was printed from is looked up here - that is the one thing the bank keeps that a lesson has no other way to reach";
    let tree = tree_of(qa, info);
    answer_draw(parent, tree, on_success, on_wrong, answer_label_set);
  }
  function on_question_example(parent, question, card) {
    "the lesson's front page is the quiz next door with nothing counted against you, so all this end of it has to do is find the shape the question was printed from";
    let tree = tree_for(question);
    example_draw(parent, card, tree);
  }
  function quizzes_get(question, answer) {
    "the one quiz every press-the-operators lesson asks: a line printed as code, and the learner told to choose what to solve first";
    "One kind, so one quiz. Backwards asks what code produces a value, and the value is not what is being asked for here; unscramble asks the learner to build the line, and the line is given. Both would be questions about something these lessons are not teaching.";
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
    above,
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
