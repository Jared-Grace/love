import { subtract } from "./subtract.mjs";
import { app_code_operators_shape_list } from "./app_code_operators_shape_list.mjs";
import { app_code_placeholder_tile_number } from "./app_code_placeholder_tile_number.mjs";
import { app_code_prose_code_line } from "./app_code_prose_code_line.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_number_trichotomy() {
  "the trichotomy of comparing two numbers: any two numbers are the same, or the first is smaller, or the first is bigger - exactly one of the three, and that is WHY there are three cases (either they are the same, or if different one must be bigger than the other). Taught on numbers first, where same/smaller/bigger is the most familiar intuition, so the structure is met before the next lesson carries the very same structure over to strings. Uses the three operators the learner already knows one at a time - === for same, < for smaller, > for bigger. Intended home: just after the numeric comparison lessons and before the string ordering lessons; parked in the tail for now while one student is mid-stream, written as if it sat at that earlier home.";
  let equals_operator = "===";
  let less_operator = "<";
  let greater_operator = ">";
  let combos = [
    {
      operator: less_operator,
      relation: "smaller",
    },
    {
      operator: greater_operator,
      relation: "bigger",
    },
    {
      operator: equals_operator,
      relation: "equal",
    },
    {
      operator: less_operator,
      relation: "equal",
    },
    {
      operator: greater_operator,
      relation: "equal",
    },
    {
      operator: equals_operator,
      relation: "smaller",
    },
  ];
  function question_code(combo, low, high) {
    "one comparison as a code string: the shared pair arranged by the relation - equal uses the low number on both sides, smaller puts the low number on the left, bigger puts the high number on the left - which fixes whether the comparison is true or false without computing it here";
    let operator = property_get(combo, "operator");
    let relation = property_get(combo, "relation");
    let bigger = equal(relation, "bigger");
    let smaller = equal(relation, "smaller");
    let left = ternary(bigger, high, low);
    let right = ternary(smaller, high, low);
    let joined = text_combine_multiple([left, " ", operator, " ", right]);
    return joined;
  }
  function refill() {
    "six comparisons over ONE shared pair of numbers: each operator shown true (in its correct case) and the equal case shown for each of the three operators, so the learner sees that for a fixed pair exactly one of the three is true";
    let max = app_code_lesson_operators_value_max();
    let max2 = subtract(max, 1);
    let low = integer_random(1, max2);
    let high = integer_random(low + 1, max);
    function one(combo) {
      "one example built from the combo and the shared pair";
      let code = question_code(combo, low, high);
      return code;
    }
    let list = list_map(combos, one);
    return list;
  }
  function decoys(question, answer) {
    "a comparison has only one other possible value - the opposite of true and false";
    let true_text = js_keyword_true();
    let is_true = equal(answer, true_text);
    let on_true = js_keyword_false();
    let on_false = js_keyword_true();
    let opposite = ternary(is_true, on_true, on_false);
    let r = [opposite];
    return r;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 6,
    decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: "value: ",
    backwards_question_label: "value: ",
    backwards_answer_label: "What code gives this value? ",
    unscramble_label: "Build the code that gives this value: ",
    forwards_answer_count_override: 2,
  });
  return lesson;
  function title_name_id() {
    "the home title: same, smaller, or bigger";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Same, smaller, or bigger ");
        app_code_operators_shape_list(
          parent,
          app_code_placeholder_tile_number,
          [equals_operator, less_operator, greater_operator],
        );
      }
      return render;
    }
    let rights = ["number", "trichotomy"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  function above(root) {
    "first an example box: two numbers can be the same or different; then a reasoning box - when they are different one is bigger, shown both as bigger and as smaller; then the three-cases box stating why there are exactly three (same, or first smaller, or first bigger, only one true); then a box mapping each operator to its case. Everyday words bigger/smaller, and the general rule stated in words (the first / the second number) because variables are not taught yet, so all code shown is concrete numbers.";
    let example = app_code_container_light_blue(root);
    app_code_prose_code_line(example, [
      ["code", "1"],
      ["text", " and "],
      ["code", "1"],
      ["text", " are the same: "],
      ["code", "1 === 1"],
    ]);
    app_code_prose_code_line(example, [
      ["code", "2"],
      ["text", " and "],
      ["code", "3"],
      ["text", " are different: "],
      ["code", "2 !== 3"],
    ]);
    let reasoning = app_code_container_light_blue(root);
    app_code_prose_code_line(reasoning, [
      ["text", "When two numbers are different, one is bigger than the other"],
    ]);
    app_code_prose_code_line(reasoning, [
      ["code", "3"],
      ["text", " is bigger than "],
      ["code", "2"],
      ["text", ": "],
      ["code", "3 > 2"],
    ]);
    app_code_prose_code_line(reasoning, [
      ["code", "2"],
      ["text", " is smaller than "],
      ["code", "3"],
      ["text", ": "],
      ["code", "2 < 3"],
    ]);
    let cases = app_code_container_light_blue(root);
    app_code_prose_code_line(cases, [["text", "Take any two numbers"]]);
    app_code_prose_code_line(cases, [["text", "Either they are the same"]]);
    app_code_prose_code_line(cases, [
      ["text", "or the first is smaller than the second"],
    ]);
    app_code_prose_code_line(cases, [
      ["text", "or the first is bigger than the second"],
    ]);
    app_code_prose_code_line(cases, [
      ["text", "Only one of the three can be true"],
    ]);
    let operators = app_code_container_light_blue(root);
    app_code_prose_code_line(operators, [
      ["code", equals_operator],
      ["text", " is true when they are the same"],
    ]);
    app_code_prose_code_line(operators, [
      ["code", less_operator],
      ["text", " is true when the first is smaller"],
    ]);
    app_code_prose_code_line(operators, [
      ["code", greater_operator],
      ["text", " is true when the first is bigger"],
    ]);
  }
}
