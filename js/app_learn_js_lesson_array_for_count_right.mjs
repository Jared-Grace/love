import { floor } from "./floor.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_pair } from "./app_learn_js_lesson_array_for_pair.mjs";
import { app_learn_js_lesson_array_for_count } from "./app_learn_js_lesson_array_for_count.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_count_right() {
  arguments_assert(arguments, 0);
  ("how many answers match a key: let right = 0; for (let i = 0; i < key.length; i++) { if (answers[i] === key[i]) { right++; } } console.log(right);");
  ("2026-11-26, at the human's asking, just after the side by side lessons. Two arrays side by side already reads a[i] and b[i] at the same i, and How many joys? already counts with count++; the new fact is comparing the two at the same i and counting the matches, as marking a test against its key does. Are they the same? compares the same way but only says true or false.");
  ("Each input is a key of four or five letters from a to d, and answers that match it in some places and not others, never all and never none.");
  ("The wrong programs are: answers[i] === key[0] (every answer marked against the first), let right = 1 (one too many), and !== (the wrong answers counted). The loop counts up to key.length, so all stop. The other wrong answer offered is key.length, as if every answer were right.");
  ("The writing is a first draft by Claude 2026-11-26.");
  let letters = ["a", "b", "c", "d"];
  function quoted(list) {
    function lambda(w) {
      let r = '"' + w + '"';
      return r;
    }
    let text = "[" + list_map(list, lambda).join(", ") + "]";
    return text;
  }
  function program_with(pair, start, compare, against) {
    "the key, the answers, right set to start, the loop counting when compare is true, and right written out";
    let lines = [
      "let key = " + quoted(pair[0]) + ";",
      "let answers = " + quoted(pair[1]) + ";",
      "let right = " + start + ";",
      "for (let i = 0; i < key.length; i++) {",
      "  if (answers[i] " + compare + " " + against + ") {",
      "    right++;",
      "  }",
      "}",
      "console.log(right);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(pair2) {
    let code2 = program_with(pair2, 0, "===", "key[i]");
    return code2;
  }
  function wrong_programs_of(pair3) {
    let v = program_with(pair3, 0, "===", "key[0]");
    let v2 = program_with(pair3, 1, "===", "key[i]");
    let v3 = program_with(pair3, 0, "!==", "key[i]");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(pair4) {
    let v4 = String(pair4[0].length);
    let outputs = [v4];
    return outputs;
  }
  function letter() {
    let left = Math.random();
    let p = multiply(left, letters.length);
    let l = letters[floor(p)];
    return l;
  }
  function other_letter(l2) {
    let o = letter();
    while (equal(o, l2)) {
      o = letter();
    }
    return o;
  }
  function score(pair5) {
    let s = 0;
    for (let k = 0; less_than(k, pair5[0].length); k++) {
      if (equal(pair5[0][k], pair5[1][k])) {
        s++;
      }
    }
    return s;
  }
  function fits(pair6) {
    let s2 = score(pair6);
    let n = pair6[0].length;
    function lambda2(a) {
      let eq = equal(a, pair6[0][0]);
      return eq;
    }
    let firsts = pair6[1].filter(lambda2).length;
    let r2 =
      greater_than(s2, 0) &&
      less_than(s2, n) &&
      not_equal(multiply(s2, 2), n) &&
      not_equal(firsts, s2);
    return r2;
  }
  function draw(count) {
    let list2 = new Array(count).fill(0);
    let key = list_map(list2, letter);
    function lambda3(k2) {
      let a2 = Math.random();
      let r3 = less_than(a2, 0.5) ? k2 : other_letter(k2);
      return r3;
    }
    let answers = list_map(key, lambda3);
    let r4 = [key, answers];
    return r4;
  }
  function input_drawn(count2) {
    "a key and answers, drawn again until some but not all match and the wrong programs differ";
    let pair7 = draw(count2);
    while (not(fits(pair7))) {
      pair7 = draw(count2);
    }
    return pair7;
  }
  function inputs_get() {
    "six keys, of four and five letters three times each";
    let counts = [4, 4, 4, 5, 5, 5];
    let inputs = list_map(counts, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "two arrays at the same i and counting remembered, then the answers that match the key counted";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_pair,
      [
        "",
        "a[i]",
        " and ",
        "b[i]",
        " are the items at the same place in two arrays",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_count,
      [
        "",
        "count++;",
        " in the ",
        "if",
        " counts each time the ",
        "if",
        " is ",
        "true",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "key",
      " holds the right answers to a test",
      "",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Count each place where ",
      "answers[i]",
      " is ",
      "key[i]",
      ":",
    ]);
    let code3 = program_of([
      ["b", "a", "c", "a"],
      ["b", "c", "c", "a"],
    ]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "Only at ",
      "1",
      " is the answer ",
      '"c"',
      " not the key's ",
      '"a"',
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "How many answers are right?",
    "if (answers[i] === key[i])",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
