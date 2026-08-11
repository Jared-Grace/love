import { app_code_lesson_expression_string_trichotomy_title_name_id } from "./app_code_lesson_expression_string_trichotomy_title_name_id.mjs";
import { app_code_lesson_expression_string_trichotomy_question_code } from "./app_code_lesson_expression_string_trichotomy_question_code.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { text_lower_is } from "./text_lower_is.mjs";
import { app_code_verse_words_clean_unique } from "./app_code_verse_words_clean_unique.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_prose_code_list } from "./app_code_prose_code_list.mjs";
import { app_code_prose_code_line } from "./app_code_prose_code_line.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_expression_string_trichotomy() {
  "the trichotomy of comparing two strings - the very same three-case structure the learner just met on numbers, now carried over to strings: two strings are the same, or the first comes before the other in the dictionary, or the first comes after - exactly one of the three. The transfer is the point: === for same (as on numbers), < for before (where numbers had smaller), > for after (where numbers had bigger). Only the all-lowercase verse words are used, because JavaScript orders strings by character code, where every capital letter sorts before every small one, so mixing cases would break the alphabetical order being taught, and lowercasing a reverent word to dodge that is worse. Placed just after the string dictionary-order lesson and before the string <= / >= lesson.";
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
    "six comparisons over ONE shared pair of words: each operator shown once true then once false, grouped two-by-two in the same/before/after order of the a/b/c list, so the learner sees each of the three go both ways for the fixed pair, matching the number trichotomy they just did";
    let words = words_source();
    let two = list_shuffle_take(words, 2);
    let ordered = list_sort_text(two);
    let earlier = list_get(ordered, 0);
    let later = list_get(ordered, 1);
    function one(combo) {
      "one example built from the combo and the shared pair";
      let code = app_code_lesson_expression_string_trichotomy_question_code(
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
  let name_id = app_code_lesson_expression_string_trichotomy_title_name_id(
    equals_operator,
    less_operator,
    greater_operator,
  );
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 6,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    unscramble_label: "Build the code that gives this value: ",
    forwards_answer_count_override: 2,
  });
  return lesson;
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
