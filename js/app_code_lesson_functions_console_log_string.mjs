import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_style_normal_span } from "./app_code_style_normal_span.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_string_quote } from "./js_string_quote.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_string() {
  arguments_assert(arguments, 0);
  ('console.log given a string: console.log("joy"); writes out joy');
  ("Both halves are already known - a string is lesson twenty and console.log is lesson fifty-seven - but they have never been put together, because every console.log so far has been given a number. So this is the one step between them, and it has to be taken on its own: the lesson that gives a value a name writes out a name holding a word, and a learner meeting a written-out word for the first time THERE would be learning two things at once.");
  ("The words are the fruits of the Spirit, the same source the lesson that introduced strings drew from, so the words themselves are not a third new thing.");
  function refill() {
    "four questions, each a different quoted word from the source the strings lesson used";
    let list = fruits_of_the_spirit();
    let quoted = list_shuffle_take_map(list, 4, app_code_string_code);
    return quoted;
  }
  let next_arg = list_iterator_refillable(refill);
  var r = app_code_lesson_functions_console_log_generic({
    above,
    lambda$code: js_code_statement,
    name_id_rights: ["string"],
    next_arg,
    example_count: 1,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  let f_name = property_get(r, "fn_name");
  let lesson = property_get(r, "lesson");
  return lesson;
  function above(root) {
    "so far a number, now a string - and the value written out drops the quote marks, which is the string lesson's own rule met a second time";
    app_code_container_light_blue_cycle_code(root, [
      "So far, ",
      f_name,
      " has been given numbers",
    ]);
    let list = fruits_of_the_spirit();
    let word = list_random_item(list);
    let quoted = app_code_string_code(word);
    let code = js_code_console_log_statement(quoted);
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, ["", f_name, " can be given a string too"]);
    html_div_code(c, code);
    ("what is written out is not code and is not shown as code - it wears the very look the worked example below gives its own answer, so the sentence and the example are plainly saying the same thing");
    ("a colon before the word, because what follows is the output itself rather than the rest of the sentence - the same shape the example uses when it labels its own output");
    let d = html_div(c);
    html_span_text(d, "This writes out: ");
    app_code_style_normal_span(d, word);
    let quote = js_string_quote();
    html_div_cycle_code(c, ["The quote marks ", quote, " are not written out"]);
  }
}
