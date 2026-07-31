import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_prose_code_line } from "./app_code_prose_code_line.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_verse_words_clean } from "./app_code_verse_words_clean.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_string_operators_shape } from "./app_code_string_operators_shape.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
export function app_code_lesson_expression_string_order_equal() {
  "comparing two strings with <= and >= - the same less-than-or-equal and greater-than-or-equal the learner already knows on numbers, now on strings, and building on the string < and > they just learned: it works the same alphabetical way, with one addition - <= and >= are ALSO true when the two strings are equal (so unlike < and >, they are not opposites of each other). Only the all-lowercase verse words are used, for the same reason as the order lesson - character-code order matches alphabetical order only within one case. The four examples emphasise the equal case, because that is the one thing new here. Intended home: just after the string order lesson (and after the numeric <= / >= lessons); parked at the END for now while one student is mid-stream, written as if it sat at that earlier home.";
  let less_equal_operator = "<=";
  let greater_equal_operator = ">=";
  let combos = [
    {
      operator: less_equal_operator,
      relation: "equal",
    },
    {
      operator: less_equal_operator,
      relation: "after",
    },
    {
      operator: greater_equal_operator,
      relation: "equal",
    },
    {
      operator: greater_equal_operator,
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
    "one comparison as a code string: the shared pair arranged by the relation - equal uses the earlier word on both sides, before puts the earlier word on the left, after puts the later word on the left - which fixes the true/false answer without computing it here";
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
    "four comparisons over ONE shared pair of words: <= and >= each shown true (when the strings are equal) and false (when they are in the strictly-wrong direction), so the new equal-is-true behaviour stands out against the < and > the learner already knows";
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
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 4,
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
    "the home title: order or equal";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Order or equal ");
        app_code_string_operators_shape(parent, "<=", ">=");
      }
      return render;
    }
    let rights = ["string", "order", "equal"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  function above(root) {
    "taught differentially, not from scratch: a recall box (the learner already compared strings with < and >, and when two strings are equal both are false), then the new box saying <= and >= are the SAME as the < and > they already know, with the one addition that each is also true when the two strings are equal. Building on the known operator rather than re-defining every case means the one new thing - the equal case - is what stands out. No worked examples here: the four refreshable examples below demonstrate the cases.";
    let recall = app_code_container_light_blue(root);
    app_code_prose_code_line(recall, [
      ["text", "You've compared strings with "],
      ["code", "<"],
      ["text", " and "],
      ["code", ">"],
    ]);
    app_code_prose_code_line(recall, [
      ["text", "Remember, when two strings are equal, "],
      ["code", "<"],
      ["text", " and "],
      ["code", ">"],
      ["text", " are both "],
      ["code", "false"],
    ]);
    let addition = app_code_container_light_blue(root);
    app_code_prose_code_line(addition, [
      ["text", "We can use "],
      ["code", "<="],
      ["text", " and "],
      ["code", ">="],
      ["text", " with strings too"],
    ]);
    app_code_prose_code_line(addition, [
      ["code", "<="],
      ["text", " is the same as "],
      ["code", "<"],
      ["text", ", but is also "],
      ["code", "true"],
      ["text", " when the two strings are equal"],
    ]);
    app_code_prose_code_line(addition, [
      ["code", ">="],
      ["text", " is the same as "],
      ["code", ">"],
      ["text", ", but is also "],
      ["code", "true"],
      ["text", " when the two strings are equal"],
    ]);
  }
}
