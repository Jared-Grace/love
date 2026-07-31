import { app_code_prose_code_list } from "./app_code_prose_code_list.mjs";
import { app_code_operators_shape_list } from "./app_code_operators_shape_list.mjs";
import { app_code_placeholder_tile_string } from "./app_code_placeholder_tile_string.mjs";
import { app_code_prose_code_line } from "./app_code_prose_code_line.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_verse_words_clean } from "./app_code_verse_words_clean.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_string_trichotomy() {
  "the trichotomy of comparing two strings - the very same three-case structure the learner just met on numbers, now carried over to strings: two strings are the same, or the first comes before the other in the dictionary, or the first comes after - exactly one of the three. The transfer is the point: === for same (as on numbers), < for before (where numbers had smaller), > for after (where numbers had bigger). Only the all-lowercase verse words are used, because JavaScript orders strings by character code, where every capital letter sorts before every small one, so mixing cases would break the alphabetical order being taught, and lowercasing a reverent word to dodge that is worse. Intended home: just after the string dictionary-order lesson and before the string <= / >= lesson; parked in the tail for now while one student is mid-stream, written as if it sat at that earlier home.";
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
      relation: "before",
    },
    {
      operator: less_operator,
      relation: "before",
    },
    {
      operator: less_operator,
      relation: "after",
    },
    {
      operator: greater_operator,
      relation: "after",
    },
    {
      operator: greater_operator,
      relation: "before",
    },
  ];
  function words_source() {
    "the verse words that are already all lower case, made distinct - the only ones whose character-code order matches alphabetical order, so a capital never sorts ahead of a small letter in front of the learner";
    let cleaned = app_code_verse_words_clean();
    let distinct = list_unique(cleaned);
    function lower_case_is(word) {
      "whether a word is already all lower case (unchanged by lower-casing it)";
      let lowered = text_lower_to(word);
      let same = equal(word, lowered);
      return same;
    }
    let lower_only = list_filter(distinct, lower_case_is);
    return lower_only;
  }
  function question_code(combo, earlier, later) {
    "one comparison as a code string: the shared pair arranged by the relation - equal uses the earlier word on both sides, before puts the earlier word on the left, after puts the later word on the left - which fixes whether the comparison is true or false without computing it here";
    let operator = property_get(combo, "operator");
    let relation = property_get(combo, "relation");
    let after = equal(relation, "after");
    let before = equal(relation, "before");
    let left = ternary(after, later, earlier);
    let right = ternary(before, later, earlier);
    let code_left = app_code_string_code(left);
    let code_right = app_code_string_code(right);
    let joined = text_combine_multiple([
      code_left,
      " ",
      operator,
      " ",
      code_right,
    ]);
    return joined;
  }
  function refill() {
    "six comparisons over ONE shared pair of words: each operator shown once true then once false, grouped two-by-two in the same/before/after order of the a/b/c list, so the learner sees each of the three go both ways for the fixed pair, matching the number trichotomy they just did";
    let words = words_source();
    let two = list_shuffle_take(words, 2);
    let ordered = list_sort_text(two);
    let earlier = list_get(ordered, 0);
    let later = list_get(ordered, 1);
    function one(combo) {
      "one example built from the combo and the shared pair";
      let code = question_code(combo, earlier, later);
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
    "the home title: same, before, or after";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Same, before, or after ");
        app_code_operators_shape_list(
          parent,
          app_code_placeholder_tile_string,
          [equals_operator, less_operator, greater_operator],
        );
      }
      return render;
    }
    let rights = ["string", "trichotomy"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  function above(root) {
    "first a transfer box tying back to the number trichotomy the learner just did; then a dictionary box with a worked pair (same, different, before); then the three-cases box: any two strings give exactly one of the three, listed a/b/c with the operator that tests each case tagged in parentheses. Same shape as the number lesson, with smaller/bigger becoming before/after in the dictionary.";
    let transfer = app_code_container_light_blue(root);
    app_code_prose_code_line(transfer, [
      ["text", "Remember, two numbers are always the same ("],
      ["code", "==="],
      ["text", "), smaller ("],
      ["code", "<"],
      ["text", "), or bigger ("],
      ["code", ">"],
      ["text", ")"],
    ]);
    app_code_prose_code_line(transfer, [
      ["text", "Two strings work the same way"],
    ]);
    let dictionary = app_code_container_light_blue(root);
    app_code_prose_code_line(dictionary, [
      [
        "text",
        "Remember, strings are compared in alphabetical order, the order they appear in the dictionary",
      ],
    ]);
    app_code_prose_code_line(dictionary, [
      ["code", '"grace"'],
      ["text", " and "],
      ["code", '"grace"'],
      ["text", " are the same"],
    ]);
    app_code_prose_code_line(dictionary, [
      ["code", '"grace"'],
      ["text", " and "],
      ["code", '"truth"'],
      ["text", " are different"],
    ]);
    app_code_prose_code_line(dictionary, [
      ["code", '"grace"'],
      ["text", " comes before "],
      ["code", '"truth"'],
    ]);
    let cases = app_code_container_light_blue(root);
    app_code_prose_code_line(cases, [["text", "Suppose we have two strings"]]);
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
        ["text", "The first comes before the second ("],
        ["code", less_operator],
        ["text", ")"],
      ],
      [
        ["text", "The first comes after the second ("],
        ["code", greater_operator],
        ["text", ")"],
      ],
    ]);
  }
}
