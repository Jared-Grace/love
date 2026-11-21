import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_same_generic(
  name_id,
  above,
  right,
  relate,
  example_input,
) {
  arguments_assert(arguments, 5);
  ("above draws the lesson's own boxes and hands back the box the example goes in; example_input is the [a, b] of that example.");
  ("a lesson asking whether a second array b is as long as a and each item of b is right, where right is the code each b[i] must equal, as a[i] or a[i] + 1, and relate makes that item from an item of a. Shared by the three lessons of 2026-11-21 that compare two arrays: the same, one more, and double.");
  ("A set is six questions: two where b is right, two where b has one item too many, and two where the middle item of b is one too big, shuffled. b is longer, never shorter, because a loop over a.length reads past the end of a shorter b and finds it different anyway, so only a longer b shows why the length is asked.");
  ("The wrong programs are let same = true; (no length check, so a longer b says true), an else setting same back to true (only the last item decides), and === in place of !== (true only when nothing matches).");
  function program_with(input, start, test, with_else) {
    "let a = items; let b = items; let same = start; for (let i = 0; i < a.length; i++) { if (test) { same = false; } else { same = true; } } console.log(same);";
    let a = list_get(input, 0);
    let b = list_get(input, 1);
    let head = [
      "let a = " + js_code_array(a) + ";",
      "let b = " + js_code_array(b) + ";",
      "let same = " + start + ";",
      "for (let i = 0; i < a.length; i++) {",
      "  if (" + test + ") {",
      "    same = false;",
    ];
    let middle = [];
    if (with_else) {
      middle = ["  } else {", "    same = true;"];
    }
    let tail = ["  }", "}", "console.log(same);"];
    let a3 = list_concat(head, middle);
    let lines = list_concat(a3, tail);
    let code = list_join_newline(lines);
    return code;
  }
  let length_check = "a.length === b.length";
  let differs = "b[i] !== " + right;
  function program_of(input2) {
    let code2 = program_with(input2, length_check, differs, false);
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "true", differs, false);
    let v2 = program_with(input3, length_check, differs, true);
    let v3 = program_with(input3, length_check, "b[i] === " + right, false);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "two right, two one item too many, two with the middle item one too big, shuffled";
    let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let inputs = [];
    for (let kind of ["right", "right", "longer", "longer", "wrong", "wrong"]) {
      let a2 = list_shuffle_take(pool, 3);
      let b2 = list_map(a2, relate);
      if (equal(kind, "longer")) {
        let extra = list_shuffle_take(pool, 1);
        b2 = list_concat(b2, extra);
      }
      if (equal(kind, "wrong")) {
        let middle2 = list_get(b2, 1);
        let item = list_get(b2, 0);
        let item2 = list_get(b2, 2);
        b2 = [item, middle2 + 1, item2];
      }
      inputs.push([a2, b2]);
    }
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above_example(root, context) {
    "the lesson's own boxes, then the example program written into the last of them";
    let box = above(root, context);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box, lines2, value);
  }
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above: above_example,
    inputs_get,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
