import { app_code_lesson_expression_string_order_above } from "./app_code_lesson_expression_string_order_above.mjs";
import { app_code_verse_words_lower_only } from "./app_code_verse_words_lower_only.mjs";
import { app_code_lesson_expression_string_order_title_name_id } from "./app_code_lesson_expression_string_order_title_name_id.mjs";
import { app_code_string_comparison_code } from "./app_code_string_comparison_code.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_expression_string_order() {
  "comparing two strings for order with < and > - the same less-than and greater-than the learner already knows on numbers, now on strings, where the ordering is alphabetical (dictionary order). Only the all-lowercase verse words are used, because JavaScript orders strings by character code, where every capital letter sorts before every small one, so mixing cases would make God sort before and - true to the machine but the opposite of the alphabetical order being taught, and lowercasing a reverent word to dodge that is worse. Four questions cover both operators in both directions, strictly before/after with two different words - the equal case is deferred to the string trichotomy lesson. Placed just after the string-equality lesson (and after the numeric less-than / greater-than lessons).";
  let less_operator = "<";
  let greater_operator = ">";
  let combos = [
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
  function refill() {
    "four comparisons over ONE shared pair of DIFFERENT words: each operator shown true (in its correct direction) and false (in the wrong one), pure alphabetical ordering with no equal case - the equal case now lives in the string trichotomy lesson";
    let words = app_code_verse_words_lower_only();
    let two = list_shuffle_take(words, 2);
    let ordered = list_sort_text(two);
    let earlier = list_get(ordered, 0);
    let later = list_get(ordered, 1);
    function one(combo) {
      "one example built from the combo and the shared pair";
      let code = app_code_string_comparison_code(combo, earlier, later);
      return code;
    }
    let list = list_map(combos, one);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_string_order_title_name_id();
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
  function above(root) {
    let r = app_code_lesson_expression_string_order_above(root);
    return r;
  }
}
