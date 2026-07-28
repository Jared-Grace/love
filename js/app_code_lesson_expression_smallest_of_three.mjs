import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_map } from "./range_map.mjs";
import { list_get } from "./list_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { math_min } from "./math_min.mjs";
import { text_to } from "./text_to.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_smallest_of_three() {
  "practice Math.min with THREE numbers, after the two-number lesson: Math.min takes as many numbers as you give it and returns the smallest (Math.min(3, 8, 5) is 3); the answer is the smallest of the three, the other two stand as decoys; three different numbers 2..12";
  function code(a, b, c) {
    "Math.min(a, b, c) as a code string, the three numbers separated by commas";
    let ta = text_to(a);
    let tb = text_to(b);
    let tc = text_to(c);
    let combined = text_combine_multiple([
      "Math.min(",
      ta,
      ", ",
      tb,
      ", ",
      tc,
      ")",
    ]);
    return combined;
  }
  function three_numbers() {
    "three DIFFERENT numbers 2..12, so there is always one real smallest";
    let three = list_shuffle_take([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3);
    return three;
  }
  function make(index) {
    "one Math.min question over three different numbers";
    let three = three_numbers();
    let a = list_get(three, 0);
    let b = list_get(three, 1);
    let c = list_get(three, 2);
    let r = code(a, b, c);
    return r;
  }
  function refill() {
    "four questions, each a different trio of numbers";
    let list = range_map(4, make);
    return list;
  }
  function decoys(question, answer) {
    "the two numbers that are NOT the smallest - picking one of the larger numbers is the tempting mistake";
    let nums = text_integers(question);
    function not_answer(n) {
      let tn = text_to(n);
      let same = equal(tn, answer);
      let diff = not(same);
      return diff;
    }
    let others = list_filter(nums, not_answer);
    return others;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
    forwards_question_label: "Smallest of three: ",
    forwards_answer_label: "smallest value: ",
    backwards_question_label: "smallest value: ",
    backwards_answer_label: "What code gives the smallest value? ",
    unscramble_label: "Build the code that gives the smallest value: ",
  });
  return lesson;
  function title_name_id() {
    "the home title: smallest of three Math.min";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Smallest of three ");
        html_span_text_code_dark(parent, "Math.min");
      }
      return render;
    }
    let rights = ["smallest of three"];
    let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
    return built;
  }
  function above(root) {
    "the new idea: Math.min is not limited to two numbers - give it three and it still returns the smallest. A worked example with three, randomized each visit";
    let three = three_numbers();
    let a = list_get(three, 0);
    let b = list_get(three, 1);
    let c = list_get(three, 2);
    let ab = math_min(a, b);
    let smallest = math_min(ab, c);
    let smallest_text = text_to(smallest);
    let v = code(a, b, c);
    let define = app_code_container_light_blue(root);
    html_div_cycle_code(define, [
      "",
      "Math.min",
      " can take more than two numbers",
    ]);
    let example_box = app_code_container_light_blue(root);
    html_div_cycle_code(example_box, ["", v, " is ", smallest_text]);
    html_div_cycle_code(example_box, [
      "",
      smallest_text,
      " is the smallest of the three",
    ]);
    html_div_cycle_code(example_box, [
      "",
      "Math.min",
      " chooses the smallest number, however many there are",
    ]);
  }
}
