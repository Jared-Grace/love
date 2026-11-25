import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_1 } from "./range_1.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_biggest } from "./app_learn_js_lesson_array_for_biggest.mjs";
import { app_learn_js_lesson_else_if } from "./app_learn_js_lesson_else_if.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_second_biggest() {
  arguments_assert(arguments, 0);
  ("the second biggest, kept beside the biggest in one loop: if (a[i] > big) { second = big; big = a[i]; } else if (a[i] > second) { second = a[i]; } console.log(second);");
  ("2026-11-25, at the human's asking: The biggest with a second name kept beside it. The new idea is that a new biggest moves the old one down to second, rather than losing it.");
  ("The inputs are 4 or 5 different numbers from 1 to 9. In half, the second biggest comes before the biggest, so moving the old biggest down matters; in the other half it comes after, so the else if matters.");
  ("The wrong programs are: no second = big; (the old biggest is lost), the two lines the other way round (second becomes the new biggest), and if in place of else if (a new biggest is also made second).");
  ("The writing is a first draft by Claude 2026-11-25.");
  function program_with(items, when_bigger, other) {
    "the array, big and second at 0, then a for keeping both";
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let big = 0;",
      "let second = 0;",
      "for (let i = 0; i < a.length; i++) {",
      "  if (a[i] > big) {",
    ];
    for (let line of when_bigger) {
      lines.push("    " + line);
    }
    lines.push("  } " + other + " (a[i] > second) {");
    lines.push("    second = a[i];");
    lines.push("  }");
    lines.push("}");
    lines.push("console.log(second);");
    let code = list_join_newline(lines);
    return code;
  }
  let moved = ["second = big;", "big = a[i];"];
  function program_of(items2) {
    let code2 = program_with(items2, moved, "else if");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, ["big = a[i];"], "else if");
    let v2 = program_with(items3, ["big = a[i];", "second = big;"], "else if");
    let v3 = program_with(items3, moved, "if");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function input_drawn(kind) {
    "kind is [count, second first]: different numbers, with the second biggest put before or after the biggest";
    let list = range_1(9);
    let items5 = list_shuffle_take(list, kind[0]);
    function lambda(x, y) {
      let difference = subtract(y, x);
      return difference;
    }
    let sorted = [...items5].sort(lambda);
    let at_big = items5.indexOf(sorted[0]);
    let at_second = items5.indexOf(sorted[1]);
    let right = less_than(at_second, at_big);
    if (not_equal(kind[1], right)) {
      items5[at_big] = sorted[1];
      items5[at_second] = sorted[0];
    }
    return items5;
  }
  function inputs_get() {
    "three with the second biggest before the biggest, three after";
    let kinds = [
      [4, true],
      [5, true],
      [4, true],
      [4, false],
      [5, false],
      [5, false],
    ];
    let inputs = list_map(kinds, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "The biggest and else if remembered, then the old biggest moved down";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_biggest,
      ["", "if (w[i] > big) { big = w[i]; }", " keeps the biggest so far"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_else_if,
      [
        "an ",
        "else if",
        " is asked only when the ",
        "if",
        " before it was ",
        "false",
        "",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      ["Now ", "second", " is kept too"],
      [
        "When a new biggest comes, the old ",
        "big",
        " moves down to ",
        "second",
        " first",
      ],
      [
        "Otherwise, if it is bigger than ",
        "second",
        ", it becomes ",
        "second",
        "",
      ],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of([7, 4, 9, 2]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "When ",
      "9",
      " comes, ",
      "big",
      " was ",
      "7",
      ", so ",
      "7",
      " moves down to ",
      "second",
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Second biggest",
    "second = big;",
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
