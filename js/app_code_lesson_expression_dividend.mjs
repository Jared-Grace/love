import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_choose_operand } from "./app_code_lesson_quiz_choose_operand.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_dividend() {
  "identify the dividend: show a division and let the learner pick which of its two numbers is the DIVIDEND (the number being divided up). Both operands are the answer buttons, so the divisor is the decoy and the quiz tests knowing the role, not spotting the only number on screen. The question is built with REAL spaces (not js_code_binary_spaced_nb) so the operand-choice quiz can split its tokens";
  function make(divisor) {
    "a division a / b whose dividend a is the answer; a = quotient*divisor + a leftover so it is a realistic uneven division, and the two answer buttons are a (the dividend) and b (the divisor decoy)";
    let quotient = integer_random(2, 3);
    let leftover = integer_random(1, subtract(divisor, 1));
    let dividend = add(multiply(quotient, divisor), leftover);
    let question = text_combine_multiple([
      text_to(dividend),
      " / ",
      text_to(divisor),
    ]);
    let answer = text_to(dividend);
    let qa = {
      question,
      answer,
    };
    return qa;
  }
  function batch_get() {
    "four divisions, each with a DIFFERENT divisor so the questions never look alike";
    let divisors = list_shuffle_take([3, 4, 5, 6], 4);
    let list = list_map(divisors, make);
    return list;
  }
  let example_question_label = app_code_label_code_question();
  function quizzes_get(question, answer) {
    "one quiz kind: show the division, choose the dividend from its two numbers via app_code_lesson_quiz_choose_operand";
    let forwards = {
      question_label: "Division: ",
      on_question: html_text_set_code_dark,
      answer_label: "Choose the dividend: ",
      answer_on_button: null,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_choose_operand,
    };
    let infos = [forwards];
    function each_info(info) {
      function quiz(context, parent, container, refresh, next_get) {
        app_code_lesson_quiz(
          container,
          {
            question,
            answer,
          },
          parent,
          context,
          refresh,
          info,
          batch_get,
          quizzes,
          next_get,
        );
      }
      return quiz;
    }
    let quizzes = list_map(infos, each_info);
    function each_exercise(info) {
      let exercise = {
        info,
        question,
        answer,
        batch_get,
      };
      return exercise;
    }
    let exercises = list_map(infos, each_exercise);
    let quizzes_exercises = {
      quizzes,
      exercises,
    };
    return quizzes_exercises;
  }
  let name_id = title_name_id();
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch_get,
    html_text_set_code_dark,
    "The dividend is: ",
    quizzes_get,
    example_question_label,
    app_code_style_normal_text,
  );
  return lesson;
  function title_name_id() {
    "the home title is console.log dividend";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Dividend");
      }
      return render;
    }
    let rights = ["dividend"];
    let built = app_code_lesson_name_id_generic(rights, "operators", title_get);
    return built;
  }
  function above(root) {
    let intro = app_code_container_light_blue(root);
    html_div_cycle_code(intro, [
      "When you divide, the number you divide up is the dividend",
    ]);
    html_div_cycle_code(intro, ["In ", "14 / 4", " the dividend is ", "14"]);
    let ask = app_code_container_light_blue(root);
    html_div_cycle_code(ask, ["Choose the dividend from the division"]);
  }
}
