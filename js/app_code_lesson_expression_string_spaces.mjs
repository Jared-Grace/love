import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_code_string_colored } from "./app_code_string_colored.mjs";
import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { app_code_string_phrases } from "./app_code_string_phrases.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_lesson_expression_string_spaces() {
  "the second string lesson, reusing the first one's machinery: a string can hold more than one word - a phrase with a SPACE - and the space is part of the string's value (it is not dropped). Words are short encouraging two-word phrases";
  let quote = '"';
  function string_code(phrase) {
    "the phrase wrapped in double quotes, as a code string";
    let combined = text_combine_multiple([quote, phrase, quote]);
    return combined;
  }
  function make(phrase) {
    let r = string_code(phrase);
    return r;
  }
  function refill() {
    "four questions, each a different two-word phrase";
    let list2 = app_code_string_phrases();
    let picked = list_shuffle_take(list2, 4);
    let list = list_map(picked, make);
    return list;
  }
  function decoys(question, answer) {
    "two tailored wrongs: the phrase WITH the quotes (thinking the quotes are part of the value), and the phrase with the SPACE removed (forgetting the space is part of the value)";
    let quoted = text_combine_multiple([quote, answer, quote]);
    let no_space = text_replace_space_to(answer, "");
    let r2 = [quoted, no_space];
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
    "the home title: a string can hold spaces";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "A string can hold spaces");
      }
      return render;
    }
    let rights = ["string", "spaces"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  function above(root) {
    "recall that a string is text in quotes (not re-bolded here - it was defined in the first string lesson), then the new idea: it can hold more than one word. The first example shows the SPACE as plain syntax; the definition then colours the value and notes the space is part of it";
    let list3 = app_code_string_phrases();
    let phrase = list_random_item(list3);
    let code = string_code(phrase);
    let intro = app_code_container_light_blue(root);
    html_div_cycle_code(intro, ["A string is text in quotes"]);
    html_div_cycle_code(intro, ["It can hold more than one word"]);
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
