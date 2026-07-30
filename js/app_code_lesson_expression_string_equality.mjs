import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_verse_words_clean } from "./app_code_verse_words_clean.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
export function app_code_lesson_expression_string_equality() {
  "comparing two strings for equality - the same triple-equals and not-equals the learner already knows on numbers, now on strings: it is true when the two strings are exactly the same text. Half the questions use triple-equals (true when the words match) and half not-equals (true when they differ), over words from the shared verse. Intended home: just after the numeric equal-to / not-equal-to lessons and the string lessons; parked at the END for now while one student is mid-stream, written as if it sat at that earlier home.";
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
  function question_code(combo) {
    "one comparison as a code string: two verse words in quotes with the operator between them; when the pair should match, the same word is used on both sides";
    let operator = property_get(combo, "operator");
    let same = property_get(combo, "same");
    let list2 = app_code_verse_words_clean();
    let words = list_unique(list2);
    let two = list_shuffle_take(words, 2);
    let left = list_get(two, 0);
    let right = list_get(two, 1);
    if (same) {
      right = left;
    }
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
    "four comparisons: triple-equals same, triple-equals different, not-equals same, not-equals different - a balanced two true and two false, both operators drilled";
    let list = list_map(combos, question_code);
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
    example_count: 2,
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
    "the home title: comparing strings";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Comparing strings");
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
    "anchor on the equality the learner already knows on numbers, then reveal it works on strings too - true when the text is exactly the same, false when it differs; then not-equals as the opposite. A same example and a different example are shown for each, with fresh verse words each visit.";
    let list3 = app_code_verse_words_clean();
    let words = list_unique(list3);
    let two = list_shuffle_take(words, 2);
    let a = list_get(two, 0);
    let b = list_get(two, 1);
    let code_a = app_code_string_code(a);
    let code_b = app_code_string_code(b);
    let same_code = text_combine_multiple([code_a, " === ", code_a]);
    let different_code = text_combine_multiple([code_a, " === ", code_b]);
    let not_code = text_combine_multiple([code_a, " !== ", code_b]);
    let recall = app_code_container_light_blue(root);
    let recall_line = html_div(recall);
    html_span_text(recall_line, "You've seen that ");
    html_span_text_code_dark(recall_line, "===");
    html_span_text(recall_line, " asks if two numbers are the same");
    let also_line = html_div(recall);
    html_span_text_code_dark(also_line, "===");
    html_span_text(also_line, " also compares two strings");
    let idea = app_code_container_light_blue(root);
    let rule_line = html_div(idea);
    html_span_text_code_dark(rule_line, "===");
    html_span_text(rule_line, " is ");
    let text = js_keyword_true();
    html_span_text_code_dark(rule_line, text);
    html_span_text(rule_line, " when the strings are exactly the same");
    let same_line = html_div(idea);
    html_span_text_code_dark(same_line, same_code);
    html_span_text(same_line, " is ");
    let text2 = js_keyword_true();
    html_span_text_code_dark(same_line, text2);
    let different_line = html_div(idea);
    html_span_text_code_dark(different_line, different_code);
    html_span_text(different_line, " is ");
    let text3 = js_keyword_false();
    html_span_text_code_dark(different_line, text3);
    let not_box = app_code_container_light_blue(root);
    let not_rule = html_div(not_box);
    html_span_text_code_dark(not_rule, "!==");
    html_span_text(not_rule, " is the opposite - ");
    let text4 = js_keyword_true();
    html_span_text_code_dark(not_rule, text4);
    html_span_text(not_rule, " when the strings are different");
    let not_example = html_div(not_box);
    html_span_text_code_dark(not_example, not_code);
    html_span_text(not_example, " is ");
    let text5 = js_keyword_true();
    html_span_text_code_dark(not_example, text5);
  }
}
