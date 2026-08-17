import { app_code_lesson_expression_string_concat_above } from "./app_code_lesson_expression_string_concat_above.mjs";
import { app_code_lesson_expression_string_concat_pair } from "./app_code_lesson_expression_string_concat_pair.mjs";
import { app_code_lesson_expression_string_concat_title_name_id } from "./app_code_lesson_expression_string_concat_title_name_id.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_get } from "./list_get.mjs";
import { range_map } from "./range_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
export function app_code_lesson_expression_string_concat() {
  "the third string lesson - concatenation: a plus between two strings combines them into one, and the value is the two texts run together with no quotes and no space. The learner meets the plus doing something different than it does for numbers; the words are drawn from the shared verse so they carry meaning, and the two examples come from distinct words.";
  function pair_code(index) {
    "one question: the two words each in quotes, joined by a plus, as a code string";
    let two = app_code_lesson_expression_string_concat_pair();
    let a = list_get(two, 0);
    let b = list_get(two, 1);
    let code_a = app_code_string_code(a);
    let code_b = app_code_string_code(b);
    let joined = text_combine_multiple([code_a, " + ", code_b]);
    return joined;
  }
  function refill() {
    "four join questions, each a different pair of words";
    let list = range_map(4, pair_code);
    return list;
  }
  function decoys(question, answer) {
    "two tailored wrongs: the two words joined in the WRONG order (the join keeps the first word first, so the reversed text is a real temptation), and the value with the quotes still around it (the quotes are how you write a string, not part of its value)";
    let words = text_regex_match(question, /[a-zA-Z]+/g);
    let a = list_get(words, 0);
    let b = list_get(words, 1);
    let reversed = text_combine_multiple([b, a]);
    let quoted = app_code_string_code(answer);
    let r = [reversed, quoted];
    return r;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_string_concat_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    unscramble_label: "Build the code that gives this value: ",
  });
  return lesson;
  function above(root) {
    let r2 = app_code_lesson_expression_string_concat_above(root);
    return r2;
  }
}
