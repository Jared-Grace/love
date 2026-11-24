import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_size } from "./list_size.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_without } from "./list_without.mjs";
import { list_map } from "./list_map.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_vowel } from "./app_learn_js_lesson_string_vowel.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_string_lower } from "./app_learn_js_lesson_string_lower.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_string_vowel_any_case() {
  arguments_assert(arguments, 0);
  ('whether a letter is a vowel, uppercase or lowercase, in one line: let c = "E"; console.log("aeiou".includes(c.toLowerCase())); writes out true');
  ("2026-11-24, at the human's asking: after Vowel?, which took lowercase letters and symbols, a lesson that works on uppercase as well. It shows the miss first - Vowel?'s line gives false for E - then the one new piece, c.toLowerCase(), already taught in the lesson on lowercasing.");
  ('Not picked: "aeiouAEIOU".includes(c), which is as right but reuses nothing.');
  ("Each set of questions has an uppercase vowel, a lowercase vowel, an uppercase other letter and a symbol, so every case is asked: lowercasing changes the answer only for the first.");
  ('The wrong answers are the other of true and false, and aeiou. The backwards quiz also offers Vowel?\'s line without toLowerCase, and the line with toUpperCase, which is never in "aeiou" and so always false; each only where it writes out something other than the answer.');
  ("The writing is a first draft by Claude 2026-11-24.");
  let name = "c";
  let vowels_upper = ["A", "E", "I", "O", "U"];
  let vowels_lower = ["a", "e", "i", "o", "u"];
  let others_upper = ["B", "D", "G", "J", "L", "S", "T", "Y"];
  let symbols = ["!", "?", "3", "#", ","];
  let old_call = '"aeiou".includes(c)';
  let right_call = '"aeiou".includes(c.toLowerCase())';
  let upper_call = '"aeiou".includes(c.toUpperCase())';
  function program_with(letter, call) {
    let head = js_code_let_json_statement(name, letter);
    let line = js_code_console_log_statement(call);
    let code = list_join_newline([head, line]);
    return code;
  }
  function program(letter2) {
    let code2 = program_with(letter2, right_call);
    return code2;
  }
  function batch_get() {
    "four programs, an uppercase vowel, a lowercase vowel, an uppercase other letter and a symbol, in a shuffled order";
    let a = list_shuffle_take(vowels_upper, 1);
    let b = list_shuffle_take(vowels_lower, 1);
    let c = list_shuffle_take(others_upper, 1);
    let d = list_shuffle_take(symbols, 1);
    let vowels_two = list_concat(a, b);
    let others_two = list_concat(c, d);
    let letters = list_concat(vowels_two, others_two);
    let count = list_size(letters);
    let codes = list_shuffle_take_map(letters, count, program);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the other answer of true and false, and the word aeiou";
    let candidates = ["true", "false", "aeiou"];
    let found = list_without(candidates, answer);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same line with each letter that writes out the other answer, and the uppercase vowels asked without lowercasing or with uppercasing";
    let out_answer = eval_console_log_lines(answer);
    let vowels_all = list_concat(vowels_upper, vowels_lower);
    let not_vowels = list_concat(others_upper, symbols);
    let all = list_concat(vowels_all, not_vowels);
    let programs = list_map(all, program);
    function old_of(letter3) {
      let code4 = program_with(letter3, old_call);
      return code4;
    }
    function upper_of(letter5) {
      let code6 = program_with(letter5, upper_call);
      return code6;
    }
    let olds = list_map(vowels_upper, old_of);
    let uppers = list_map(vowels_all, upper_of);
    let wrongs = list_concat(olds, uppers);
    let candidates2 = list_concat(programs, wrongs);
    function differs(code3) {
      let out = eval_console_log_lines(code3);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(candidates2, differs);
    return kept;
  }
  function example_with(root, letter4, call2) {
    "an example program and what it writes out";
    let code5 = program_with(letter4, call2);
    let lines = text_split_newline(code5);
    let out2 = eval_console_log_lines(code5);
    app_learn_js_code_lines_writes_out(root, lines, out2);
  }
  function above(root, context) {
    "the vowel test remembered and shown missing an uppercase E, lowercasing remembered, then the fixed test on E, e and T";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_vowel,
      ["", old_call, " is true only when ", "c", " is a vowel"],
    );
    app_learn_js_div_cycle_code(box_one, [
      "But ",
      '"aeiou"',
      " has only lowercase vowels, so the uppercase ",
      "E",
      " gives false:",
    ]);
    example_with(box_one, "E", old_call);
    let box_lower = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_lower,
      context,
      app_learn_js_lesson_string_lower,
      [
        "",
        "s.toLowerCase()",
        " changes every uppercase letter in ",
        "s",
        " to lowercase",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "So ask about ",
      "c.toLowerCase()",
      " instead of ",
      "c",
      ", and the uppercase vowels are vowels too:",
    ]);
    example_with(box_two, "E", right_call);
    app_learn_js_div_cycle_code(box_two, [
      "A lowercase vowel stays the same, so ",
      "e",
      " is still a vowel:",
    ]);
    example_with(box_two, "e", right_call);
    app_learn_js_div_cycle_code(box_two, ["", "T", " is not:"]);
    example_with(box_two, "T", right_call);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Vowel, any case?",
    "c.toLowerCase()",
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
