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
import { app_learn_js_lesson_object_property_missing } from "./app_learn_js_lesson_object_property_missing.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_has_own() {
  arguments_assert(arguments, 0);
  ('asking whether an object has a property: let counts = { joy: 2 }; console.log(Object.hasOwn(counts, "love")); console.log(Object.hasOwn(counts, "joy")); writes out false and true');
  ("2026-11-16, at the human's asking - teach Object.hasOwn from the start: before counting from {}, the check whether a word has a property yet. Object.hasOwn is taught rather than === undefined because it answers the question asked: a property set to undefined is still there, and a word such as constructor reads as something on every object without being one of its own properties, so === undefined would count it wrong.");
  ("A set is four questions, one property set to a number from 1 to 9, joy set twice and love twice, each asked about the property set first once and about the one never set first once, shuffled.");
  ("Reading forwards, the wrong answers are the two the other way round, true twice and false twice. Reading backwards, the wrong programs ask about the same property twice, read counts.love in place of asking, and set the other property too; each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-16.");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function other_of(word) {
    let other = list_without(["love", "joy"], word)[0];
    return other;
  }
  function has_own_of(name) {
    let text = 'Object.hasOwn(counts, "' + name + '")';
    return text;
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
  function head_of(word, n) {
    let head = "let counts = { " + word + ": " + n + " };";
    return head;
  }
  function program_of(word, n, asked) {
    let other = list_without(["love", "joy"], asked)[0];
    let v4 = head_of(word, n);
    let v5 = has_own_of(asked);
    let v6 = has_own_of(other);
    let code = program_with(v4, v5, v6);
    return code;
  }
  function batch_get() {
    "four programs, joy set twice and love twice, each asked about first once and the other first once, shuffled";
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
    "the word set and its number, read off the first line, and the property asked about first, off the second";
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
    "the two the other way round, true twice, false twice; each once, never the answer";
    let joined = list_join_newline(["true", "false"]);
    let joined2 = list_join_newline(["false", "true"]);
    let joined3 = list_join_newline(["true", "true"]);
    let joined4 = list_join_newline(["false", "false"]);
    let candidates = [joined, joined2, joined3, joined4];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same property asked about twice, counts.love read in place of asking, the other property set too; kept only when they write out something else";
    let p = parts_of(answer);
    let other = other_of(p.asked);
    let head = head_of(p.word, p.n);
    let v7 = has_own_of(p.asked);
    let v8 = has_own_of(p.asked);
    let v1 = program_with(head, v7, v8);
    let v2 = program_with(head, "counts." + p.asked, "counts." + other);
    let v9 = has_own_of(p.asked);
    let v10 = has_own_of(other);
    let v3 = program_with(
      "let counts = { " +
        p.word +
        ": " +
        p.n +
        ", " +
        other_of(p.word) +
        ": 0 };",
      v9,
      v10,
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
    "a property never set remembered, then asking whether an object has a property";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_property_missing,
      ["A property never set is ", "undefined"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      'Object.hasOwn(counts, "joy")',
      " asks whether ",
      "counts",
      " has a property named ",
      "joy",
      ":",
    ]);
    let code2 = program_of("joy", 2, "love");
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "counts",
      " has no property named ",
      "love",
      ", but has one named ",
      "joy",
    ]);
    app_learn_js_div_cycle_output(box_two, [
      "So ",
      "false",
      ", then ",
      "true",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Does an object have a property",
    'Object.hasOwn(counts, "joy")',
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
