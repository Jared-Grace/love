import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_without } from "./list_without.mjs";
import { equal } from "./equal.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_property_key } from "./app_learn_js_lesson_object_property_key.mjs";
import { app_learn_js_lesson_object_property_increment } from "./app_learn_js_lesson_object_property_increment.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_property_key_increment() {
  arguments_assert(arguments, 0);
  ('adding one to the property a name holds: let counts = { love: 2, joy: 5 }; let w = "joy"; counts[w]++; console.log(counts.love); console.log(counts.joy); writes out 2 and 6');
  ("2026-11-16, at the human's asking, the second of the counting run: counts.joy++ from Adding one to a property, with the property's name held in w, read as p[k] was in A property's name in a variable. Nothing in it is new; it is the line the word-counting loop needs.");
  ("A set is four questions, two numbers from 1 to 9 each, w holding love twice and joy twice, shuffled. Both properties are written out, so the question is which one changed.");
  ('Reading forwards, the wrong answers are both unchanged, the other one counted up, and both counted up. Reading backwards, the wrong programs count up counts["w"], a property named w, w++, which counts up the name and not the property, and w holding the other word; each is kept only if it writes out something other than the answer.');
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-16.");
  let words = ["love", "joy"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function program_with(love, joy, word, line) {
    let lines = [
      "let counts = { love: " + love + ", joy: " + joy + " };",
      'let w = "' + word + '";',
      line,
      "console.log(counts.love);",
      "console.log(counts.joy);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(love, joy, word) {
    let code = program_with(love, joy, word, "counts[w]++;");
    return code;
  }
  function batch_get() {
    "four programs, w holding love twice and joy twice, shuffled";
    let codes = [];
    for (let word of ["love", "love", "joy", "joy"]) {
      let drawn = list_shuffle_take(numbers, 2);
      let v = program_of(drawn[0], drawn[1], word);
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
    "the two starting numbers and the word w holds, read off the first two lines";
    let lines = text_split_newline(code);
    let start = lines[0].match(/love: (\d+), joy: (\d+)/);
    let held = lines[1].match(/"(\w+)"/);
    let parts = {
      love: Number(start[1]),
      joy: Number(start[2]),
      word: held[1],
    };
    return parts;
  }
  function other_of(word) {
    let other = list_without(words, word)[0];
    return other;
  }
  function decoys(question, answer) {
    "both unchanged, the other counted up, both counted up; each once, never the answer";
    let p = parts_of(question);
    let v4 = String(p.love);
    let v5 = String(p.joy);
    let unchanged = list_join_newline([v4, v5]);
    let other = other_of(p.word);
    let love_after = p.love;
    let joy_after = p.joy;
    if (equal(other, "love")) {
      love_after = love_after + 1;
    } else {
      joy_after = joy_after + 1;
    }
    let v6 = String(love_after);
    let v7 = String(joy_after);
    let other_up = list_join_newline([v6, v7]);
    let v8 = String(p.love + 1);
    let v9 = String(p.joy + 1);
    let both = list_join_newline([v8, v9]);
    let candidates = [unchanged, other_up, both];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    'counts["w"]++, w++, and w holding the other word; kept only when they write out something else';
    let p = parts_of(answer);
    let other = other_of(p.word);
    let v1 = program_with(p.love, p.joy, p.word, 'counts["w"]++;');
    let v2 = program_with(p.love, p.joy, p.word, "w++;");
    let v3 = program_of(p.love, p.joy, other);
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
    "p[k] and ++ on a property remembered, then ++ on the property a name holds";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_property_key,
      ["if ", "k", " is ", '"town"', ", then ", "p[k]", " means ", "p.town"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_property_increment,
      ["", "counts.joy++;", " adds one to ", "counts.joy"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Put together, ",
      "counts[w]++;",
      " adds one to the property ",
      "w",
      " names:",
    ]);
    let code2 = program_of(2, 5, "joy");
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "w",
      " is ",
      '"joy"',
      ", so ",
      "counts[w]++;",
      " means ",
      "counts.joy++;",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "2",
      ", then ",
      "6",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Adding one to the property a name holds",
    "counts[w]++;",
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
