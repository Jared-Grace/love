import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { less_than } from "./less_than.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_div_cycle } from "./html_div_cycle.mjs";
import { html_bold } from "./html_bold.mjs";
import { noop } from "./noop.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { app_learn_js_code_dark_lines_comments } from "./app_learn_js_code_dark_lines_comments.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_function_body() {
  arguments_assert(arguments, 0);
  ('the first function lesson: function greet() { console.log("Hello"); } greet(); writes out Hello, since the body of a function runs when the function is called');
  ("2026-11-26, at the human's asking: functions start with their body alone - no inputs, no return - so the one new idea is that a call runs the body. Inputs come next, then return.");
  ("A set is four questions, each word once, shuffled. The function is always greet, so only the word written out changes.");
  ("Reading backwards, the wrong program calls greet twice. The wrong output is the function's name, greet, for a learner who thinks the call writes out the name.");
  ("Stepping: the definition line declares greet and its body is skipped; the call line calls it, and the learner presses the function's line, then runs its body.");
  ("The writing is a first draft by Claude 2026-11-26.");
  let words = ["Hello", "Peace", "Welcome", "Good morning"];
  function program_with(word, calls) {
    "greet declared, writing out word, then called calls times";
    let lines = [
      "function greet() {",
      "  console.log(" + json_to(word) + ");",
      "}",
    ];
    for (let k = 0; less_than(k, calls); k++) {
      lines.push("greet();");
    }
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word) {
    let code = program_with(word, 1);
    return code;
  }
  function wrong_programs_of(word) {
    let v = program_with(word, 2);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(word) {
    "the function's name, which no program here writes out";
    let outputs = ["greet"];
    return outputs;
  }
  function inputs_get() {
    "each word once, shuffled";
    let order = words.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "what a function is, and that a call runs its body";
    "2026-11-26: the words are the human's own, pasted in whole, with Functions and call in bold as they marked them";
    let box = app_learn_js_container_light_blue(root);
    html_div_text(
      box,
      'When we write computer programs, we might think "I want that one part of that program I wrote before and I want to use that one part here as well."',
    );
    html_div_text(
      box,
      "In other words, we may want to reuse a part of a computer program in multiple places",
    );
    html_div_cycle(
      box,
      [html_bold, noop],
      ["Functions", " allow us to do this"],
    );
    app_learn_js_div_cycle_code(box, [
      "How do we write a function that does ",
      'console.log("Greetings!");',
      " ?",
    ]);
    html_div_text(box, "Like this:");
    let chip = html_div(box);
    let code2 = program_with("Greetings!", 0);
    app_learn_js_code_dark_lines_comments(chip, code2);
    app_learn_js_div_cycle_code(box, [
      "Whatever is in between the ",
      "{",
      " and ",
      "}",
      " is what the function does each time the function is used",
    ]);
    app_learn_js_div_cycle_code(box, [
      "We write ",
      "greet()",
      " kind of like ",
      "log(...)",
      " in ",
      "console.log(...)",
      "",
    ]);
    app_learn_js_div_cycle_code(box, [
      "",
      "greet",
      " is an identifier that refers to the function, like ",
      "i",
      " refers to ",
      "1",
      " in ",
      "let i = 1;",
      "",
    ]);
    html_div_cycle(
      box,
      [noop, html_bold, noop, html_style_code_dark, noop, html_style_code_dark],
      [
        "To use or ",
        "call",
        " the function, we write ",
        "greet()",
        " just like we would write ",
        "console.log(...)",
      ],
    );
    ("2026-11-26: the complete program stands in a box of its own, because the card showing a program and what it writes out narrows the space between the lines of the box it is put in, which ran the paragraphs above together");
    let box_program = app_learn_js_container_light_blue(root);
    html_div_text(box_program, "Here is the complete program:");
    let code = program_of("Greetings!");
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_program, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Call it to run it",
    "greet();",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs_stepping(
    {
      name_id,
      above,
      inputs_get,
      program_of,
      wrong_programs_of,
      wrong_outputs_of,
    },
    true,
  );
  return lesson;
}
