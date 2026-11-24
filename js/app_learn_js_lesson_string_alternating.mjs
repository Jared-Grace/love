import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_alternate_upper_first } from "./app_learn_js_lesson_string_alternate_upper_first.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_alternating() {
  arguments_assert(arguments, 0);
  ('whether a word already alternates, uppercase first: the loop of Make it alternate builds out, then console.log(s === out); writes out true for "JeSuS" and false for "Jesus"');
  ("2026-11-24, at the human's asking: the third of three alternating lessons. Rather than a new kind of check, the alternating version is built as in Make it alternate and compared with the word: a word already alternating is unchanged. One loop, nothing inside another.");
  ("The short words GoD, Joy and sIn are there for the step-by-step quiz and the guided example, which draw only the questions whose loops run 1, 2 or 3 times: GoD alternates, Joy does not, and sIn alternates lowercase first, so it is false here.");
  ("The wrong programs are: the methods swapped (asks whether it alternates lowercase first), console.log(out) (writes the alternating word rather than true or false) and s !== out (the opposite answer).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = "JeSuS";
  function inputs_get() {
    "three words of three letters, then three of six longer words, shuffled together";
    let shorts = ["GoD", "Joy", "sIn"];
    let words = ["JeSuS", "Jesus", "MaRy", "MARY", "PeTeR", "jEsUs"];
    let taken = list_shuffle_take(words, 3);
    let both = list_concat(shorts, taken);
    list_shuffle(both);
    return both;
  }
  function program_with(word, line_even, line_odd, logged) {
    let lines = [
      "let s = " + json_to(word) + ";",
      'let out = "";',
      "for (let i = 0; i < s.length; i++) {",
      "  let c = s[i];",
      "  if (i % 2 === 0) {",
      "    " + line_even,
      "  } else {",
      "    " + line_odd,
      "  }",
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let upper_line = "out = out + c.toUpperCase();";
  let lower_line = "out = out + c.toLowerCase();";
  function program_of(word2) {
    let code2 = program_with(word2, upper_line, lower_line, "s === out");
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, lower_line, upper_line, "s === out");
    let v2 = program_with(word3, upper_line, lower_line, "out");
    let v3 = program_with(word3, upper_line, lower_line, "s !== out");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "making a word alternate remembered, then comparing the word with what it makes";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_alternate_upper_first,
      [
        "the loop builds ",
        "out",
        ", the letters of ",
        "s",
        " alternating, starting with uppercase",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "A word that already alternates is not changed, so ",
      "s === out",
      " is true only when ",
      "s",
      " already alternates, starting with uppercase:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Alternating?",
    "s === out",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
