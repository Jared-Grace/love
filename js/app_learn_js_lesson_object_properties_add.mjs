import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_without } from "./list_without.mjs";
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
import { app_learn_js_lesson_object_property_add } from "./app_learn_js_lesson_object_property_add.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_properties_add() {
  arguments_assert(arguments, 0);
  ("adding properties to an empty object: let counts = {}; counts.love = 2; counts.joy = 5; console.log(counts); writes out { love: 2, joy: 5 }");
  ("2026-11-16, at the human's asking - empty object, initialize properties: each line adds one more property, and they are written out in the order they were added.");
  ("A set is four questions, love and joy each set to a different number from 1 to 9, in either order, shuffled.");
  ("Reading forwards, the wrong answers are the numbers swapped, the properties the other way round, and only the second property. Reading backwards, the wrong programs set the two the other way round, set the same word twice, and swap the numbers; each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-16.");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function line_of(word, n) {
    let line = "counts." + word + " = " + n + ";";
    return line;
  }
  function program_with(first, a, second, b) {
    let v4 = line_of(first, a);
    let v5 = line_of(second, b);
    let lines = ["let counts = {};", v4, v5, "console.log(counts);"];
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "four programs, love first twice and joy first twice, shuffled";
    let codes = [];
    for (let first of ["love", "love", "joy", "joy"]) {
      let second = list_without(["love", "joy"], first)[0];
      let drawn = list_shuffle_take(numbers, 2);
      let v = program_with(first, drawn[0], second, drawn[1]);
      codes.push(v);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function parts_of(code) {
    "the two words and their numbers, read off the second and third lines";
    let lines = text_split_newline(code);
    let one = lines[1].match(/counts\.(\w+) = (\d+);/);
    let two = lines[2].match(/counts\.(\w+) = (\d+);/);
    let parts = {
      first: one[1],
      a: one[2],
      second: two[1],
      b: two[2],
    };
    return parts;
  }
  function object_text(first, a, second, b) {
    let text = "{ " + first + ": " + a + ", " + second + ": " + b + " }";
    return text;
  }
  function decoys(question, answer) {
    "numbers swapped, the other way round, only the second; each once, never the answer";
    let p = parts_of(question);
    let v1 = object_text(p.first, p.b, p.second, p.a);
    let v2 = object_text(p.second, p.b, p.first, p.a);
    let v3 = "{ " + p.second + ": " + p.b + " }";
    let candidates = [v1, v2, v3];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the other way round, the same word twice, numbers swapped; kept only when they write out something else";
    let p = parts_of(answer);
    let v1 = program_with(p.second, p.b, p.first, p.a);
    let v2 = program_with(p.first, p.a, p.first, p.b);
    let v3 = program_with(p.first, p.b, p.second, p.a);
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
    "adding one property remembered, then adding two";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_property_add,
      ["", "counts.joy = 4;", " adds ", "joy", " to an empty object"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Each line like that adds one more property:",
    ]);
    let code2 = program_with("love", 2, "joy", 5);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "love",
      " is added first, then ",
      "joy",
      ", so they are written out in that order",
    ]);
    app_learn_js_div_cycle_output(box_two, [
      "So ",
      "{ love: 2, joy: 5 }",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Adding properties to an empty object",
    "counts.love = 2;",
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
