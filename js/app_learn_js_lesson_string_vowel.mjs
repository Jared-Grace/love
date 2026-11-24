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
import { app_learn_js_lesson_string_includes_e } from "./app_learn_js_lesson_string_includes_e.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_string_vowel() {
  arguments_assert(arguments, 0);
  ('whether a letter is a vowel, in one line: let c = "o"; console.log("aeiou".includes(c)); writes out true');
  ('2026-11-24, at the human\'s asking: Does it include e? asked whether a word holds one letter; here the roles turn around - the string of vowels is the one searched, and the letter is what is looked for. The string is written straight in the code, "aeiou", rather than given a name, so the new thing is only which side of the dot each goes.');
  ("The letters are lowercase only; an uppercase vowel would give false, which is left for a later lesson rather than taught by surprise here.");
  ('The wrong answers are the other of true and false, and the letter. The backwards quiz also offers the line turned around, c.includes("aeiou"), which asks whether the letter holds all five vowels and so is always false.');
  ("The writing is a first draft by Claude 2026-11-24.");
  let name = "c";
  let vowels = ["a", "e", "i", "o", "u"];
  let consonants = ["b", "d", "g", "j", "l", "s", "t", "y"];
  let right_call = '"aeiou".includes(c)';
  let turned_call = 'c.includes("aeiou")';
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
    "four programs, two vowels and two other letters, in a shuffled order";
    let vowels_two = list_shuffle_take(vowels, 2);
    let others_two = list_shuffle_take(consonants, 2);
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
    "the same line with each letter that writes out the other answer, and the line turned around";
    let out_answer = eval_console_log_lines(answer);
    let all = list_concat(vowels, consonants);
    let programs = list_map(all, program);
    function turned_of(letter3) {
      let code4 = program_with(letter3, turned_call);
      return code4;
    }
    let turned = list_map(vowels, turned_of);
    let candidates2 = list_concat(programs, turned);
    function differs(code3) {
      let out = eval_console_log_lines(code3);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(candidates2, differs);
    return kept;
  }
  function example(root, letter4) {
    "an example program and what it writes out";
    let code5 = program(letter4);
    let lines = text_split_newline(code5);
    let out2 = eval_console_log_lines(code5);
    app_learn_js_code_lines_writes_out(root, lines, out2);
  }
  function above(root, context) {
    "includes remembered, the roles turned around, then a vowel and a letter that is not";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_includes_e,
      [
        "",
        's.includes("e")',
        " is ",
        "true",
        " if the string ",
        "s",
        " has ",
        '"e"',
        " in it",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "The vowels are ",
      '"aeiou"',
      ". To ask whether a letter ",
      "c",
      " is a vowel, the vowels go before the dot, and the letter in the brackets: ",
      right_call,
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, ["", "o", " is a vowel:"]);
    example(box_three, "o");
    app_learn_js_div_cycle_code(box_three, ["", "t", " is not:"]);
    example(box_three, "t");
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Vowel?",
    right_call,
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
