import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_push_if_e } from "./app_learn_js_lesson_array_for_push_if_e.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_keep_long_words() {
  arguments_assert(arguments, 0);
  ('the words of a sentence longer than 3 letters, kept: split at a space, let long = [], then for each word w, if (w.length > 3) { long.push(w); }, then console.log(long.join(" ")); writes out love genuine for "let love be genuine"');
  ("2026-11-23, at the human's asking: after Count the long words. The loop of push_if_e, which keeps the words with an e, over the words of a sentence and asking about length, then joined back with a space. Nothing in it is new.");
  ("Most sayings have a word of exactly 3 letters, so > 3 and >= 3 keep different words.");
  ("The wrong programs are: the loop with >= 3 (3-letter words kept too), the loop with no if (every word kept, so the sentence again) and console.log(long) (the array itself, not joined).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "let love be genuine";
  function inputs_get() {
    "five sayings, shuffled";
    let sayings = [
      "let love be genuine",
      "pray for one another",
      "do all things without grumbling",
      "the Lord is my shepherd",
      "rejoice in hope",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, body, logged) {
    "the split, the loop over the words with body inside, then the log";
    let lines = [
      "let s = " + json_to(saying) + ";",
      'let a = s.split(" ");',
      "let long = [];",
      "for (let i = 0; i < a.length; i++) {",
      "  let w = a[i];",
      ...body,
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function body_if(condition) {
    let body = ["  if (" + condition + ") {", "    long.push(w);", "  }"];
    return body;
  }
  function program_of(saying2) {
    let v4 = body_if("w.length > 3");
    let code2 = program_with(saying2, v4, 'long.join(" ")');
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v5 = body_if("w.length >= 3");
    let v = program_with(saying3, v5, 'long.join(" ")');
    let v2 = program_with(saying3, ["  long.push(w);"], 'long.join(" ")');
    let v6 = body_if("w.length > 3");
    let v3 = program_with(saying3, v6, "long");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "keeping some words remembered, then keeping the long words of a sentence";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_if_e,
      [
        "",
        'if (a[i].includes("e")) { b.push(a[i]); }',
        " keeps the words with an ",
        "e",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With ",
      "w.length > 3",
      " it keeps the words longer than 3 letters, and ",
      'long.join(" ")',
      " puts them back together:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Keep the long words",
    "long.push(w)",
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
