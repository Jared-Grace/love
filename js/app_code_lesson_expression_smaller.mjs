import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { math_min } from "./math_min.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_map } from "./range_map.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { math_max } from "./math_max.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_lesson_expression_smaller() {
  "practice Math.min, the first function that takes TWO numbers instead of one: Math.min(a, b) gives the smaller of the two, written with the numbers separated by a comma (Math.min(3, 8) is 3); the answer is the smaller number; two different numbers 2..12";
  function min_code(a, b) {
    "Math.min(a, b) as a code string, the two numbers separated by a comma";
    let ta = text_to(a);
    let tb = text_to(b);
    let combined = text_combine_multiple(["Math.min(", ta, ", ", tb, ")"]);
    return combined;
  }
  function make(index) {
    "one Math.min question with two DIFFERENT numbers, so there is always a real smaller one";
    let two = list_shuffle_take([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2);
    let a = list_get(two, 0);
    let b = list_get(two, 1);
    let r = min_code(a, b);
    return r;
  }
  function refill() {
    "four Math.min questions, each with a different pair of numbers";
    let list = range_map(4, make);
    return list;
  }
  function decoys(question, answer) {
    "the classic Math.min mistake is picking the bigger number instead of the smaller, so the tailored wrong answer is the LARGER of the two numbers in the question";
    let nums = text_integers(question);
    let a = list_get(nums, 0);
    let b = list_get(nums, 1);
    let larger = math_max(a, b);
    let r2 = [larger];
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
    forwards_question_label: "Smaller of two: ",
    forwards_answer_label: "smaller value: ",
    backwards_question_label: "smaller value: ",
    backwards_answer_label: "What code gives the smaller value? ",
    unscramble_label: "Build the code that gives the smaller value: ",
  });
  return lesson;
  function title_name_id() {
    "the home title is console.log smaller of two";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Smaller of two ");
        html_span_text_code_dark(parent, "Math.min");
      }
      return render;
    }
    let rights = ["smaller of two"];
    let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
    return built;
  }
  function above(root) {
    "examples FIRST and in BOTH orders - the smaller number on the left and on the right - so it is clear the smaller VALUE is chosen, not a position (left or right); then the rule, with Math.min in code style";
    let two = list_shuffle_take([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2);
    let a = list_get(two, 0);
    let b = list_get(two, 1);
    let small = math_min(a, b);
    let big = math_max(a, b);
    let small_text = text_to(small);
    let big_text = text_to(big);
    let define = app_code_container_light_blue(root);
    let define_line = html_div(define);
    html_span_text(define_line, "Some functions take ");
    let term = html_span_text(define_line, "two");
    html_bold(term);
    html_span_text(define_line, " numbers, separated by a comma ");
    html_span_text_code_dark(define_line, ",");
    let example_box = app_code_container_light_blue(root);
    html_div_cycle_code(example_box, [
      "",
      small_text,
      " is smaller than ",
      big_text,
    ]);
    let v = min_code(small, big);
    html_div_cycle_code(example_box, ["So ", v, " is ", small_text]);
    let v2 = min_code(big, small);
    html_div_cycle_code(example_box, ["And ", v2, " is also ", small_text]);
    html_div_cycle_code(example_box, [
      "",
      "Math.min",
      " chooses the smaller number",
    ]);
    let equal_box = app_code_container_light_blue(root);
    html_div_cycle_code(equal_box, [
      "If both numbers are equal, then there's only one number to choose from, so ",
      "Math.min",
      " chooses that number",
    ]);
  }
}
