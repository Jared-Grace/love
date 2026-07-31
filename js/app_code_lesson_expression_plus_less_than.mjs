import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_cross_precedence_intro } from "./app_code_lesson_cross_precedence_intro.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { js_operator_plus } from "./js_operator_plus.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
import { ternary } from "./ternary.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_plus_less_than() {
  "the first expression mixing arithmetic with a comparison - two operators only, + and <, e.g. a + b < c. The new idea: the two sides of a comparison can themselves be arithmetic, so we work out the + first (a comparison needs two numbers) and then compare, giving true or false. The intro is the shared cross-precedence teaching (we always do + before <, even when + appears LATER, on the right of the <), with the SAME sum worked on both sides of the < to prove position does not change what we do first. Four refreshable examples put the sum on the left and on the right, each shown true and false, so both arrangements and both answers appear. Small whole numbers only, and every comparison is strict (never the equal case) so this stays about + and < and not <=. Intended home: right after the comparison operators (< > <= >= === !==) and the arithmetic precedence pair lessons, as the first step that lets a comparison's sides be expressions; parked at the END for now while one student is mid-stream, written as if it sat at that earlier home.";
  let plus = js_operator_plus();
  let less_than = js_operator_less_than();
  let plus_symbol = property_get(plus, "operator");
  let less_than_symbol = property_get(less_than, "operator");
  let combos = [
    {
      sum_left: true,
      want_true: true,
    },
    {
      sum_left: false,
      want_true: false,
    },
    {
      sum_left: false,
      want_true: true,
    },
    {
      sum_left: true,
      want_true: false,
    },
  ];
  function one(combo) {
    "one comparison code string whose true/false answer is fixed by construction: two small addends make a sum, and the third number is placed above or below that sum to force the wanted answer - with the sum on the LEFT of the < (sum_left) or on the RIGHT, so the learner meets + on both sides of the comparison";
    let sum_left = property_get(combo, "sum_left");
    let want_true = property_get(combo, "want_true");
    let x = integer_random(1, 4);
    let y = integer_random(1, 4);
    let s = add(x, y);
    let right2 = integer_random(1, 3);
    let above_sum = add(s, right2);
    let max = subtract(s, 1);
    let below_sum = integer_random(1, max);
    let t = text_to(x);
    let t2 = text_to(y);
    let sum_code = text_combine_multiple([t, " + ", t2]);
    let third = ternary(want_true, above_sum, below_sum);
    let single = ternary(want_true, below_sum, above_sum);
    let on_false = text_to(single);
    let left = ternary(sum_left, sum_code, on_false);
    let on_true = text_to(third);
    let right = ternary(sum_left, on_true, sum_code);
    let code = text_combine_multiple([left, " ", less_than_symbol, " ", right]);
    return code;
  }
  function refill() {
    "the four comparisons for one screen: sum-left true, sum-right false, sum-right true, sum-left false - so the two demo examples (the first two) are one true and one false, and all four span both arrangements and both answers";
    let list = list_map(combos, one);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  function above(root) {
    "the shared cross-precedence intro with the weak operator < and the strong operator +: 2 + 3 worked on both the right of the < (9 < 2 + 3, false) and the left (2 + 3 < 6, true), both doing 2 + 3 first";
    app_code_lesson_cross_precedence_intro({
      root,
      weak: less_than,
      strong: plus,
      inner_left: 2,
      inner_right: 3,
      later_outer: 9,
      first_outer: 6,
    });
  }
  function title_name_id() {
    "the home title is + <, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text_code_dark(parent, plus_symbol);
        html_span_text(parent, " ");
        html_span_text_code_dark(parent, less_than_symbol);
      }
      return render;
    }
    let rights = [" plus less than"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: "value: ",
    backwards_question_label: "value: ",
    backwards_answer_label: "What code gives this value? ",
    unscramble_label: "Build the code that gives this value: ",
    forwards_answer_count_override: 2,
  });
  return lesson;
}
