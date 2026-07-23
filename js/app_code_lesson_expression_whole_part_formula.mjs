import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_arrow } from "./app_code_arrow.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_whole_part_formula() {
  "the FIRST of the three whole-part lessons: LEARN THE EQUATION a / b => Math.floor(a / b) * b (rewrite a division into its whole-part formula). The learner builds the formula from tokens given the division, so they produce the rewrite themselves rather than just recognising it. The next lesson evaluates the formula, and the one after does both. Uses the shared divisor/quotient batch so a quotient-0 division can appear";
  function make(divisor, quotient) {
    "given a / b, the answer to BUILD is the whole-part formula Math.floor(a / b) * b; the dividend is quotient*divisor + a leftover so the division is uneven";
    let leftover = integer_random(1, subtract(divisor, 1));
    let dividend = add(multiply(quotient, divisor), leftover);
    let division = js_code_binary_spaced_nb(dividend, "/", divisor);
    let formula = text_combine_multiple([
      "Math.floor(",
      division,
      ") * ",
      text_to(divisor),
    ]);
    return {
      question: division,
      answer: formula,
    };
  }
  function batch_get() {
    "the shared integer-division-family batch: four different divisors, one a quotient-0 division";
    return app_code_lesson_divisor_quotient_batch(make);
  }
  let example_answer_label = "Whole part formula: ";
  let example_question_label = app_code_label_code_question();
  function quizzes_get(question, answer) {
    "one quiz kind: build the whole-part formula from tokens, given the division as the prompt (answer_property 'answer' is the formula to build)";
    let build = {
      question_label: "Division: ",
      on_question: html_text_set_code_dark,
      answer_label: "Build the whole part formula: ",
      answer_on_button: null,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_token_select,
    };
    let infos = [build];
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
  function example_answer(parent, text) {
    "render the formula as a code chip on its OWN fresh div - passing html_text_set_code_dark straight to app_code_lesson_base would clear the shared example container (wiping the Code label and the division question already rendered there) and leave only the formula";
    let div = html_div(parent);
    html_text_set_code_dark(div, text);
  }
  let name_id = title_name_id();
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch_get,
    html_text_set_code_dark,
    example_answer_label,
    quizzes_get,
    example_question_label,
    example_answer,
  );
  return lesson;
  function title_name_id() {
    "the home title is console.log whole part formula";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Whole part formula");
      }
      return render;
    }
    let rights = ["whole part formula"];
    let built = app_code_lesson_name_id_generic(rights, "operators", title_get);
    return built;
  }
  function above(root) {
    let setup = app_code_container_light_blue(root);
    html_div_cycle_code(setup, ["Suppose we are dividing two numbers:"]);
    html_div_cycle_code(setup, ["", "14 / 4"]);
    html_div_cycle_code(setup, ["Remember, ", "4", " is the divisor"]);
    html_div_cycle_code(setup, [
      "And remember, ",
      "Math.floor(14 / 4)",
      " is the quotient",
    ]);
    let derivation = app_code_container_light_blue(root);
    let define = html_div(derivation);
    html_span_text(define, "The ");
    html_span_text_code_dark(define, "quotient * divisor");
    html_span_text(define, " is called the ");
    let term = html_span_text(define, "whole part");
    html_style_set(term, "font-weight", "bold");
    html_div_cycle_code(derivation, ["", "quotient * divisor"]);
    let step_divisor = html_div(derivation);
    app_code_arrow(step_divisor);
    html_span_text_code_dark(step_divisor, "Math.floor(14 / 4) * divisor");
    let step_four = html_div(derivation);
    app_code_arrow(step_four);
    html_span_text_code_dark(step_four, "Math.floor(14 / 4) * 4");
    let conclusion = app_code_container_light_blue(root);
    let concl = html_div(conclusion);
    html_span_text(concl, "So, ");
    html_span_text_code_dark(concl, "14 / 4");
    app_code_arrow(concl);
    html_span_text_code_dark(concl, "Math.floor(14 / 4) * 4");
  }
}
