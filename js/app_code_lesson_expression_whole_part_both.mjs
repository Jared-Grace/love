import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { floor } from "./floor.mjs";
import { text_to } from "./text_to.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { noop } from "./noop.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_arrow } from "./app_code_arrow.mjs";
import { app_code_row_flex_center } from "./app_code_row_flex_center.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_whole_part_both() {
  "the THIRD whole-part lesson: DO BOTH steps at once. Given a division a / b, the learner gives its whole part value directly (rewrite with the formula Math.floor(a / b) * b, then evaluate). The answer is the whole part quotient*divisor - NOT what a / b evaluates to - so this is an explicit-answer multiple choice, not an eval lesson. Tailored decoys are the tempting partial answers: the quotient (rounded down but not multiplied back), the remainder, and the raw decimal division";
  function make(divisor, quotient) {
    "given a / b whose dividend is quotient*divisor + a leftover, the answer is the whole part quotient*divisor";
    let leftover = integer_random(1, subtract(divisor, 1));
    let dividend = add(multiply(quotient, divisor), leftover);
    let division = js_code_binary_spaced_nb(dividend, "/", divisor);
    let whole_part = multiply(quotient, divisor);
    return {
      question: division,
      answer: text_to(whole_part),
    };
  }
  function batch_get() {
    "the shared integer-division-family batch: four different divisors, one a quotient-0 division (whose whole part is 0)";
    return app_code_lesson_divisor_quotient_batch(make);
  }
  function decoys(question, answer) {
    "tempting partial answers: the QUOTIENT (Math.floor(a / b) - rounded down but forgot to multiply by the divisor), the REMAINDER (a - whole part), and the raw decimal a / b when it is short and clean (skipped when it repeats, like 2 / 3)";
    let nums = text_integers(question);
    let dividend = list_get(nums, 0);
    let divisor = list_get(nums, 1);
    let list = [];
    list_add(list, floor(divide(dividend, divisor)));
    list_add(list, subtract(dividend, answer));
    let raw = divide(dividend, divisor);
    let raw_text = text_to(raw);
    let clean = text_regex_match(raw_text, /^[0-9]+(\.[0-9]{1,3})?$/);
    if (null_not_is(clean)) {
      list_add(list, raw_text);
    }
    return list;
  }
  let example_answer_label = "Whole part: ";
  let example_question_label = app_code_label_code_question();
  function quizzes_get(question, answer) {
    "two quiz kinds: forwards (given the division, choose its whole part value) then backwards (given a whole part value, choose which division has it - the other batch divisions are the distractors, so no tailored decoys are needed)";
    let forwards = {
      question_label: "Division: ",
      on_question: html_text_set_code_dark,
      answer_label: "What is the whole part? ",
      answer_on_button: noop,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_multiple_choice,
      decoys,
    };
    let backwards = {
      question_label: "Whole part: ",
      on_question: app_code_style_normal_text,
      answer_label: "Which division has this whole part? ",
      answer_on_button: html_text_set_code_dark,
      answer_count_override: null,
      answer_property: "question",
      on_answer: app_code_lesson_quiz_multiple_choice,
    };
    let infos = [forwards, backwards];
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
    example_answer_label,
    quizzes_get,
    example_question_label,
    app_code_style_normal_text,
  );
  return lesson;
  function title_name_id() {
    "the home title is console.log whole part in one step";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Whole part in one step");
      }
      return render;
    }
    let rights = ["whole part in one step"];
    let built = app_code_lesson_name_id_generic(rights, "operators", title_get);
    return built;
  }
  function above(root) {
    let intro = app_code_container_light_blue(root);
    html_div_cycle_code(intro, [
      "Now find the whole part of a division in one go:",
    ]);
    let steps = app_code_container_light_blue(root);
    html_div_cycle_code(steps, ["Rewrite the division with the formula:"]);
    let rewrite = app_code_row_flex_center(steps);
    html_span_text_code_dark(rewrite, "14 / 4");
    app_code_arrow(rewrite);
    html_span_text_code_dark(rewrite, "Math.floor(14 / 4) * 4");
    html_div_cycle_code(steps, ["Then evaluate:"]);
    html_div_cycle_code(steps, [
      "",
      "Math.floor(14 / 4) * 4",
      " is ",
      "3 * 4",
      " is ",
      "12",
    ]);
    html_div_cycle_code(steps, ["So the whole part of ", "14 / 4", " is ", "12"]);
  }
}
