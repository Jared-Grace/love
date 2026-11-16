import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { less_than } from "./less_than.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { json_from } from "./json_from.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_count_words_for } from "./app_learn_js_lesson_object_count_words_for.mjs";
import { app_learn_js_lesson_object_has_own_set } from "./app_learn_js_lesson_object_has_own_set.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_count_words_empty() {
  arguments_assert(arguments, 0);
  ('counting words from an empty object: let counts = {}; a for loop over ["joy", "love", "joy"] that sets counts[w] to 0 when !Object.hasOwn(counts, w), then does counts[w]++; console.log(counts); writes out { joy: 2, love: 1 }');
  ("2026-11-16, at the human's asking, the last of the counting run: the loop of Counting words with a loop, started from {} so no word has to be known before it is counted. A word's first time, counts has no property for it, as Setting a property only if it is missing showed, so it is set to 0 first. Since 2026-11-16 the check is !Object.hasOwn(counts, w) in place of counts[w] === undefined, at the human's asking - teach Object.hasOwn from the start: a word such as constructor reads as something on every object, so === undefined counts it as NaN. The whole object is written out, as in Writing out a whole object.");
  ("A set is four questions, each three to five words drawn from love and joy, both in it and never as many of one as of the other. The properties are made in the order the words first come, which is the order they are written out in.");
  ("Reading forwards, the wrong answers are the counts swapped, the properties the other way round, and NaN for both, which is what counting up undefined gives. Reading backwards, the wrong programs leave out the check, set a new word to 1 before counting it up, and leave out the !; each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-16.");
  function program_with(words, check_lines) {
    let codes = list_map(words, json_to);
    let lines = [
      "let counts = {};",
      "let words = " + js_code_array(codes) + ";",
      "for (let i = 0; i < words.length; i++) {",
      "  let w = words[i];",
    ]
      .concat(check_lines)
      .concat(["  counts[w]++;", "}", "console.log(counts);"]);
    let code = list_join_newline(lines);
    return code;
  }
  function check_of(not_text, start) {
    let lines = [
      "  if (" + not_text + "Object.hasOwn(counts, w)) {",
      "    counts[w] = " + start + ";",
      "  }",
    ];
    return lines;
  }
  function program_of(words) {
    let v = check_of("!", "0");
    let code = program_with(words, v);
    return code;
  }
  function count_of(words, word) {
    function same(w) {
      let eq = equal(w, word);
      return eq;
    }
    let n = list_filter(words, same).length;
    return n;
  }
  function words_draw() {
    "three to five words from love and joy, both there, never as many of one as the other";
    let size = list_shuffle_take([3, 4, 5], 1)[0];
    let words = [];
    for (let j = 0; less_than(j, size); j++) {
      words.push(list_shuffle_take(["love", "joy"], 1)[0]);
    }
    let love = count_of(words, "love");
    let joy = count_of(words, "joy");
    if (equal(love, joy) || equal(love, 0) || equal(joy, 0)) {
      let again = words_draw();
      return again;
    }
    return words;
  }
  function batch_get() {
    "four programs, each its own words";
    let codes = [];
    for (let j = 0; less_than(j, 4); j++) {
      let v4 = words_draw();
      let v5 = program_of(v4);
      codes.push(v5);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function words_of(code) {
    "the words array, read off the program's second line";
    let lines = text_split_newline(code);
    let line = lines[1];
    let v6 = line.lastIndexOf(";");
    let after = line.slice(line.indexOf("=") + 1, v6);
    let words = json_from(after);
    return words;
  }
  function object_text(first, first_value, second, second_value) {
    let text =
      "{ " +
      first +
      ": " +
      first_value +
      ", " +
      second +
      ": " +
      second_value +
      " }";
    return text;
  }
  function decoys(question, answer) {
    "the counts swapped, the properties the other way round, NaN for both; each once, never the answer";
    let words = words_of(question);
    let first = words[0];
    let second = list_without(["love", "joy"], first)[0];
    let v7 = count_of(words, first);
    let a = String(v7);
    let v8 = count_of(words, second);
    let b = String(v8);
    let v9 = object_text(first, b, second, a);
    let v10 = object_text(second, b, first, a);
    let v11 = object_text(first, "NaN", second, "NaN");
    let candidates = [v9, v10, v11];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "no check, a new word set to 1, no !; kept only when they write out something else";
    let words = words_of(answer);
    let v1 = program_with(words, []);
    let v12 = check_of("!", "1");
    let v2 = program_with(words, v12);
    let v13 = check_of("", "0");
    let v3 = program_with(words, v13);
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
    "counting words and a property never set remembered, then counting from an empty object";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_count_words_for,
      ["A loop doing ", "counts[w]++;", " counts how often each word comes"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_has_own_set,
      [
        "",
        '!Object.hasOwn(counts, "love")',
        " sets ",
        "love",
        " only if it is not there yet",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Starting from ",
      "{}",
      ", a word's first time ",
      "counts",
      " has no property for it, so it is set to ",
      "0",
      " before it is counted up:",
    ]);
    let code2 = program_of(["joy", "love", "joy"]);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      '"joy"',
      " comes first, so ",
      "joy",
      " is made first, then ",
      "love",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "{ joy: 2, love: 1 }",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Counting from an empty object",
    "!Object.hasOwn(counts, w)",
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
