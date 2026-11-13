import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_without } from "./list_without.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_found_e } from "./app_learn_js_lesson_string_found_e.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_string_includes_e() {
  arguments_assert(arguments, 0);
  ('whether a string holds a letter, in one line: let s = "obey"; console.log(s.includes("e")); writes out true');
  ("2026-11-13, at the human's asking: the fifth step of the string lessons - after the loop that finds whether e is there, the one call that does the same - and taught by comparing it with console.log, which the student has written since the first lesson: a thing, a dot, an action, and a value in brackets");
  ("Not stepped through: the step tracer knows Math calls and index reads but no method of a string, and stepping is opt-in in the code lessons. Not picked: teaching the tracer a method call across the writer, the solver, the ranks and the painters for one lesson");
  ("Every set holds two words with e and two without, so the answers are never all one kind. Words may end in e here, unlike the loop lesson before it, since .includes has no else that could hide a last letter");
  let name = "s";
  let letter = "e";
  let words_with = ["love", "peace", "mercy", "obey", "grace"];
  let words_without = ["joy", "kind", "good", "faith"];
  function call_code() {
    let json = json_to(letter);
    let call = name + ".includes(" + json + ")";
    return call;
  }
  function program(word) {
    let json2 = json_to(word);
    let head = js_code_let_statement(name, json2);
    let call2 = call_code();
    let line = js_code_console_log_statement(call2);
    let code = list_join_newline([head, line]);
    return code;
  }
  function batch_get() {
    "four programs, two words with e and two without, in a shuffled order";
    let with_two = list_shuffle_take(words_with, 2);
    let without_two = list_shuffle_take(words_without, 2);
    let words = list_concat(with_two, without_two);
    let count = list_size(words);
    let shuffled = list_shuffle_take(words, count);
    let codes = list_map(shuffled, program);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the other answer of true and false, and the letter asked about";
    let candidates = ["true", "false", letter];
    let found = list_without(candidates, answer);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same line with each word that writes out the other answer";
    let out_answer = eval_console_log_lines(answer);
    let all = list_concat(words_with, words_without);
    let programs = list_map(all, program);
    function differs(code2) {
      let out = eval_console_log_lines(code2);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function example(root, word3) {
    "an example program and what it writes out";
    let code3 = program(word3);
    let lines = text_split_newline(code3);
    let out2 = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(root, lines, out2);
  }
  function above(root, context) {
    "the loop that finds e remembered, console.log compared with .includes, then an example with e and one without";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_found_e,
      [
        "a loop over ",
        "s",
        " with an ",
        "if",
        " sets ",
        "found",
        " to ",
        "true",
        " when a letter is ",
        '"e"',
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "In ",
      'console.log("hi")',
      ", ",
      "console",
      " is a thing, the dot reaches its action ",
      "log",
      ", and the brackets hand it a value.",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "A string has actions too. In ",
      's.includes("e")',
      ", the dot reaches the action ",
      "includes",
      " of ",
      "s",
      ", and it gives ",
      "true",
      " if ",
      "s",
      " has ",
      '"e"',
      ", or ",
      "false",
      " if not. It does the whole loop in one line.",
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, ["", "obey", " has an ", "e", ":"]);
    example(box_three, "obey");
    app_learn_js_div_cycle_code(box_three, ["", "joy", " has no ", "e", ":"]);
    example(box_three, "joy");
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Does it include e?",
    's.includes("e")',
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
