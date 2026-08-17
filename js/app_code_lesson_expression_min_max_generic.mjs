import { app_code_lesson_expression_min_max_generic_above } from "./app_code_lesson_expression_min_max_generic_above.mjs";
import { app_code_lesson_expression_min_max_generic_two_numbers } from "./app_code_lesson_expression_min_max_generic_two_numbers.mjs";
import { app_code_lesson_expression_min_max_generic_code } from "./app_code_lesson_expression_min_max_generic_code.mjs";
import { app_code_lesson_expression_min_max_generic_title_name_id } from "./app_code_lesson_expression_min_max_generic_title_name_id.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { range_map } from "./range_map.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_min_max_generic(params) {
  "the shared body of the two two-number function lessons - Math.min (smaller of two) and Math.max (larger of two). They differ only in the function, which of the pair it picks, and the words (smaller/larger, smaller than/bigger than), all passed in params; everything else lives here once: the four questions over pairs 2..12, the forwards/backwards/unscramble labels, the worked example shown in BOTH orders (so the VALUE is clearly what is chosen, not a position), the equal-numbers case, and the home title. Only the intro's opening line differs in shape between the two, so each lesson passes it as define_render.";
  let called_name = property_get(params, "fn_name");
  let choose = property_get(params, "choose");
  let decoy_choose = property_get(params, "decoy_choose");
  let noun = property_get(params, "noun");
  let noun_upper = property_get(params, "noun_upper");
  let comparison = property_get(params, "comparison");
  let define_render = property_get(params, "define_render");
  let short_name = property_get(params, "short_name");
  function make(index) {
    "one question with a different pair of numbers";
    let two = app_code_lesson_expression_min_max_generic_two_numbers();
    let a = list_get(two, 0);
    let b = list_get(two, 1);
    let r = app_code_lesson_expression_min_max_generic_code(a, b, called_name);
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
  let name_id = app_code_lesson_expression_min_max_generic_title_name_id(
    noun_upper,
    called_name,
    noun,
  );
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
  function above(root) {
    let r3 = app_code_lesson_expression_min_max_generic_above(
      root,
      define_render,
      choose,
      decoy_choose,
      comparison,
      called_name,
      noun,
      short_name,
    );
    return r3;
  }
}
