import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { subtract } from "./subtract.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_lesson_expression_absolute_value() {
  "practice Math.abs, another value-in value-out function like the rounding ones: Math.abs gives how far a number is from zero, which is always positive - a negative number loses its minus sign (Math.abs(-5) is 5) and a positive number stays the same (Math.abs(5) is 5); the answer is that distance; magnitude 2..9";
  function abs_code(inner) {
    "Math.abs(inner) as a code string";
    let combined = text_combine_multiple(["Math.abs(", inner, ")"]);
    return combined;
  }
  function make(magnitude, index) {
    "alternate down the batch, the NEGATIVE first because turning a negative positive is the main use of Math.abs: even positions are a negative number (Math.abs(-6) is 6), odd positions are an already-positive number (Math.abs(6) is 6, no change) - so the batch leads with the main case and still drills the no-change edge case";
    let negative_question = integer_even_is(index);
    let t = text_to(magnitude);
    let inner = t;
    if (negative_question) {
      inner = text_combine_multiple(["-", t]);
    }
    let r = abs_code(inner);
    return r;
  }
  function refill() {
    "four questions, each with a DIFFERENT magnitude so two never look alike, alternating a negative number with an already-positive one";
    let magnitudes = list_shuffle_take([2, 3, 4, 5, 6, 7, 8, 9], 4);
    let list = list_map_index(magnitudes, make);
    return list;
  }
  function decoys(question, answer) {
    "the classic Math.abs mistake is keeping the minus sign instead of dropping it, so the tailored wrong answer is the NEGATIVE of the answer - what you get if you forget to take the distance";
    let negative = subtract(0, answer);
    let r2 = [negative];
    return r2;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
    forwards_question_label: "Absolute value: ",
    forwards_answer_label: "distance from zero: ",
    backwards_question_label: "distance from zero: ",
    backwards_answer_label: "What code gives this distance from zero? ",
    unscramble_label: "Build the code that gives this distance from zero: ",
  });
  return lesson;
  function title_name_id() {
    "the home title is console.log absolute value";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Absolute value");
      }
      return render;
    }
    let rights = ["absolute value"];
    let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
    return built;
  }
  function above(root) {
    "the worked examples are randomized each visit: the definition, a negative number turning positive, and an already-positive number that does not change";
    let magnitude = integer_random(2, 9);
    let magnitude_text = text_to(magnitude);
    let negative = text_combine_multiple(["-", magnitude_text]);
    let define = app_code_container_light_blue(root);
    let define_line = html_div(define);
    html_span_text(define_line, "The ");
    let term = html_span_text(define_line, "absolute value");
    html_bold(term);
    html_span_text(define_line, " of a number is how far it is from zero");
    html_div_cycle_code(define, [
      "The distance is always positive, so the minus sign is dropped",
    ]);
    let negative_box = app_code_container_light_blue(root);
    html_div_cycle_code(negative_box, ["A negative number becomes positive:"]);
    let v = abs_code(negative);
    html_div_cycle_code(negative_box, ["", v, " is ", magnitude_text]);
    let positive_box = app_code_container_light_blue(root);
    html_div_cycle_code(positive_box, [
      "A number that is already positive does not change:",
    ]);
    let v2 = abs_code(magnitude_text);
    html_div_cycle_code(positive_box, ["", v2, " is ", magnitude_text]);
  }
}
