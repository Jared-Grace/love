import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_string_build_program } from "./app_learn_js_string_build_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_copy } from "./app_learn_js_lesson_array_copy.mjs";
import { app_learn_js_lesson_statement_name_join } from "./app_learn_js_lesson_statement_name_join.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_string_copy() {
  arguments_assert(arguments, 0);
  ('copying a string one letter at a time: let a = "joy"; let b = ""; for (let i = 0; i < a.length; i++) { b = b + a[i]; } console.log(b); writes out joy');
  ('2026-11-21, at the human\'s asking: the first of the string-building lessons, before doubling each letter and reversing. On its own a copy is not useful, since let b = a; does it, but it is the pattern the next two change by one piece, as Copying an array was for arrays. The new facts are "" as a string with no letters, said beside [] as an array with no items, and b = b + a[i]; joining one letter onto b each time round.');
  ("The words are love, joy, peace, kind and good, as in Every letter of a string, so a loop runs 3 to 5 times. A set is four questions, each a different word.");
  ("Reading forwards, the wrong answers are the word missing its first letter (the loop starting at 1), the word missing its last letter (stopping at a.length - 1), and the word backwards. Reading backwards, the wrong programs are those two loops. Each wrong answer is worked out by running its program, and kept only if it differs from the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let words = ["love", "joy", "peace", "kind", "good"];
  let condition = "i < a.length";
  function program_of(word) {
    let code = app_learn_js_string_build_program(
      word,
      "0",
      condition,
      "i++;",
      "a[i]",
    );
    return code;
  }
  function wrong_programs(word) {
    "the copy loop starting at 1, and stopping at a.length - 1";
    let late = app_learn_js_string_build_program(
      word,
      "1",
      condition,
      "i++;",
      "a[i]",
    );
    let early = app_learn_js_string_build_program(
      word,
      "0",
      "i < a.length - 1",
      "i++;",
      "a[i]",
    );
    let r = [late, early];
    return r;
  }
  function batch_get() {
    "four programs, each copying a different word";
    let chosen = list_shuffle_take(words, 4);
    let codes = list_map(chosen, program_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function word_of(code) {
    "the word a holds, read off the first line: let a = \"joy\";";
    let lines = text_split_newline(code);
    let head = list_first(lines);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let word = json_from(after);
    return word;
  }
  function decoys(question, answer) {
    "what the two wrong loops write out, and the word backwards; each once, never the answer";
    let word = word_of(question);
    let list = wrong_programs(word);
    let outputs = list_map(list, eval_console_log_lines);
    let backwards = word.split("").reverse().join("");
    outputs.push(backwards);
    let found = list_without(outputs, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the copy loop starting at 1, and stopping at a.length - 1";
    let word = word_of(answer);
    let r2 = wrong_programs(word);
    return r2;
  }
  function above(root, context) {
    "copying an array and joining text remembered, then the same copy loop over a string, joining instead of pushing";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_copy,
      [
        "a ",
        "for",
        " loop can copy every item of an array into an empty array, pushing ",
        "a[i]",
        " each time round",
      ],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_statement_name_join,
      [
        "a plus between two names holding text joins the text: ",
        '"God" + "love"',
        " is ",
        '"Godlove"',
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      '""',
      " is an empty string: a string with no letters, as ",
      "[]",
      " is an array with no items. ",
      "b = b + a[i];",
      " joins one more letter of ",
      "a",
      " onto the end of ",
      "b",
      ", so the same loop copies a string:",
    ]);
    let code = program_of("joy");
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "b",
      " starts as ",
      '""',
      ", then is ",
      '"j"',
      ", then ",
      '"jo"',
      ", then ",
      '"joy"',
    ]);
    app_learn_js_div_cycle_output(box_two, ["So ", "joy", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Copying a string",
    "b = b + a[i];",
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
