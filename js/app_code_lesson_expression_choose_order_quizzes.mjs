import { app_code_label_line_to_solve } from "./app_code_label_line_to_solve.mjs";
import { app_code_label_solve_first } from "./app_code_label_solve_first.mjs";
import { app_code_lesson_quizzes_exercises } from "./app_code_lesson_quizzes_exercises.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
export function app_code_lesson_expression_choose_order_quizzes(
  on_answer,
  batch_get,
  question,
  answer,
) {
  arguments_assert(arguments, 4);
  ("the one quiz both press-the-operators lessons ask: a line printed as code, and the learner told to choose what to solve first - with what happens after that press handed in, because that is the only thing the two lessons differ by");
  ("One kind, so one quiz. Backwards asks what code produces a value, and the value is not what is being asked for here; unscramble asks the learner to build the line, and the line is given. Both would be questions about something neither lesson is teaching.");
  ("Written once because the two lessons are one lesson with one thing changed, and everything the quiz is made of - the line printed dark, the words above it, the words below it, the property the answer is read from - is on the unchanged side. Kept as two copies, a word altered in one of them would leave the same question asked two ways on two screens next door to each other.");
  ("What changes is handed in as the one argument: the lesson before works each part out for the learner as they press, and the lesson after asks them for it. That is the difference between the two, and it is the whole of the difference.");
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
