import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { app_code_placeholder_color } from "./app_code_placeholder_color.mjs";
import { app_code_string_colored } from "./app_code_string_colored.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_lesson_expression_string_hello() {
  "practice a string - text written inside quotes, the first value that is not a number. A quoted word evaluates to the text WITHOUT the quotes: the quotes are how you write it, not part of the value; the answer is the text with no quotes.";
  let quote = '"';
  function string_code(word) {
    "the word wrapped in double quotes, as a code string";
    let combined = text_combine_multiple([quote, word, quote]);
    return combined;
  }
  function words() {
    "the fruits of the Spirit, quoted as example strings";
    let list = fruits_of_the_spirit();
    return list;
  }
  function make(word) {
    let r = string_code(word);
    return r;
  }
  function refill() {
    "four questions, each a different quoted word";
    let list2 = words();
    let picked = list_shuffle_take(list2, 4);
    let list = list_map(picked, make);
    return list;
  }
  function decoys(question, answer) {
    "the classic mistake is thinking the quotes are part of the value, so the tailored wrong answer is the same text WITH the quotes still around it";
    let quoted = text_combine_multiple([quote, answer, quote]);
    let r2 = [quoted];
    return r2;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
    forwards_question_label: "Value of the string: ",
    forwards_answer_label: "value: ",
    backwards_question_label: "value: ",
    backwards_answer_label: "What code gives this value? ",
    unscramble_label: "Build the code that gives this value: ",
  });
  return lesson;
  function title_name_id() {
    "the home title names the new idea - a string";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "A string is text in quotes");
      }
      return render;
    }
    let rights = ["string"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  function above(root) {
    "intro: name the string, show that a quote marks both the start and the end, show the shape with a deemphasized ... placeholder (the quotes are real code, the ... is a stand-in for whatever text you want), then a concrete example - a fruit of the Spirit; then show the value drops the quotes. string is bolded once at its definition";
    let list3 = fruits_of_the_spirit();
    let word = list_random_item(list3);
    let code = string_code(word);
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
    let shape = html_span(shape_line);
    html_style_code_dark_nowrap(shape);
    html_span_text(shape, quote);
    let dots = html_span_text(shape, "...");
    let color = app_code_placeholder_color();
    html_font_color_set(dots, color);
    html_span_text(shape, quote);
    let example_line = html_div(intro);
    html_span_text(example_line, "Here is an example string: ");
    html_span_text_code_dark(example_line, code);
    let define = app_code_container_light_blue(root);
    let concept = html_div(define);
    html_span_text(concept, "The ");
    let value_term = html_span_text(concept, "value of a string");
    html_bold(value_term);
    let color3 = app_code_string_value_color();
    html_font_color_set(value_term, color3);
    let background = app_shared_color_code_background();
    html_style_background_color_set(value_term, background);
    let border_radius = app_shared_border_radius();
    html_border_radius(value_term, border_radius);
    html_style_padding_x(value_term, "0.35em");
    html_span_text(concept, " is what's between the quotes");
    let example = html_div(define);
    html_span_text(example, "For example, the value of ");
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
