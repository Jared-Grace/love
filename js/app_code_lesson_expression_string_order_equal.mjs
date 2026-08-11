import { app_code_lesson_expression_string_order_equal_question_code } from "./app_code_lesson_expression_string_order_equal_question_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { text_lower_is } from "./text_lower_is.mjs";
import { app_code_verse_words_clean_unique } from "./app_code_verse_words_clean_unique.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_prose_code_line } from "./app_code_prose_code_line.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_string_operators_shape } from "./app_code_string_operators_shape.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
export function app_code_lesson_expression_string_order_equal() {
  "comparing two strings with <= and >= - the same less-than-or-equal and greater-than-or-equal the learner already knows on numbers, now on strings, and building on the string < and > they just learned: it works the same alphabetical way, with one addition - <= and >= are ALSO true when the two strings are equal (so unlike < and >, they are not opposites of each other). Only the all-lowercase verse words are used, for the same reason as the order lesson - character-code order matches alphabetical order only within one case. The four examples emphasise the equal case, because that is the one thing new here. Placed just after the string trichotomy lesson (which itself follows the string order lesson), and after the numeric <= / >= lessons.";
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
    let distinct = app_code_verse_words_clean_unique();
    function lower_case_is(word) {
      "whether a word is already all lower case (unchanged by lower-casing it)";
      let same = text_lower_is(word);
      return same;
    }
    let lower_only = list_filter(distinct, lower_case_is);
    return lower_only;
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
      let code = app_code_lesson_expression_string_order_equal_question_code(
        combo,
        earlier,
        later,
      );
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
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
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
    let left = app_code_category_expressions();
    let built = app_code_lesson_name_id_generic(rights, left, title_get);
    return built;
  }
  function above(root) {
    "three teach boxes then the refreshable examples. Box 1 recalls that the learner already compared strings with < and >, and that when two strings are equal both are false. Box 2 teaches <= and >= DIFFERENTIALLY - each is the same as the < or > they already know, with the one change named at the point it happens: where the strict operator is false (the two strings equal), this one is true instead. Naming both the before value (false) and the after value (true) inline is what makes the delta line self-contained, on top of the recall box's general premise. Box 3 restates the same fact POSITIVELY - <= means comes-before-or-equal, >= means comes-after-or-equal. Two framings of one small addition on purpose: different learners latch onto different explanations, and a simple labelled line is cheap to skim past for anyone who already got it. What is avoided is the earlier version's re-definition of every case from scratch, which buried the one new thing. No worked examples here: the four refreshable examples below demonstrate the cases.";
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
    function differential(operator, strict_operator) {
      "one differential line: this operator is the same as its strict form, but true (instead of false) when the two strings are equal - the frame single-sourced so <= and >= cannot drift and a wording change is made once, not once per operator";
      app_code_prose_code_line(addition, [
        ["code", operator],
        ["text", " is the same as "],
        ["code", strict_operator],
        ["text", ", but is "],
        ["code", "true"],
        ["text", " (instead of "],
        ["code", "false"],
        ["text", ") when the two strings are equal"],
      ]);
    }
    differential("<=", "<");
    differential(">=", ">");
    let meaning = app_code_container_light_blue(root);
    function positive(operator, direction) {
      "one positive-meaning line: this operator means the first string comes before/after the second string, or the two are equal - the frame single-sourced so <= and >= cannot drift";
      let phrase = text_combine_multiple([
        " means the first string comes ",
        direction,
        " the second string, or the two strings are equal",
      ]);
      app_code_prose_code_line(meaning, [
        ["code", operator],
        ["text", phrase],
      ]);
    }
    positive("<=", "before");
    positive(">=", "after");
  }
}
