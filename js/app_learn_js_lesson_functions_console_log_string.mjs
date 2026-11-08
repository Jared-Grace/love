import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { app_learn_js_string_code } from "./app_learn_js_string_code.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_call_arg } from "./js_code_call_arg.mjs";
import { app_learn_js_lesson_functions_console_log_generic } from "./app_learn_js_lesson_functions_console_log_generic.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_container_light_blue_cycle_code } from "./app_learn_js_container_light_blue_cycle_code.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_div_code } from "./app_learn_js_div_code.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { js_string_quote } from "./js_string_quote.mjs";
export function app_learn_js_lesson_functions_console_log_string() {
  arguments_assert(arguments, 0);
  ('console.log given a string: console.log("joy"); writes out joy');
  ("Both halves are already known - a string is lesson twenty and console.log is lesson fifty-seven - but they have never been put together, because every console.log so far has been given a number. So this is the one step between them, and it has to be taken on its own: the lesson that gives a value a name writes out a name holding a word, and a learner meeting a written-out word for the first time THERE would be learning two things at once.");
  ("The words are the fruits of the Spirit, the same source the lesson that introduced strings drew from, so the words themselves are not a third new thing.");
  function refill() {
    "four questions, each a different quoted word from the source the strings lesson used";
    let list = fruits_of_the_spirit();
    let quoted = list_shuffle_take_map(list, 4, app_learn_js_string_code);
    return quoted;
  }
  let next_arg = list_iterator_refillable(refill);
  ("The wrong answers use this program's own word and nothing else. Borrowed from the other questions they carried a different word each, so the only word in the code was the answer and it could be picked without reading the line.");
  ("Reading forwards they are the word with one piece of the line still on it, because which piece is written out is the question here. Reading backwards they are the string with no console.log, which writes nothing out, the word without its quote marks, and log with no console. console and log are not offered as answers, because neither is a word a learner could think came out.");
  function decoys(question, answer) {
    "the word with its quote marks, with its brackets and quote marks, and with its semicolon";
    let word = eval_console_log_lines(question);
    let quoted = app_learn_js_string_code(word);
    let bracketed = text_combine_multiple(["(", quoted, ")"]);
    let ended = text_combine_multiple([word, ";"]);
    let found = [quoted, bracketed, ended];
    return found;
  }
  function backwards_decoys(question, answer) {
    "the string with no console.log, the word without its quote marks, and log with no console";
    let word2 = eval_console_log_lines(answer);
    let quoted2 = app_learn_js_string_code(word2);
    let alone = js_code_statement(quoted2);
    let unquoted = js_code_console_log_statement(word2);
    let code2 = js_code_call_arg("log", quoted2);
    let log_only = js_code_statement(code2);
    let found2 = [alone, unquoted, log_only];
    return found2;
  }
  var r = app_learn_js_lesson_functions_console_log_generic({
    decoys,
    backwards_decoys,
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
    app_learn_js_container_light_blue_cycle_code(root, [
      "So far, ",
      f_name,
      " has been given numbers",
    ]);
    let list = fruits_of_the_spirit();
    let word = list_random_item(list);
    let code = app_code_word_console_log_statement(word);
    let c = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(c, ["", f_name, " can be given a string too:"]);
    app_learn_js_div_code(c, code);
    app_code_writes_out_line(c, word);
    let quote = js_string_quote();
    app_learn_js_div_cycle_code(c, [
      "The quote marks ",
      quote,
      " are not written out",
    ]);
  }
}
