import { floor } from "./floor.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_unique } from "./app_learn_js_lesson_array_for_unique.mjs";
import { app_learn_js_lesson_array_for_break } from "./app_learn_js_lesson_array_for_break.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_seen_twice() {
  arguments_assert(arguments, 0);
  ("the first number seen a second time: if (seen.includes(a[i])) { console.log(a[i]); break; } then seen.push(a[i]);");
  ("2026-11-26, at the human's asking, just after Each item once. Each item once already keeps an array of what was met and asks includes of it, and Stop at the first joy already stops a loop with break; the new fact is asking before pushing, so a number is only found in seen when it was met before. Unlike A word twice in a row?, the second time need not be next to the first.");
  ("Each input is five or six numbers from 1 to 7, drawn again until some number comes twice and the first one met twice is not a[0], so pushing before the if gives another answer.");
  ("The wrong programs are: seen.push(a[i]) before the if (a[0] finds itself), no break (every number met again is written out), and console.log(i) (the index, not the number). The loop counts up to a.length, so all stop. The other wrong answer offered is the repeated number that came first in a, which is not always the first one met twice.");
  ("The writing is a first draft by Claude 2026-11-26.");
  function program_with(items, push_first, logged, stops) {
    "the array, an empty seen, the loop asking seen before or after pushing, and the number found";
    let push_line = "  seen.push(a[i]);";
    let if_lines = [
      "  if (seen.includes(a[i])) {",
      "    console.log(" + logged + ");",
    ]
      .concat(stops ? ["    break;"] : [])
      .concat(["  }"]);
    let body = push_first
      ? [push_line].concat(if_lines)
      : if_lines.concat([push_line]);
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let seen = [];",
      "for (let i = 0; i < a.length; i++) {",
    ]
      .concat(body)
      .concat(["}"]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, false, "a[i]", true);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, true, "a[i]", true);
    let v2 = program_with(items3, false, "a[i]", false);
    let v3 = program_with(items3, false, "i", true);
    let programs = [v, v2, v3];
    return programs;
  }
  function first_twice(items4) {
    let met = [];
    for (let x of items4) {
      if (met.includes(x)) {
        return x;
      }
      met.push(x);
    }
    return null;
  }
  function wrong_outputs_of(items5) {
    function lambda(x, k) {
      let left = items5.indexOf(x);
      let neq = not_equal(left, k);
      return neq;
    }
    let repeated = items5.filter(lambda);
    function lambda2(x) {
      let r = repeated.includes(x);
      return r;
    }
    let earliest = items5.find(lambda2);
    let v4 = String(earliest);
    let outputs = [v4];
    return outputs;
  }
  function draw(count) {
    let items6 = [];
    for (let k = 0; less_than(k, count); k++) {
      let left2 = Math.random();
      let p = multiply(left2, 7);
      items6.push(1 + floor(p));
    }
    return items6;
  }
  function input_drawn(count) {
    "count numbers from 1 to 7, drawn again until one comes twice and it is not a[0]";
    let items7 = draw(count);
    while (
      equal(first_twice(items7), null) ||
      equal(first_twice(items7), items7[0])
    ) {
      items7 = draw(count);
    }
    return items7;
  }
  function inputs_get() {
    "six arrays, of five and six numbers three times each";
    let counts = [5, 5, 5, 6, 6, 6];
    let inputs = list_map(counts, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "includes on an array being built and break remembered, then the first number seen twice";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_unique,
      ["", "b.includes(x)", " is ", "true", " when ", "x", " is in ", "b"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_break,
      ["", "break;", " stops a loop", ""],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      ["", "seen", " holds every number met so far", ""],
      [
        "If ",
        "a[i]",
        " is already in ",
        "seen",
        ", it is met a second time",
        "",
      ],
      ["Ask first, then push:"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of([4, 2, 7, 2, 4]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    let lines_said2 = [
      ["", "4", " comes first, but ", "2", " is met a second time first", ""],
    ];
    for (let said2 of lines_said2) {
      app_learn_js_div_cycle_code(box_three, said2);
    }
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "First number seen twice",
    "if (seen.includes(a[i]))",
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
