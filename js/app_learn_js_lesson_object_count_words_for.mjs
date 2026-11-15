import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
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
import { app_learn_js_lesson_object_property_keys_for } from "./app_learn_js_lesson_object_property_keys_for.mjs";
import { app_learn_js_lesson_object_property_key_increment } from "./app_learn_js_lesson_object_property_key_increment.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_count_words_for() {
  arguments_assert(arguments, 0);
  ('counting words with a loop: let counts = { love: 0, joy: 0 }; let words = ["joy", "love", "joy"]; a for loop setting w to words[i] and doing counts[w]++; then writing out counts.love and counts.joy writes out 1 and 2');
  ("2026-11-16, at the human's asking, the third of the counting run: the loop of Reading every property with a loop, with the line of Adding one to the property a name holds inside it. Nothing in it is new; together they count how often each word comes.");
  ("A set is four questions, each three to five words drawn from love and joy, never as many of one as of the other, so the counts swapped are always wrong. The counts start at 0, so no property is missing yet; starting from {} comes next.");
  ('Reading forwards, the wrong answers are the two counts swapped, both still 0, and both the number of words. Reading backwards, the wrong programs count up counts["w"], stop one word early, and start at the second word; each is kept only if it writes out something other than the answer.');
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-16.");
  function program_with(words, start, condition, line) {
    let codes = list_map(words, json_to);
    let lines = [
      "let counts = { love: 0, joy: 0 };",
      "let words = " + js_code_array(codes) + ";",
      "for (let i = " + start + "; " + condition + "; i++) {",
      "  let w = words[i];",
      "  " + line,
      "}",
      "console.log(counts.love);",
      "console.log(counts.joy);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(words) {
    let code = program_with(words, "0", "i < words.length", "counts[w]++;");
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
    "three to five words from love and joy, never as many of one as the other";
    let size = list_shuffle_take([3, 4, 5], 1)[0];
    let words = [];
    for (let j = 0; less_than(j, size); j++) {
      words.push(list_shuffle_take(["love", "joy"], 1)[0]);
    }
    let left = count_of(words, "love");
    let right = count_of(words, "joy");
    if (equal(left, right)) {
      let again = words_draw();
      return again;
    }
    return words;
  }
  function batch_get() {
    "four programs, each its own words";
    let codes = [];
    for (let j = 0; less_than(j, 4); j++) {
      let v = words_draw();
      let v4 = program_of(v);
      codes.push(v4);
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
    let v5 = line.lastIndexOf(";");
    let after = line.slice(line.indexOf("=") + 1, v5);
    let words = json_from(after);
    return words;
  }
  function decoys(question, answer) {
    "the counts swapped, both 0, both the number of words; each once, never the answer";
    let words = words_of(question);
    let love = count_of(words, "love");
    let joy = count_of(words, "joy");
    let v6 = String(joy);
    let v7 = String(love);
    let swapped = list_join_newline([v6, v7]);
    let zero = list_join_newline(["0", "0"]);
    let size = String(words.length);
    let all = list_join_newline([size, size]);
    let candidates = [swapped, zero, all];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    'counts["w"]++, one word early, from the second word; kept only when they write out something else';
    let words = words_of(answer);
    let v1 = program_with(words, "0", "i < words.length", 'counts["w"]++;');
    let v2 = program_with(words, "0", "i < words.length - 1", "counts[w]++;");
    let v3 = program_with(words, "1", "i < words.length", "counts[w]++;");
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
    "the loop over names and counts[w]++ remembered, then the two put together to count words";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_property_keys_for,
      ["A loop can hand ", "k", " each name in an array in turn"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_property_key_increment,
      ["", "counts[w]++;", " adds one to the property ", "w", " names"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Put together, a loop counts how often each word comes:",
    ]);
    let code2 = program_of(["joy", "love", "joy"]);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "w",
      " is ",
      '"joy"',
      ", then ",
      '"love"',
      ", then ",
      '"joy"',
      ", so ",
      "counts.joy",
      " is counted up twice and ",
      "counts.love",
      " once",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "1",
      ", then ",
      "2",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Counting words with a loop",
    "let w = words[i];",
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
