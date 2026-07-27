import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_map } from "./range_map.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_min_max_generic(params) {
  "the shared body of the two two-number function lessons - Math.min (smaller of two) and Math.max (larger of two). They differ only in the function, which of the pair it picks, and the words (smaller/larger, smaller than/bigger than), all passed in params; everything else lives here once: the four questions over pairs 2..12, the forwards/backwards/unscramble labels, the worked example shown in BOTH orders (so the VALUE is clearly what is chosen, not a position), the equal-numbers case, and the home title. Only the intro's opening line differs in shape between the two, so each lesson passes it as define_render.";
  let fn_name = property_get(params, "fn_name");
  let choose = property_get(params, "choose");
  let decoy_choose = property_get(params, "decoy_choose");
  let noun = property_get(params, "noun");
  let noun_upper = property_get(params, "noun_upper");
  let comparison = property_get(params, "comparison");
  let define_render = property_get(params, "define_render");
  function code(a, b) {
    "the two-number call as a code string - the function's name, then its two numbers separated by a comma inside parentheses";
    let ta = text_to(a);
    let tb = text_to(b);
    let combined = text_combine_multiple([fn_name, "(", ta, ", ", tb, ")"]);
    return combined;
  }
  function two_numbers() {
    "two DIFFERENT numbers 2..12, so there is always a real answer";
    let two = list_shuffle_take([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2);
    return two;
  }
  function make(index) {
    "one question with a different pair of numbers";
    let two = two_numbers();
    let a = list_get(two, 0);
    let b = list_get(two, 1);
    let r = code(a, b);
    return r;
  }
  function refill() {
    "four questions, each with a different pair of numbers";
    let list = range_map(4, make);
    return list;
  }
  function decoys(question, answer) {
    "the classic mistake is picking the OTHER extreme, so the tailored wrong answer is decoy_choose of the two numbers in the question";
    let nums = text_integers(question);
    let a = list_get(nums, 0);
    let b = list_get(nums, 1);
    let wrong = decoy_choose(a, b);
    let r2 = [wrong];
    return r2;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let forwards_question_label = text_combine(noun_upper, " of two: ");
  let forwards_answer_label = text_combine(noun, " value: ");
  let backwards_question_label = text_combine(noun, " value: ");
  let backwards_answer_label = text_combine_multiple([
    "What code gives the ",
    noun,
    " value? ",
  ]);
  let unscramble_label = text_combine_multiple([
    "Build the code that gives the ",
    noun,
    " value: ",
  ]);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
    forwards_question_label,
    forwards_answer_label,
    backwards_question_label,
    backwards_answer_label,
    unscramble_label,
  });
  return lesson;
  function title_name_id() {
    "the home title: {noun_upper} of two {fn}";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        let heading = text_combine(noun_upper, " of two ");
        html_span_text(parent, heading);
        html_span_text_code_dark(parent, fn_name);
      }
      return render;
    }
    let right = text_combine(noun, " of two");
    let rights = [right];
    let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
    return built;
  }
  function above(root) {
    "the lesson-specific opening line (define_render), then the worked example in BOTH orders - the chosen number on the left and on the right - then the equal-numbers case";
    define_render(root);
    let two = two_numbers();
    let a = list_get(two, 0);
    let b = list_get(two, 1);
    let chosen = choose(a, b);
    let other = decoy_choose(a, b);
    let chosen_text = text_to(chosen);
    let other_text = text_to(other);
    let example_box = app_code_container_light_blue(root);
    let compare_middle = text_combine_multiple([" is ", comparison, " "]);
    html_div_cycle_code(example_box, [
      "",
      chosen_text,
      compare_middle,
      other_text,
    ]);
    let v = code(chosen, other);
    html_div_cycle_code(example_box, ["So ", v, " is ", chosen_text]);
    let v2 = code(other, chosen);
    html_div_cycle_code(example_box, ["And ", v2, " is also ", chosen_text]);
    let chooses = text_combine_multiple([" chooses the ", noun, " number"]);
    html_div_cycle_code(example_box, ["", fn_name, chooses]);
    let equal_box = app_code_container_light_blue(root);
    html_div_cycle_code(equal_box, [
      "If both numbers are equal, then there's only one number to choose from, so ",
      fn_name,
      " chooses that number",
    ]);
  }
}
