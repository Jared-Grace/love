import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_string_generic(params) {
  "the shared body of every string lesson: four quoted-string questions drawn from the lesson's own word source, the same forwards/backwards/unscramble labels, and the lesson-specific intro (above), wrong answers (decoys), and home title (name_id). Only those three plus the word source differ between string lessons; everything else lives here once.";
  let words_get = property_get(params, "words_get");
  let decoys = property_get(params, "decoys");
  let above = property_get(params, "above");
  let name_id = property_get(params, "name_id");
  function refill() {
    "four questions, each a different quoted word or phrase from the lesson's word source";
    let list = words_get();
    let quoted = list_shuffle_take_map(list, 4, app_code_string_code);
    return quoted;
  }
  let next_arg = list_iterator_refillable(refill);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
    forwards_question_label: "The string: ",
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    unscramble_label: "Build the code that gives this value: ",
  });
  return lesson;
}
