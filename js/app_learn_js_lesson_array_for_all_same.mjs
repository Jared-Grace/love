import { floor } from "./floor.mjs";
import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_found } from "./app_learn_js_lesson_array_for_found.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_all_same() {
  arguments_assert(arguments, 0);
  ("whether every item is the same: let same = true; for (let i = 0; i < a.length; i++) { if (a[i] !== a[0]) { same = false; } } console.log(same);");
  ("2026-11-26, at the human's asking, just before Are they in order?, which sets a value false the same way but compares each item with the next. Is joy here? already has an if that only ever sets a value one way; the new fact is starting it true and looking for one item that makes it false, comparing each item with a[0].");
  ("Each input is four or five numbers from 1 to 9: two all the same, two with only the last one different, and two with one in the middle different, so stopping before the last item gives another answer.");
  ("The wrong programs are: a[i] === a[0] (a[0] is always a[0], so false), i < a.length - 1 (the last item never asked), and let same = false (never set true). The loop counts up to a.length, so all stop. The answers are only true and false, so each question offers the other one.");
  ("The writing is a first draft by Claude 2026-11-26.");
  function program_with(items, start, compare, stop) {
    "the array, same set to start, the loop setting same false when compare, and same written out";
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let same = " + start + ";",
      "for (let i = 0; " + stop + "; i++) {",
      "  if (a[i] " + compare + " a[0]) {",
      "    same = false;",
      "  }",
      "}",
      "console.log(same);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let to_end = "i < a.length";
  function program_of(items2) {
    let code2 = program_with(items2, "true", "!==", to_end);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "true", "===", to_end);
    let v2 = program_with(items3, "true", "!==", "i < a.length - 1");
    let v3 = program_with(items3, "false", "!==", to_end);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    function lambda(x) {
      let eq = equal(x, items4[0]);
      return eq;
    }
    let all = items4.every(lambda);
    let n = not(all);
    let v4 = String(n);
    let outputs = [v4];
    return outputs;
  }
  function digit() {
    let left = Math.random();
    let p = multiply(left, 9);
    let d = 1 + floor(p);
    return d;
  }
  function other_than(d2) {
    let o = digit();
    while (equal(o, d2)) {
      o = digit();
    }
    return o;
  }
  function input_drawn(kind) {
    "four or five of one number, then none, the last, or a middle one changed";
    let left2 = Math.random();
    let p2 = multiply(left2, 2);
    let count = 4 + floor(p2);
    let d3 = digit();
    function lambda2() {
      return d3;
    }
    let list = new Array(count).fill(0);
    let items5 = list_map(list, lambda2);
    if (equal(kind, "last")) {
      items5[subtract(count, 1)] = other_than(d3);
    }
    if (equal(kind, "middle")) {
      let left3 = Math.random();
      let right = subtract(count, 2);
      let p3 = multiply(left3, right);
      let at = 1 + floor(p3);
      items5[at] = other_than(d3);
    }
    return items5;
  }
  function inputs_get() {
    "six arrays: two the same, two with the last changed, two with a middle one changed";
    let kinds = ["same", "last", "middle", "same", "last", "middle"];
    let inputs = list_map(kinds, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "an if that sets a value one way remembered, then same for an array all alike and one not";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_found,
      [
        "a value the ",
        "if",
        " only ever sets one way, as ",
        "found = true;",
        ", says after the loop whether the ",
        "if",
        " was ever ",
        "true",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    let lines_said = [
      ["Start with ", "same", " as ", "true", ""],
      ["One item that is not ", "a[0]", " makes it ", "false", ":"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_two, said);
    }
    for (let items6 of [
      [5, 5, 5, 5],
      [5, 5, 8, 5],
    ]) {
      let code3 = program_of(items6);
      let lines2 = text_split_newline(code3);
      let value = eval_console_log_lines(code3);
      app_learn_js_code_lines_writes_out(box_two, lines2, value);
    }
    app_learn_js_div_cycle_code(box_two, [
      "",
      "8",
      " is not ",
      "5",
      ", so ",
      "same",
      " becomes ",
      "false",
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "All the same?",
    "if (a[i] !== a[0])",
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
