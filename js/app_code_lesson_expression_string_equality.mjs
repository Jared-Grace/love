import { app_code_verse_words_clean_unique } from "./app_code_verse_words_clean_unique.mjs";
import { app_code_prose_rule_line } from "./app_code_prose_rule_line.mjs";
import { app_code_prose_code_line } from "./app_code_prose_code_line.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_string_operators_shape } from "./app_code_string_operators_shape.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { ternary } from "./ternary.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
export function app_code_lesson_expression_string_equality() {
  "comparing two strings for equality - the same triple-equals and not-equals the learner already knows on numbers, now on strings: it is true when the two strings are exactly the same text. Half the questions use triple-equals (true when the words match) and half not-equals (true when they differ), over words from the shared verse. Placed just after the numeric equal-to / not-equal-to lessons and the string lessons.";
  let equal_operator = "===";
  let not_equal_operator = "!==";
  let combos = [
    {
      operator: equal_operator,
      same: true,
    },
    {
      operator: equal_operator,
      same: false,
    },
    {
      operator: not_equal_operator,
      same: true,
    },
    {
      operator: not_equal_operator,
      same: false,
    },
  ];
  function question_code(combo, word_a, word_b) {
    "one comparison as a code string: the shared pair with the operator between them; when the pair should match, word_a is used on both sides, otherwise word_a and word_b - so every example shares the same left word and only the right word and the operator change";
    let operator = property_get(combo, "operator");
    let same = property_get(combo, "same");
    let right_word = ternary(same, word_a, word_b);
    let code_left = app_code_string_code(word_a);
    let code_right = app_code_string_code(right_word);
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
    "four comparisons over ONE shared pair of words, so only the operator and whether the two sides match change from one example to the next: triple-equals and not-equals, each shown true and false, a balanced two true and two false";
    let words = app_code_verse_words_clean_unique();
    let two = list_shuffle_take(words, 2);
    let word_a = list_get(two, 0);
    let word_b = list_get(two, 1);
    function one(combo) {
      "one example built from the combo and the shared pair";
      let code = question_code(combo, word_a, word_b);
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
    "the home title: comparing strings";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Comparing strings ");
        app_code_string_operators_shape(parent, "===", "!==");
      }
      return render;
    }
    let rights = ["string", "equality"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  function above(root) {
    "first a recall box anchoring on the === the learner already knows on numbers, then reveal it also compares strings; then two rule boxes, each its own light-blue container - === and !== - and within each box the true case and the false case are stated on their own line, condition first (When ... then ... is true/false), the first letter of each paragraph capitalised. No worked examples here: the four refreshable examples below demonstrate all four cases.";
    let true_text = js_keyword_true();
    let false_text = js_keyword_false();
    let recall = app_code_container_light_blue(root);
    app_code_prose_code_line(recall, [
      ["text", "You've seen that "],
      ["code", "==="],
      ["text", " asks if two numbers are the same"],
    ]);
    app_code_prose_code_line(recall, [
      ["code", "==="],
      ["text", " also compares two strings"],
    ]);
    let equals_box = app_code_container_light_blue(root);
    app_code_prose_rule_line(
      equals_box,
      "both strings are exactly the same",
      "===",
      true_text,
    );
    app_code_prose_rule_line(
      equals_box,
      "the strings are different in some way",
      "===",
      false_text,
    );
    let not_box = app_code_container_light_blue(root);
    app_code_prose_code_line(not_box, [
      ["code", "!=="],
      ["text", " is the opposite"],
    ]);
    app_code_prose_rule_line(
      not_box,
      "the strings are different in some way",
      "!==",
      true_text,
    );
    app_code_prose_rule_line(
      not_box,
      "both strings are exactly the same",
      "!==",
      false_text,
    );
  }
}
