import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_string_pair_words } from "./app_code_string_pair_words.mjs";
import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_string_shape } from "./app_code_string_shape.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
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
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_string_concat() {
  "the third string lesson: two strings joined with a plus become one string, and the value is the two texts stuck together with no quotes and no space between them. The learner meets the plus as a joiner of text, not only a number operator; the words are short, wholesome and distinct, and the joined value keeps the first word first so order is felt without naming it.";
  function pair() {
    "two DIFFERENT short words, so the join is always between two distinct texts";
    let words = app_code_string_pair_words();
    let two = list_shuffle_take(words, 2);
    return two;
  }
  function pair_code(index) {
    "one question: the two words each in quotes, joined by a plus, as a code string";
    let two = pair();
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
  });
  return lesson;
  function title_name_id() {
    "the home title: joining strings";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "String concatenation ");
        app_code_string_shape(parent, 1);
        html_span_text_code_dark(parent, " + ");
        app_code_string_shape(parent, 1);
      }
      return render;
    }
    let rights = ["string", "concatenation"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  function above(root) {
    "recall that a string is text in quotes, then the new idea: a plus joins two strings into one. A worked example shows the two strings and the joined value in the value colour, then a gentle note that the first string comes first.";
    let two = pair();
    let a = list_get(two, 0);
    let b = list_get(two, 1);
    let code_a = app_code_string_code(a);
    let code_b = app_code_string_code(b);
    let join_code = text_combine_multiple([code_a, " + ", code_b]);
    let joined_value = text_combine_multiple([a, b]);
    let recall = app_code_container_light_blue(root);
    html_div_cycle_code(recall, ["A string is text in quotes"]);
    let idea = app_code_container_light_blue(root);
    let idea_line = html_div(idea);
    html_span_text(idea_line, "We can ");
    let term = html_span_text(idea_line, "join");
    html_bold(term);
    html_span_text(idea_line, " two strings into one with ");
    html_span_text_code_dark(idea_line, "+");
    let example_line = html_div(idea);
    html_span_text(example_line, "For example: ");
    html_span_text_code_dark(example_line, join_code);
    let define = app_code_container_light_blue(root);
    let value_line = html_div(define);
    html_span_text(value_line, "The value of ");
    html_span_text_code_dark(value_line, join_code);
    html_span_text(value_line, " is ");
    let value_out = html_span_text_code_dark(value_line, joined_value);
    let color = app_code_string_value_color();
    html_font_color_set(value_out, color);
    let name_line = html_div(define);
    html_span_text(name_line, "Joining strings like this is called ");
    let name_term = html_span_text(name_line, "concatenation");
    html_bold(name_term);
    html_div_cycle_code(define, [
      "The first string comes first, then the second",
    ]);
  }
}
