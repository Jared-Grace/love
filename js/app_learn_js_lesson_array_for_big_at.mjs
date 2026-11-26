import { list_includes_not } from "./list_includes_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_biggest } from "./app_learn_js_lesson_array_for_biggest.mjs";
import { app_learn_js_lesson_array_for_small_at } from "./app_learn_js_lesson_array_for_small_at.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_big_at() {
  arguments_assert(arguments, 0);
  ("where the biggest item of an array is: let big = 0; let at = 0; for (let i = 0; i < a.length; i++) { if (a[i] > big) { big = a[i]; at = i; } } console.log(at); writes out 2 for [3, 5, 8, 6]");
  ("2026-11-25, at the human's asking (item 4 of the array lessons offered that day). Where is the smallest? turned around: the same at = i; inside the if, kept with big as Biggest number kept it. Nothing in it is new.");
  ("The arrays hold different numbers 1 to 9, 3 to 5 numbers long. An array is kept only when every wrong program writes out something other than the answer, so the biggest number is never first or last, and never at its own index.");
  ("The wrong programs are: at = i; after the if (the last index), writing out big (the number, not where it is), no at = i; at all (at stays 0) and < in place of > (nothing is smaller than 0, so at stays 0).");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [3, 5, 8, 6];
  let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function program_with(items, condition, inside, after, logged) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let lines = [
      "let a = " + array + ";",
      "let big = 0;",
      "let at = 0;",
      "for (let i = 0; i < a.length; i++) {",
      "  if (" + condition + ") {",
    ];
    for (let line of inside) {
      lines.push("    " + line);
    }
    lines.push("  }");
    for (let line2 of after) {
      lines.push("  " + line2);
    }
    lines.push("}");
    lines.push("console.log(" + logged + ");");
    let code = list_join_newline(lines);
    return code;
  }
  let bigger = "a[i] > big";
  let both = ["big = a[i];", "at = i;"];
  function program_of(items2) {
    let code2 = program_with(items2, bigger, both, [], "at");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, bigger, ["big = a[i];"], ["at = i;"], "at");
    let v2 = program_with(items3, bigger, both, [], "big");
    let v3 = program_with(items3, bigger, ["big = a[i];"], [], "at");
    let v4 = program_with(items3, "a[i] < big", both, [], "at");
    let programs = [v, v2, v3, v4];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function every_wrong_differs(items5) {
    let code4 = program_of(items5);
    let answer = eval_console_log_lines(code4);
    let list = wrong_programs_of(items5);
    let outputs = list_map(list, eval_console_log_lines);
    let n = list_includes_not(outputs, answer);
    return n;
  }
  function array_of(size) {
    "different numbers 1 to 9, tried again until every wrong program writes out something else";
    while (true) {
      let taken = list_shuffle_take(pool, size);
      if (every_wrong_differs(taken)) {
        return taken;
      }
    }
  }
  function inputs_get() {
    let sizes = [3, 4, 3, 4, 5, 5];
    let arrays = list_map(sizes, array_of);
    return arrays;
  }
  function above(root, context) {
    "the biggest remembered, where the smallest is remembered, then where the biggest is";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_biggest,
      ["", "if (a[i] > big) { big = a[i]; }", " keeps the biggest number"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_small_at,
      [
        "",
        "at = i;",
        " next to ",
        "small = a[i];",
        " keeps where the smallest number is",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Putting ",
      "at = i;",
      " next to ",
      "big = a[i];",
      " keeps where the biggest number is:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where is the biggest?",
    "at = i;",
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
