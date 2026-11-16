import { less_than } from "./less_than.mjs";
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
import { app_learn_js_lesson_object_property_missing } from "./app_learn_js_lesson_object_property_missing.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_property_add() {
  arguments_assert(arguments, 0);
  ("adding a property to an empty object: let counts = {}; counts.joy = 4; console.log(counts); writes out { joy: 4 }");
  ("2026-11-16, at the human's asking - empty object, initialize property: setting a property that is not there yet makes it. Setting a property only changed one already there, and No property there showed a missing one is undefined; this puts the two together, ahead of Counting from an empty object, which sets counts[w] = 0 on an empty object.");
  ("A set is four questions, each one word of love, joy and peace set to a number from 1 to 9, shuffled. The whole object is written out, so the answer shows the property now there.");
  ("Reading forwards, the wrong answers are the object still empty, the number alone, and another word holding the number. Reading backwards, the wrong programs set another word, set another number, and compare with === which changes nothing; each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-16.");
  let words = ["love", "joy", "peace"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function program_with(line) {
    let lines = ["let counts = {};", line, "console.log(counts);"];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word, n) {
    let code = program_with("counts." + word + " = " + n + ";");
    return code;
  }
  function batch_get() {
    "four programs, each a word and a number of its own, shuffled";
    let list = words.concat(words);
    let drawn = list_shuffle_take(list, 4);
    let ns = list_shuffle_take(numbers, 4);
    let codes = [];
    for (let j = 0; less_than(j, 4); j++) {
      let v = program_of(drawn[j], ns[j]);
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
    "the word and the number, read off the second line";
    let lines = text_split_newline(code);
    let found = lines[1].match(/counts\.(\w+) = (\d+);/);
    let parts = {
      word: found[1],
      n: Number(found[2]),
    };
    return parts;
  }
  function other_of(word) {
    let other = list_without(words, word)[0];
    return other;
  }
  function decoys(question, answer) {
    "still empty, the number alone, another word holding it; each once, never the answer";
    let p = parts_of(question);
    let other = other_of(p.word);
    let v4 = String(p.n);
    let candidates = ["{}", v4, "{ " + other + ": " + p.n + " }"];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "another word, another number, === in place of =; kept only when they write out something else";
    let p = parts_of(answer);
    let other = other_of(p.word);
    let n_other = list_without(numbers, p.n)[0];
    let v1 = program_of(other, p.n);
    let v2 = program_of(p.word, n_other);
    let v3 = program_with("counts." + p.word + " === " + p.n + ";");
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
    "setting a property and a missing property remembered, then setting one that is not there";
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
      app_learn_js_lesson_object_property_missing,
      ["A property never set is ", "undefined"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "{}",
      " is an empty object. Setting a property that is not there yet adds it:",
    ]);
    let code2 = program_of("joy", 4);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "counts",
      " had no properties. Now it has ",
      "joy",
      ", which is ",
      "4",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "{ joy: 4 }",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Adding a property to an empty object",
    "counts.joy = 4;",
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
