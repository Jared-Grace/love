import { arguments_assert } from "./arguments_assert.mjs";
import { list_without } from "./list_without.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_has_own } from "./app_learn_js_lesson_object_has_own.mjs";
import { app_learn_js_lesson_object_property_add } from "./app_learn_js_lesson_object_property_add.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_has_own_set() {
  arguments_assert(arguments, 0);
  ('setting a property only if it is missing: let counts = { joy: 2 }; if (!Object.hasOwn(counts, "love")) { counts.love = 0; } console.log(counts); writes out { joy: 2, love: 0 }');
  ("2026-11-16, at the human's asking - if the property does not exist then initialize it to 0: the step the counting loop takes before it counts up a word for the first time, alone, after Does an object have a property.");
  ("A set is four questions, one property set to a number from 1 to 9, joy set twice and love twice; half ask about the property already there, which is left as it is, and half about the other, which is set to 0. Shuffled.");
  ("Reading forwards, the wrong answers are taken from the object as it starts, the property set to 0, both properties with the other set to 0, and the same the other way round; each once, never the answer. Reading backwards, the wrong programs leave out the !, leave out the if, and set the property to 1; each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-16.");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function other_of(word) {
    let other = list_without(["love", "joy"], word)[0];
    return other;
  }
  function program_with(word, n, check_lines) {
    let lines = ["let counts = { " + word + ": " + n + " };"]
      .concat(check_lines)
      .concat(["console.log(counts);"]);
    let code = list_join_newline(lines);
    return code;
  }
  function check_of(not_text, asked, start) {
    let lines = [
      "if (" + not_text + 'Object.hasOwn(counts, "' + asked + '")) {',
      "  counts." + asked + " = " + start + ";",
      "}",
    ];
    return lines;
  }
  function program_of(word, n, asked) {
    let v = check_of("!", asked, "0");
    let code = program_with(word, n, v);
    return code;
  }
  function batch_get() {
    "four programs, joy set twice and love twice, each asking once about itself and once about the other, shuffled";
    let codes = [];
    for (let word of ["love", "joy"]) {
      for (let asked of ["love", "joy"]) {
        let n = list_shuffle_take(numbers, 1)[0];
        let v = program_of(word, n, asked);
        codes.push(v);
      }
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function parts_of(code) {
    "the word set and its number, read off the first line, and the property asked about, off the second";
    let lines = text_split_newline(code);
    let set = lines[0].match(/\{ (\w+): (\d+) \}/);
    let asked = lines[1].match(/"(\w+)"/);
    let parts = {
      word: set[1],
      n: Number(set[2]),
      asked: asked[1],
    };
    return parts;
  }
  function decoys(question, answer) {
    "the object as it starts, the property set to 0, the other set to 0 beside it, and the same the other way round; each once, never the answer";
    let p = parts_of(question);
    let other = other_of(p.word);
    let v1 = "{ " + p.word + ": " + p.n + " }";
    let v2 = "{ " + p.word + ": 0 }";
    let v3 = "{ " + p.word + ": " + p.n + ", " + other + ": 0 }";
    let v4 = "{ " + other + ": 0, " + p.word + ": " + p.n + " }";
    let candidates = [v1, v2, v3, v4];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "no !, no if, set to 1; kept only when they write out something else";
    let p = parts_of(answer);
    let v5 = check_of("", p.asked, "0");
    let v1 = program_with(p.word, p.n, v5);
    let v2 = program_with(p.word, p.n, ["counts." + p.asked + " = 0;"]);
    let v6 = check_of("!", p.asked, "1");
    let v3 = program_with(p.word, p.n, v6);
    let programs = [v1, v2, v3];
    let out_answer = eval_console_log_lines(answer);
    function differs(code) {
      let out = eval_console_log_lines(code);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "asking whether an object has a property and adding one remembered, then setting a property only if it is missing";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_has_own,
      [
        "",
        'Object.hasOwn(counts, "joy")',
        " asks whether ",
        "counts",
        " has a property named ",
        "joy",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_property_add,
      ["", "counts.joy = 4;", " adds a property named ", "joy"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "With ",
      "!",
      ", a property is set to ",
      "0",
      " only if it is not there yet:",
    ]);
    let code2 = program_of("joy", 2, "love");
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "counts",
      " has no property named ",
      "love",
      ", so it is set to ",
      "0",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "{ joy: 2, love: 0 }",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Setting a property only if it is missing",
    '!Object.hasOwn(counts, "love")',
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: false,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
