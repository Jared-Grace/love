import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_expression_string_generic } from "./app_code_lesson_expression_string_generic.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_code_string_colored } from "./app_code_string_colored.mjs";
import { app_code_string_shape } from "./app_code_string_shape.mjs";
import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { app_code_verse_word_pairs } from "./app_code_verse_word_pairs.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_lesson_expression_string_spaces() {
  "the second string lesson, reusing the first one's machinery: a string can hold more than one word - a phrase with a SPACE - and the space is part of the string's value (it is not dropped). The word source is adjacent word pairs from the shared verse.";
  function decoys(question, answer) {
    "two tailored wrongs: the phrase WITH the quotes (thinking the quotes are part of the value), and the phrase with the SPACE removed (forgetting the space is part of the value)";
    let quoted = app_code_string_code(answer);
    let no_space = text_replace_space_to(answer, "");
    let r = [quoted, no_space];
    return r;
  }
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_string_generic({
    words_get: app_code_verse_word_pairs,
    decoys,
    above,
    name_id,
  });
  return lesson;
  function title_name_id() {
    "the home title: a string can hold spaces";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Strings with spaces ");
        app_code_string_shape(parent, 2);
      }
      return render;
    }
    let rights = ["string", "spaces"];
    let built = app_code_lesson_name_id_generic(
      rights,
      app_code_category_expressions(),
      title_get,
    );
    return built;
  }
  function above(root) {
    "recall that a string is text in quotes (not re-bolded here - it was defined in the first string lesson), then the new idea: it can hold more than one word. The first example shows the SPACE as plain syntax; the definition then colours the value and notes the space is part of it";
    let list = app_code_verse_word_pairs();
    let phrase = list_random_item(list);
    let code = app_code_string_code(phrase);
    let intro = app_code_container_light_blue(root);
    html_div_cycle_code(intro, ["A string is text in quotes"]);
    html_div_cycle_code(intro, ["A string can hold more than one word"]);
    let example_line = html_div(intro);
    html_span_text(example_line, "Here is a string with a space: ");
    html_span_text_code_dark(example_line, code);
    let define = app_code_container_light_blue(root);
    let ex = html_div(define);
    html_span_text(ex, "The value of ");
    app_code_string_colored(ex, phrase);
    html_span_text(ex, " is ");
    let value_out = html_span_text_code_dark(ex, phrase);
    let color = app_code_string_value_color();
    html_font_color_set(value_out, color);
    html_div_cycle_code(define, ["The space is part of the value"]);
  }
}
