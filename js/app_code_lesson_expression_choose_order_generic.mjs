import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_line_to_solve } from "./app_code_label_line_to_solve.mjs";
import { app_code_label_solve_first } from "./app_code_label_solve_first.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_expression_choose_order_questions } from "./app_code_lesson_expression_choose_order_questions.mjs";
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
) {
  arguments_assert(arguments, 4);
  ("the whole of a press-the-operators lesson, with the four things the two of them differ by handed in: what it is called, what stands above the card, what the quiz does with a line, and what the front page draws");
  ("The two lessons are one lesson with the arithmetic moved. Everything that makes them a lesson - the bank of lines, the one quiz kind, the label above the code, the label under it, how the front page finds the shape its question was printed from - is on the unchanged side, and was written out twice. A word altered in one copy would leave the same lesson taught two ways on two screens next door to each other.");
  ("The bank is asked for here and nowhere else, so neither lesson holds the three ways into it. Each lesson is handed the line already found, which is the only thing it ever wanted from the bank.");
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
    ("the one quiz both press-the-operators lessons ask: a line printed as code, and the learner told to choose what to solve first");
    ("One kind, so one quiz. Backwards asks what code produces a value, and the value is not what is being asked for here; unscramble asks the learner to build the line, and the line is given. Both would be questions about something neither lesson is teaching.");
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
