import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_count } from "./app_learn_js_lesson_array_for_count.mjs";
import { app_learn_js_lesson_expression_choose_order_stop_early_and } from "./app_learn_js_lesson_expression_choose_order_stop_early_and.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_in_order_inside() {
  arguments_assert(arguments, 0);
  ("whether the items of b are in a, in the same order: let j = 0; for (let i = 0; i < a.length; i++) { if (a[i] === b[j]) { j++; } } console.log(j === b.length); writes out true for a = ['x', 'y', 'z', 'y'] and b = ['x', 'z']");
  ("2026-11-25, at the human's asking, the first of three steps towards merging two sorted arrays (then Smaller first, then the merge itself). The one new fact is a second index, j, that moves on its own: i moves every time, j only when it finds what it looks for.");
  ("j < b.length && guards the end of b: once every item of b is found, the && stops early and b[j], which would read past the end, is never read. In JavaScript it would read undefined, which no item equals, so the answer is the same without it - but the step-by-step quiz refuses to read past the end, and the guard says what is meant.");
  ("The inputs are letters x, y and z: a four or five long, b two long, the answer true for half of them. An input is drawn again until at least one wrong program writes out the other answer.");
  ("The wrong programs are: j++ with no if (j counts every item of a), b[i] for b[j] (a must start with b) and b[0] for b[j] (counts how many times the first item of b is in a).");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [
    ["x", "y", "z", "y"],
    ["x", "z"],
  ];
  let letters = ["x", "y", "z"];
  function program_with(input, asked, inside) {
    "let a, let b, let j = 0; a loop over a, j++ inside if (a[i] === asked) when inside, else j++ with no if; console.log(j === b.length);";
    let codes = list_map(input[0], json_to);
    let a = js_code_array(codes);
    let codes2 = list_map(input[1], json_to);
    let b = js_code_array(codes2);
    let body = inside
      ? ["  if (j < b.length && a[i] === " + asked + ") {", "    j++;", "  }"]
      : ["  j++;"];
    let lines = [
      "let a = " + a + ";",
      "let b = " + b + ";",
      "let j = 0;",
      "for (let i = 0; i < a.length; i++) {",
      ...body,
      "}",
      "console.log(j === b.length);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "b[j]", true);
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "b[j]", false);
    let v2 = program_with(input3, "b[i]", true);
    let v3 = program_with(input3, "b[0]", true);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function letters_of(size) {
    let items = [];
    while (less_than(items.length, size)) {
      let r2 = list_random_item(letters);
      items.push(r2);
    }
    return items;
  }
  function input_drawn(wanted) {
    "a four or five long and b two long, drawn again until the answer is wanted and some wrong program writes out the other answer";
    while (true) {
      let size = list_random_item([4, 5]);
      let v4 = letters_of(size);
      let v5 = letters_of(2);
      let input5 = [v4, v5];
      let code4 = program_of(input5);
      let answer = eval_console_log_lines(code4);
      if (not_equal(answer, wanted)) {
        continue;
      }
      let list = wrong_programs_of(input5);
      let outputs = list_map(list, eval_console_log_lines);
      function lambda(out) {
        let neq = not_equal(out, answer);
        return neq;
      }
      let others = outputs.filter(lambda);
      if (greater_than(others.length, 0)) {
        return input5;
      }
    }
  }
  function inputs_get() {
    let wanted_list = ["true", "false", "true", "false", "true", "false"];
    let inputs = list_map(wanted_list, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "counting inside an if and && stopping early remembered, then a second index that counts and reads";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_count,
      ["", "count++", " inside an ", "if", " goes up only some of the times"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_expression_choose_order_stop_early_and,
      [
        "when the left side of ",
        "&&",
        " is ",
        "false",
        ", the right side is never solved",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("one thought to a line");
    let lines_said = [
      [
        "Suppose we want to know if all the items of ",
        "b",
        " are in ",
        "a",
        " and that they are in the same order",
      ],
      [
        "However ",
        "a",
        " may have extra items in between each pair of items in ",
        "b",
        "",
      ],
      ["", "i", " goes through ", "a", ", one item each time"],
      ["", "j", " is where we are in ", "b", ""],
      [
        "",
        "j",
        " goes up only when ",
        "a[i]",
        " is the item of ",
        "b",
        " we are looking for",
      ],
      [
        "Once every item of ",
        "b",
        " is found, ",
        "j < b.length",
        " is ",
        "false",
        ", so the ",
        "&&",
        " stops early and ",
        "b[j]",
        " is never read past the end of ",
        "b",
        "",
      ],
      [
        "If ",
        "j",
        " finishes equal to ",
        "b.length",
        ", then every item of ",
        "b",
        " was found:",
      ],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "x",
      " is found first, then ",
      "z",
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "In order inside a?",
    "a[i] === b[j]",
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
