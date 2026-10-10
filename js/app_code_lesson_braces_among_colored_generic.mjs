import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_code_code_dark_lines_braces_paired_random } from "./app_code_code_dark_lines_braces_paired_random.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_quiz_braces_choose_colored_forwards } from "./app_code_lesson_quiz_braces_choose_colored_forwards.mjs";
import { app_code_lesson_quiz_braces_choose_colored_backwards } from "./app_code_lesson_quiz_braces_choose_colored_backwards.mjs";
import { app_code_lesson_quiz_braces_order_colored } from "./app_code_lesson_quiz_braces_order_colored.mjs";
import { app_code_braces_painter_shared } from "./app_code_braces_painter_shared.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
export function app_code_lesson_braces_among_colored_generic(
  name_id,
  above,
  batch,
) {
  arguments_assert(arguments, 3);
  ("a lesson where the braces of a program are found among its tokens, with every pair in a colour of its own: worked examples of code and its braces, then three quizzes over the programs of batch");
  ("Its quizzes ask, like any quiz, from the code to what the code gives - here its braces in order - and not for every token chosen one by one, as the human asked 2026-10-11. The code and its pieces are coloured by pair, a piece for every brace, as the human asked 2026-10-11 too; the code is drawn by the quiz itself, so it and the pieces wear the one list of colours.");
  ("Both ways of choosing come before the writing, as the human asked 2026-10-11: from the code to its braces, then from the braces to the code. Each question and all its choices wear the one set of colours, so the colours are part of the answer and there are four choices, as the human asked 2026-10-11 too. Every quiz draws its own question, so the record each is built on asks for nothing above it.");
  let forwards = {
    question_label: "",
    on_question: app_code_lesson_quiz_question_none,
    answer_label: "Which are its braces, in order?",
    answer_on_button: app_code_code_dark_lines_braces_paired_random,
    answer_count_override: null,
  };
  let quizzes_get = app_code_lesson_quizzes_generic({
    lines: false,
    forwards,
    backwards: forwards,
    backwards_code: false,
    backwards_include: false,
    forwards_include: false,
    batch_get: batch,
    forwards_code: false,
    builds_more: [
      {
        question_label: "",
        on_question: app_code_lesson_quiz_question_none,
        answer_label: "Which are its braces, in order?",
        on_answer: app_code_lesson_quiz_braces_choose_colored_forwards,
      },
      {
        question_label: "",
        on_question: app_code_lesson_quiz_question_none,
        answer_label: "Which code has these braces, in order?",
        on_answer: app_code_lesson_quiz_braces_choose_colored_backwards,
      },
      {
        question_label: "",
        on_question: app_code_lesson_quiz_question_none,
        answer_label: "Please write the braces of this code in order:",
        on_answer: app_code_lesson_quiz_braces_order_colored,
      },
    ],
  });
  let painter = app_code_braces_painter_shared();
  function braces_div(container, text) {
    "the braces of a worked example, in the colours its code wears";
    let div = html_div(container);
    painter(div, text);
  }
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch,
    painter,
    "Its braces:",
    quizzes_get,
    "Code:",
    braces_div,
  );
  return lesson;
}
