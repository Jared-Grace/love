import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_map } from "./range_map.mjs";
import { list_get } from "./list_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { text_to } from "./text_to.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_min_max_of_three() {
  "Math.min and Math.max are not limited to two numbers - give either one three numbers and it still returns the smallest / largest (Math.min(3, 8, 5) is 3, Math.max(3, 8, 5) is 8). One combined lesson - a min example and a max example - because going from two numbers to three is a small step once Math.min and Math.max are known. Half the questions are Math.min and half Math.max; three different numbers 2..12, the other two stand as decoys.";
  function code(f_name, a, b, c) {
    "the three-number call as a code string - the function name, then its three numbers separated by commas inside parentheses";
    let ta = text_to(a);
    let tb = text_to(b);
    let tc = text_to(c);
    let combined = text_combine_multiple([
      f_name,
      "(",
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
    "three DIFFERENT numbers 2..12, so the smallest and the largest are always real and distinct";
    let three = list_shuffle_take([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3);
    return three;
  }
  function make(index) {
    "one question over three different numbers, alternating Math.min and Math.max down the batch so both are drilled";
    let three = three_numbers();
    let a = list_get(three, 0);
    let b = list_get(three, 1);
    let c = list_get(three, 2);
    let use_max = integer_even_is(index);
    let f_name = "Math.min";
    if (use_max) {
      f_name = "Math.max";
    }
    let r = code(f_name, a, b, c);
    return r;
  }
  function refill() {
    "four questions, a mix of Math.min and Math.max, each a different trio of numbers";
    let list = range_map(4, make);
    return list;
  }
  function decoys(question, answer) {
    "the two numbers that are NOT the answer - for a Math.min question they are the larger two, for a Math.max question the smaller two; either way, the other two numbers in the call";
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
    forwards_question_label: "Value of: ",
    forwards_answer_label: "value: ",
    backwards_question_label: "value: ",
    backwards_answer_label: "What code gives this value? ",
    unscramble_label: "Build the code that gives this value: ",
  });
  return lesson;
  function title_name_id() {
    "the home title: more than two numbers";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text_code_dark(parent, "Math.max");
        html_span_text(parent, ", ");
        html_span_text_code_dark(parent, "Math.min");
        html_span_text(parent, ", 3 numbers");
      }
      return render;
    }
    let rights = ["more than two numbers"];
    let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
    return built;
  }
  function above(root) {
    "the duo: Math.min and Math.max each shown with the same three numbers, so both are established as taking more than two; randomized each visit";
    let three = three_numbers();
    let a = list_get(three, 0);
    let b = list_get(three, 1);
    let c = list_get(three, 2);
    let ab_min = math_min(a, b);
    let smallest = math_min(ab_min, c);
    let ab_max = math_max(a, b);
    let largest = math_max(ab_max, c);
    let smallest_text = text_to(smallest);
    let largest_text = text_to(largest);
    let v_min = code("Math.min", a, b, c);
    let v_max = code("Math.max", a, b, c);
    let define = app_code_container_light_blue(root);
    html_div_cycle_code(define, [
      "",
      "Math.min",
      " and ",
      "Math.max",
      " can receive more than two numbers",
    ]);
    let min_box = app_code_container_light_blue(root);
    html_div_cycle_code(min_box, ["", v_min, " is ", smallest_text]);
    html_div_cycle_code(min_box, [
      "",
      smallest_text,
      " is the smallest of the three",
    ]);
    let max_box = app_code_container_light_blue(root);
    html_div_cycle_code(max_box, ["", v_max, " is ", largest_text]);
    html_div_cycle_code(max_box, [
      "",
      largest_text,
      " is the largest of the three",
    ]);
  }
}
