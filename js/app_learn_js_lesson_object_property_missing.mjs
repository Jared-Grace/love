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
import { app_learn_js_lesson_array_index_past_end } from "./app_learn_js_lesson_array_index_past_end.mjs";
import { app_learn_js_lesson_object_property } from "./app_learn_js_lesson_object_property.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_property_missing() {
  arguments_assert(arguments, 0);
  ("no property there: let counts = { joy: 2 }; console.log(counts.joy); console.log(counts.love); writes out 2 and undefined");
  ("2026-11-16, at the human's asking, the fourth of the counting run: before counting from {}, a property never set reads as undefined, as an item past the end of an array does in No item there. That is what the counting loop asks about before it counts up a word for the first time.");
  ("A set is four questions, one property set to a number from 1 to 9, joy set twice and love twice, shuffled. The property set is written out first, then the one never set.");
  ('Reading forwards, the wrong answers are 0, null, and the number again, in place of undefined. Reading backwards, the wrong programs write out the property set twice, write out the word "love" itself, and set the missing property to 0; each is kept only if it writes out something other than the answer.');
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-16.");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function other_of(word) {
    let other = list_without(["love", "joy"], word)[0];
    return other;
  }
  function program_with(head, first, second) {
    let lines = [
      head,
      "console.log(" + first + ");",
      "console.log(" + second + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word, n) {
    let other = other_of(word);
    let code = program_with(
      "let counts = { " + word + ": " + n + " };",
      "counts." + word,
      "counts." + other,
    );
    return code;
  }
  function batch_get() {
    "four programs, joy set twice and love twice, shuffled";
    let codes = [];
    for (let word of ["love", "love", "joy", "joy"]) {
      let n = list_shuffle_take(numbers, 1)[0];
      let v = program_of(word, n);
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
    "the word set and its number, read off the first line";
    let lines = text_split_newline(code);
    let set = lines[0].match(/\{ (\w+): (\d+) \}/);
    let parts = {
      word: set[1],
      n: Number(set[2]),
    };
    return parts;
  }
  function decoys(question, answer) {
    "0, null, and the number again in place of undefined; each once, never the answer";
    let p = parts_of(question);
    let n = String(p.n);
    let joined = list_join_newline([n, "0"]);
    let joined2 = list_join_newline([n, "null"]);
    let joined3 = list_join_newline([n, n]);
    let candidates = [joined, joined2, joined3];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the property set written out twice, the word itself in quotes, the missing property set to 0; kept only when they write out something else";
    let p = parts_of(answer);
    let other = other_of(p.word);
    let head = "let counts = { " + p.word + ": " + p.n + " };";
    let v1 = program_with(head, "counts." + p.word, "counts." + p.word);
    let v2 = program_with(head, "counts." + p.word, '"' + other + '"');
    let v3 = program_with(
      "let counts = { " + p.word + ": " + p.n + ", " + other + ": 0 };",
      "counts." + p.word,
      "counts." + other,
    );
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
    "an item past the end and reading a property remembered, then a property never set";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_index_past_end,
      ["An item past the end of an array is ", "undefined"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_property,
      ["", "p.name", " reads the property named ", "name"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "A property never set is ",
      "undefined",
      " too:",
    ]);
    let code2 = program_of("joy", 2);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "counts",
      " has a property named ",
      "joy",
      ", but none named ",
      "love",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "2",
      ", then ",
      "undefined",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "No property there",
    "counts.love",
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
