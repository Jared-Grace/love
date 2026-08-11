import { app_code_lesson_expression_string_hello_title_name_id } from "./app_code_lesson_expression_string_hello_title_name_id.mjs";
import { app_code_string_value_shape } from "./app_code_string_value_shape.mjs";
import { app_code_lesson_expression_string_generic } from "./app_code_lesson_expression_string_generic.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { app_code_string_value_color_on_light } from "./app_code_string_value_color_on_light.mjs";
import { app_code_string_colored } from "./app_code_string_colored.mjs";
import { app_code_string_shape } from "./app_code_string_shape.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_lesson_expression_string_hello() {
  "practice a string - text written inside quotes, the first value that is not a number. A quoted word evaluates to the text WITHOUT the quotes: the quotes are how you write it, not part of the value; the answer is the text with no quotes. The word source is the fruits of the Spirit.";
  let quote = '"';
  function decoys(question, answer) {
    "the classic mistake is thinking the quotes are part of the value, so the tailored wrong answer is the same text WITH the quotes still around it";
    let quoted = app_code_string_code(answer);
    let r = [quoted];
    return r;
  }
  let name_id = app_code_lesson_expression_string_hello_title_name_id();
  let lesson = app_code_lesson_expression_string_generic({
    words_get: fruits_of_the_spirit,
    decoys,
    above,
    name_id,
  });
  return lesson;
  function above(root) {
    "intro: name the string, show that a quote marks both the start and the end, show the shape with a deemphasized ... placeholder (the quotes are real code, the ... is a stand-in for whatever text you want), then a concrete example - a fruit of the Spirit; then show the value drops the quotes. string is bolded once at its definition";
    let list = fruits_of_the_spirit();
    let word = list_random_item(list);
    let code = app_code_string_code(word);
    let intro = app_code_container_light_blue(root);
    let name_line = html_div(intro);
    html_span_text(name_line, "In JavaScript, text is called a ");
    let term = html_span_text(name_line, "string");
    html_bold(term);
    let marks = html_div(intro);
    html_span_text(marks, "A ");
    html_span_text_code_dark(marks, quote);
    html_span_text(marks, " marks the start of a string, and the same ");
    html_span_text_code_dark(marks, quote);
    html_span_text(marks, " marks the end");
    let shape_line = html_div(intro);
    html_span_text(shape_line, "A string looks like this: ");
    app_code_string_shape(shape_line, 1);
    let example_line = html_div(intro);
    html_span_text(example_line, "Here is an example string: ");
    html_span_text_code_dark(example_line, code);
    let define = app_code_container_light_blue(root);
    let concept = html_div(define);
    html_span_text(concept, "The ");
    let value_term = html_span_text(concept, "value of a string");
    html_bold(value_term);
    let color = app_code_string_value_color_on_light();
    html_font_color_set(value_term, color);
    html_span_text(concept, " is what's between the quotes");
    html_span_text(concept, " ");
    app_code_string_value_shape(concept);
    let example = html_div(define);
    html_span_text(example, "For example, the ");
    let value_word = html_span_text(example, "value");
    let color4 = app_code_string_value_color_on_light();
    html_font_color_set(value_word, color4);
    html_span_text(example, " of ");
    app_code_string_colored(example, word);
    html_span_text(example, " is ");
    let value_out = html_span_text_code_dark(example, word);
    let color2 = app_code_string_value_color();
    html_font_color_set(value_out, color2);
    html_div_cycle_code(define, [
      "A string's value does not include its quotes",
    ]);
  }
}
