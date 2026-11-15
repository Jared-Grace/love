import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_property_set } from "./app_learn_js_lesson_object_property_set.mjs";
import { app_learn_js_lesson_statement_name_increment } from "./app_learn_js_lesson_statement_name_increment.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_property_increment() {
  arguments_assert(arguments, 0);
  ("adding one to a property: let counts = { love: 2, joy: 5 }; counts.joy++; console.log(counts.love); console.log(counts.joy); writes out 2 and 6");
  ("2026-11-16, at the human's asking, the first of the counting run that puts p.a and p[k] to use: a property is counted up with ++ just as a name is. Next come counts[w]++, a loop counting words, and starting from {}.");
  ("A set is four questions, two numbers from 1 to 9 each, love counted up twice and joy twice, shuffled. Both properties are written out, so the question is which one changed.");
  ("Reading forwards, the wrong answers are both unchanged, the other one counted up, and both counted up. Reading backwards, the wrong programs count up the other one, count down with --, and write counts.joy + 1; which changes nothing; each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-16.");
  let words = ["love", "joy"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function program_with(love, joy, line) {
    let lines = [
      "let counts = { love: " + love + ", joy: " + joy + " };",
      line,
      "console.log(counts.love);",
      "console.log(counts.joy);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(love, joy, word) {
    let code = program_with(love, joy, "counts." + word + "++;");
    return code;
  }
  function batch_get() {
    "four programs, love counted up twice and joy twice, shuffled";
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
    "the two starting numbers and the word counted up, read off the first two lines";
    let lines = text_split_newline(code);
    let start = lines[0].match(/love: (\d+), joy: (\d+)/);
    let counted = lines[1].match(/counts\.(\w+)/);
    let parts = {
      love: Number(start[1]),
      joy: Number(start[2]),
      word: counted[1],
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
    "the other one counted up, counted down with --, and + 1 that changes nothing; kept only when they write out something else";
    let p = parts_of(answer);
    let other = other_of(p.word);
    let v1 = program_of(p.love, p.joy, other);
    let v2 = program_with(p.love, p.joy, "counts." + p.word + "--;");
    let v3 = program_with(p.love, p.joy, "counts." + p.word + " + 1;");
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
    "setting a property and ++ remembered, then ++ on a property";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_property_set,
      ["", 'p.name = "Abraham";', " sets the property named ", "name"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_statement_name_increment,
      ["", "a++;", " adds one to ", "a"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "++",
      " adds one to a property the same way:",
    ]);
    let code2 = program_of(2, 5, "joy");
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "counts.joy",
      " was ",
      "5",
      ", so it is now ",
      "6",
      ". ",
      "counts.love",
      " is not changed",
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
    "Adding one to a property",
    "counts.joy++;",
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
