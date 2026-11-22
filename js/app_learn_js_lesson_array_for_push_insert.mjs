import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_push_except } from "./app_learn_js_lesson_array_for_push_except.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_array_splice_inputs } from "./app_learn_js_array_splice_inputs.mjs";
export function app_learn_js_lesson_array_for_push_insert() {
  arguments_assert(arguments, 0);
  ("one item put into an array at an index, by a loop pushing into a new array: let a = [5, 8, 2, 9]; let c = []; for (let i = 0; i < a.length; i++) { if (i === 2) { c.push(7); } c.push(a[i]); } console.log(c); writes out [5, 8, 7, 2, 9]");
  ("2026-11-22, at the human's asking: the loop before Put one in at an index, as All but one is the loop before Take one out. Pushing the new item just before the item at the index puts it there, and the items after slide along.");
  ("The wrong programs are: the new item pushed after a[i] (one place too far), i !== in place of i === (the new item before every other item), and no if (the new item before every item).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: [5, 8, 2, 9],
    index: 2,
    item: 7,
  };
  function program_with(input, condition, after) {
    "the new item pushed when condition holds, before a[i], or after it when after is true; with no if when condition is the empty text";
    let push_item = "c.push(" + input.item + ");";
    let push_old = "c.push(a[i]);";
    let inner = ["  " + push_item];
    if (not_equal(condition, "")) {
      inner = ["  if (" + condition + ") {", "    " + push_item, "  }"];
    }
    let body = [...inner, "  " + push_old];
    if (after) {
      body = ["  " + push_old, ...inner];
    }
    let lines = [
      "let a = " + js_code_array(input.items) + ";",
      "let c = [];",
      "for (let i = 0; i < a.length; i++) {",
      ...body,
      "}",
      "console.log(c);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "i === " + input2.index, false);
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "i === " + input3.index, true);
    let v2 = program_with(input3, "i !== " + input3.index, false);
    let v3 = program_with(input3, "", false);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the loop leaving one index out remembered, then the loop putting one in";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_except,
      [
        "",
        "i !== 1",
        " pushed every item but the one at index 1 into a new array",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Suppose we want ",
      "7",
      " put in at index ",
      "2",
      " of ",
      "a",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "When ",
      "i === 2",
      ", we push ",
      "7",
      " just before ",
      "a[i]",
      ", so the items after it slide along:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Put one in",
    "if (i === 2)",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get: app_learn_js_array_splice_inputs,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
