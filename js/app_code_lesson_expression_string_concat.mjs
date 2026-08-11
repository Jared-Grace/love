import { app_code_lesson_expression_string_concat_value_word } from "./app_code_lesson_expression_string_concat_value_word.mjs";
import { app_code_lesson_expression_string_concat_pair } from "./app_code_lesson_expression_string_concat_pair.mjs";
import { app_code_lesson_expression_string_concat_title_name_id } from "./app_code_lesson_expression_string_concat_title_name_id.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_string_colored } from "./app_code_string_colored.mjs";
import { app_code_string_value_color_on_light } from "./app_code_string_value_color_on_light.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_get } from "./list_get.mjs";
import { range_map } from "./range_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
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
    "anchor on the plus the learner already knows (it adds numbers), then reveal it does something different for strings - it combines them. The value is derived by reducing the combination to a plain string literal they already understand (the value of the two joined is the same as the value of one string written out), then the proper name is attached. Finally the order is made concrete with left and right rather than abstract firsts, and the absence of any space is stated outright.";
    let two = app_code_lesson_expression_string_concat_pair();
    let a = list_get(two, 0);
    let b = list_get(two, 1);
    let code_a = app_code_string_code(a);
    let code_b = app_code_string_code(b);
    let join_code = text_combine_multiple([code_a, " + ", code_b]);
    let joined_value = text_combine_multiple([a, b]);
    let color = app_code_string_value_color();
    let on_light = app_code_string_value_color_on_light();
    let concept = app_code_container_light_blue(root);
    let seen_line = html_div(concept);
    html_span_text(seen_line, "You've seen that ");
    html_span_text_code_dark(seen_line, "+");
    html_span_text(seen_line, " adds two numbers together");
    let different_line = html_div(concept);
    html_span_text_code_dark(different_line, "+");
    html_span_text(different_line, " does something different for strings");
    let combines_line = html_div(concept);
    html_span_text_code_dark(combines_line, "+");
    html_span_text(combines_line, " combines two strings into one");
    let looks_line = html_div(concept);
    html_span_text(looks_line, "It looks like this: ");
    html_span_text_code_dark(looks_line, join_code);
    let derive = app_code_container_light_blue(root);
    let same_line = html_div(derive);
    html_span_text(same_line, "The ");
    app_code_lesson_expression_string_concat_value_word(same_line, on_light);
    html_span_text(same_line, " of ");
    html_span_text_code_dark(same_line, join_code);
    html_span_text(same_line, " is the same as the ");
    app_code_lesson_expression_string_concat_value_word(same_line, on_light);
    html_span_text(same_line, " of ");
    app_code_string_colored(same_line, joined_value);
    let remember_line = html_div(derive);
    html_span_text(remember_line, "Remember, the ");
    app_code_lesson_expression_string_concat_value_word(
      remember_line,
      on_light,
    );
    html_span_text(remember_line, " of ");
    app_code_string_colored(remember_line, joined_value);
    html_span_text(remember_line, " is ");
    let remember_value = html_span_text_code_dark(remember_line, joined_value);
    html_font_color_set(remember_value, color);
    let so_line = html_div(derive);
    html_span_text(so_line, "So the ");
    app_code_lesson_expression_string_concat_value_word(so_line, on_light);
    html_span_text(so_line, " of ");
    html_span_text_code_dark(so_line, join_code);
    html_span_text(so_line, " is ");
    let so_value = html_span_text_code_dark(so_line, joined_value);
    html_font_color_set(so_value, color);
    let name_box = app_code_container_light_blue(root);
    let name_line = html_div(name_box);
    html_span_text(
      name_line,
      "The proper name for combining two strings like this is ",
    );
    let name_term = html_span_text(name_line, "concatenation");
    html_bold(name_term);
    let order = app_code_container_light_blue(root);
    let left_line = html_div(order);
    html_span_text(left_line, "The left string is ");
    html_span_text_code_dark(left_line, code_a);
    let right_line = html_div(order);
    html_span_text(right_line, "The right string is ");
    html_span_text_code_dark(right_line, code_b);
    let after_line = html_div(order);
    html_span_text_code_dark(after_line, "+");
    html_span_text(
      after_line,
      " puts the right string immediately after the left string",
    );
    let space_line = html_div(order);
    html_span_text(space_line, "There is no space between them: ");
    app_code_string_colored(space_line, joined_value);
  }
}
