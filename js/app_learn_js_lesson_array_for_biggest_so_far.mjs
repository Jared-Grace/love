import { math_max } from "./math_max.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_1 } from "./range_1.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_biggest } from "./app_learn_js_lesson_array_for_biggest.mjs";
import { app_learn_js_lesson_array_for_push_total } from "./app_learn_js_lesson_array_for_push_total.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_biggest_so_far() {
  arguments_assert(arguments, 0);
  ("the biggest so far, pushed each time round: big keeps the biggest so far and bigs.push(big); after the if, then console.log(bigs)");
  ("2026-11-26, at the human's asking, just before Each rise, which pushes a value worked out from the smallest so far the same way. Biggest number already keeps the biggest so far and Keep each total already pushes a running value each time round; the new fact is the two together, which shows big never going down.");
  ("Each input is five or six different numbers from 1 to 9, drawn again until some number is not a new biggest, so pushing a[i] gives another answer.");
  ("The wrong programs are: bigs.push(big) inside the if (only each new biggest, and not the first number), bigs.push(a[i]) (a copy of a), and a[i] < big (the smallest so far). Each loops over a.length, so all stop. The other wrong answer offered is the biggest number pushed for every item.");
  ("The writing is a first draft by Claude 2026-11-26.");
  function program_with(items, compare, push_inside, pushed) {
    "the array, big and an empty bigs, the loop keeping big and pushing, and bigs written out";
    let push_line = "bigs.push(" + pushed + ");";
    let if_lines = push_inside
      ? [
          "  if (a[i] " + compare + " big) {",
          "    big = a[i];",
          "    " + push_line,
          "  }",
        ]
      : [
          "  if (a[i] " + compare + " big) {",
          "    big = a[i];",
          "  }",
          "  " + push_line,
        ];
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let big = a[0];",
      "let bigs = [];",
      "for (let i = 0; i < a.length; i++) {",
    ]
      .concat(if_lines)
      .concat(["}", "console.log(bigs);"]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, ">", false, "big");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, ">", true, "big");
    let v2 = program_with(items3, ">", false, "a[i]");
    let v3 = program_with(items3, "<", false, "big");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let top = Math.max(...items4);
    function lambda() {
      return top;
    }
    let all_top = list_map(items4, lambda);
    let outputs = ["[" + all_top.join(", ") + "]"];
    return outputs;
  }
  function fits(items5) {
    let big = items5[0];
    for (let x of items5) {
      if (less_than(x, big)) {
        return true;
      }
      big = math_max(big, x);
    }
    return false;
  }
  function input_drawn(count) {
    "count different numbers, drawn again until some number is not a new biggest";
    let list = range_1(9);
    let items6 = list_shuffle_take(list, count);
    while (not(fits(items6))) {
      let list2 = range_1(9);
      items6 = list_shuffle_take(list2, count);
    }
    return items6;
  }
  function inputs_get() {
    "six arrays, of five and six numbers three times each";
    let counts = [5, 5, 5, 6, 6, 6];
    let inputs = list_map(counts, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "the biggest so far and pushing a running value remembered, then the biggest so far pushed each time round";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_biggest,
      ["", "if (a[i] > big) { big = a[i]; }", " keeps the biggest so far"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_push_total,
      ["", "b.push(total);", " keeps each total"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      ["", "big", " is the biggest number so far", ""],
      ["Push ", "big", " to ", "bigs", " each time round:"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of([3, 1, 5, 2, 7]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    let lines_said2 = [
      [
        "",
        "1",
        " is not bigger than ",
        "3",
        ", so ",
        "3",
        " is pushed again",
        "",
      ],
      ["", "big", " never goes down", ""],
    ];
    for (let said2 of lines_said2) {
      app_learn_js_div_cycle_code(box_three, said2);
    }
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Biggest so far, each time",
    "bigs.push(big);",
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
