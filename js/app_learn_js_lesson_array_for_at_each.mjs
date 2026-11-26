import { floor } from "./floor.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_at } from "./app_learn_js_lesson_array_for_at.mjs";
import { app_learn_js_lesson_array_for_push_if_e } from "./app_learn_js_lesson_array_for_push_if_e.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_at_each() {
  arguments_assert(arguments, 0);
  ('every index where an item is: let at = []; for (let i = 0; i < a.length; i++) { if (a[i] === "joy") { at.push(i); } } console.log(at);');
  ("2026-11-26, at the human's asking, just after Keeping the words with e. Where is joy, if anywhere? already keeps one index of joy, and Keeping the words with e already pushes inside an if; the new fact is pushing the index i rather than the item, so every place joy is gets kept. Not picked here: How many are the biggest?, offered beside it, which was not asked for.");
  ("Each input is five or six words, joy among them two or three times and the rest drawn from love, peace, hope, grace and faith, so the answer always has more than one index.");
  ('The wrong programs are: at.push(a[i]) (joy itself, each time), the loop starting at 1 (a joy at index 0 missed, so joy is put at index 0 in half the inputs), and a[i] !== "joy" (every index that is not joy). The loop counts up to a.length, so all stop. The other wrong answer offered is each index plus 1, counting the places from 1.');
  ("The writing is a first draft by Claude 2026-11-26.");
  let others = ["love", "peace", "hope", "grace", "faith"];
  function program_with(items, start, compare, pushed) {
    "the array, an empty at, the loop pushing when compare is true, and at written out";
    function lambda(w) {
      let r = '"' + w + '"';
      return r;
    }
    let quoted = list_map(items, lambda);
    let lines = [
      "let a = [" + quoted.join(", ") + "];",
      "let at = [];",
      "for (let i = " + start + "; i < a.length; i++) {",
      "  if (a[i] " + compare + ' "joy") {',
      "    at.push(" + pushed + ");",
      "  }",
      "}",
      "console.log(at);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, 0, "===", "i");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, 0, "===", "a[i]");
    let v2 = program_with(items3, 1, "===", "i");
    let v3 = program_with(items3, 0, "!==", "i");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let places = [];
    for (let k = 0; less_than(k, items4.length); k++) {
      if (equal(items4[k], "joy")) {
        places.push(k + 1);
      }
    }
    let outputs = ["[" + places.join(", ") + "]"];
    return outputs;
  }
  function input_drawn(shape) {
    "count words, joys of them at random places, joy first when asked";
    let count = shape[0];
    let joys = shape[1];
    let first = shape[2];
    function lambda2() {
      let left = Math.random();
      let p3 = multiply(left, others.length);
      let r2 = others[floor(p3)];
      return r2;
    }
    let list = new Array(count).fill(0);
    let items5 = list_map(list, lambda2);
    let places2 = [];
    if (first) {
      places2.push(0);
    }
    while (less_than(places2.length, joys)) {
      let left2 = Math.random();
      let p4 = multiply(left2, count);
      let p = floor(p4);
      let b = places2.includes(p);
      if (not(b) && (first || not_equal(p, 0))) {
        places2.push(p);
      }
    }
    for (let p2 of places2) {
      items5[p2] = "joy";
    }
    return items5;
  }
  function inputs_get() {
    "six arrays of five or six words, two or three joys, joy first in three";
    let shapes = [
      [5, 2, true],
      [5, 2, false],
      [5, 3, true],
      [6, 2, false],
      [6, 3, true],
      [6, 3, false],
    ];
    let inputs = list_map(shapes, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "one index kept and pushing inside an if remembered, then every index of joy pushed";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_at,
      ["", "at = i;", " keeps the index where ", "joy", " is"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_push_if_e,
      [
        "",
        "b.push(a[i]);",
        " inside the ",
        "if",
        " keeps only the words the ",
        "if",
        " picks",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Push ",
      "i",
      ", not ",
      "a[i]",
      ", to keep every index where ",
      "joy",
      " is:",
    ]);
    let code3 = program_of(["joy", "peace", "joy", "hope", "joy"]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "joy",
      " is at ",
      "0",
      ", ",
      "2",
      " and ",
      "4",
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where is each joy?",
    "at.push(i);",
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
