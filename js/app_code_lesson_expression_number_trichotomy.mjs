import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_prose_code_list } from "./app_code_prose_code_list.mjs";
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
      operator: equals_operator,
      relation: "equal",
    },
    {
      operator: equals_operator,
      relation: "smaller",
    },
    {
      operator: less_operator,
      relation: "smaller",
    },
    {
      operator: less_operator,
      relation: "bigger",
    },
    {
      operator: greater_operator,
      relation: "bigger",
    },
    {
      operator: greater_operator,
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
    "six comparisons over ONE shared pair of numbers: each operator shown once true then once false, grouped two-by-two in the same/smaller/bigger order of the a/b/c list, so the learner sees each of the three go both ways for the fixed pair";
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
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 6,
    decoys: app_code_comparison_decoys,
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
    "first an example box: two numbers can be the same or different; then a reasoning box - when they are different one is bigger, shown both as bigger and as smaller; then the three-cases box: any two numbers give exactly one of the three, listed a/b/c with the operator that tests each case tagged in parentheses. Everyday words bigger/smaller, and the general rule stated in words (the first / the second number) because variables are not taught yet, so all code shown is concrete numbers.";
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
    app_code_prose_code_line(cases, [["text", "Suppose we have two numbers"]]);
    app_code_prose_code_line(cases, [
      ["text", "Then exactly one of these will be "],
      ["code", "true"],
      ["text", ":"],
    ]);
    app_code_prose_code_list(cases, [
      [
        ["text", "They are the same ("],
        ["code", equals_operator],
        ["text", ")"],
      ],
      [
        ["text", "The first is smaller than the second ("],
        ["code", less_operator],
        ["text", ")"],
      ],
      [
        ["text", "The first is bigger than the second ("],
        ["code", greater_operator],
        ["text", ")"],
      ],
    ]);
  }
}
