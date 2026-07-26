import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_map } from "./range_map.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_larger() {
  "practice Math.max, the partner of Math.min and the other two-number function: Math.max(a, b) gives the larger of the two, written with the numbers separated by a comma (Math.max(3, 8) is 8); the answer is the larger number; two different numbers 2..12";
  function max_code(a, b) {
    "Math.max(a, b) as a code string, the two numbers separated by a comma";
    let ta = text_to(a);
    let tb = text_to(b);
    let combined = text_combine_multiple(["Math.max(", ta, ", ", tb, ")"]);
    return combined;
  }
  function make(index) {
    "one Math.max question with two DIFFERENT numbers, so there is always a real larger one";
    let two = list_shuffle_take([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2);
    let a = list_get(two, 0);
    let b = list_get(two, 1);
    let r = max_code(a, b);
    return r;
  }
  function refill() {
    "four Math.max questions, each with a different pair of numbers";
    let list = range_map(4, make);
    return list;
  }
  function decoys(question, answer) {
    "the classic Math.max mistake is picking the smaller number instead of the larger, so the tailored wrong answer is the SMALLER of the two numbers in the question";
    let nums = text_integers(question);
    let a = list_get(nums, 0);
    let b = list_get(nums, 1);
    let smaller = math_min(a, b);
    let r2 = [smaller];
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
    forwards_question_label: "Larger of two: ",
    forwards_answer_label: "larger value: ",
    backwards_question_label: "larger value: ",
    backwards_answer_label: "What code gives the larger value? ",
    unscramble_label: "Build the code that gives the larger value: ",
  });
  return lesson;
  function title_name_id() {
    "the home title is console.log larger of two";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Larger of two ");
        html_span_text_code_dark(parent, "Math.max");
      }
      return render;
    }
    let rights = ["larger of two"];
    let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
    return built;
  }
  function above(root) {
    "examples FIRST and in BOTH orders - the larger number on the left and on the right - so it is clear the larger VALUE is chosen, not a position; Math.min (the reference) and Math.max both in code style";
    let two = list_shuffle_take([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2);
    let a = list_get(two, 0);
    let b = list_get(two, 1);
    let small = math_min(a, b);
    let big = math_max(a, b);
    let small_text = text_to(small);
    let big_text = text_to(big);
    let define = app_code_container_light_blue(root);
    html_div_cycle_code(define, [
      "Like ",
      "Math.min",
      ", this function takes two numbers separated by a comma ",
      ",",
    ]);
    let example_box = app_code_container_light_blue(root);
    html_div_cycle_code(example_box, [
      "",
      big_text,
      " is bigger than ",
      small_text,
    ]);
    let v = max_code(big, small);
    html_div_cycle_code(example_box, ["So ", v, " is ", big_text]);
    let v2 = max_code(small, big);
    html_div_cycle_code(example_box, ["And ", v2, " is also ", big_text]);
    html_div_cycle_code(example_box, [
      "",
      "Math.max",
      " chooses the larger number",
    ]);
    let equal_box = app_code_container_light_blue(root);
    html_div_cycle_code(equal_box, [
      "If both numbers are equal, then there's only ",
      "1",
      " number to choose from, so ",
      "Math.max",
      " chooses that number",
    ]);
  }
}
