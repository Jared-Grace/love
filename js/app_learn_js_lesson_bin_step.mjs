import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { equal } from "./equal.mjs";
import { js_code_if_else_if_with_else_lines_multiple } from "./js_code_if_else_if_with_else_lines_multiple.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_code_if_else_if_lines_multiple } from "./js_code_if_else_if_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { divide } from "./divide.mjs";
import { floor } from "./floor.mjs";
import { app_learn_js_bin_items } from "./app_learn_js_bin_items.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_else_if_else } from "./app_learn_js_lesson_else_if_else.mjs";
import { app_learn_js_lesson_bin_look_side } from "./app_learn_js_lesson_bin_look_side.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_second_generic } from "./app_learn_js_lesson_second_generic.mjs";
export function app_learn_js_lesson_bin_step() {
  arguments_assert(arguments, 0);
  ("one whole step of a binary search: Look right or left with one more case first, the middle item being goal itself, which sets found = true. let a = [2, 5, 8, 12, 16, 23, 38]; let goal = 12; let low = 0; let high = 6; let found = false; ... if (a[middle] === goal) { found = true; } else if (a[middle] < goal) { low = middle + 1; } else { high = middle - 1; } writes out true, 0, 6");
  ("2026-11-20, approved by the human: the second of five binary search lessons. The plan wrote out found alone; this writes out found, low and high, so a question where goal is not the middle item still has an answer that shows which way the step went.");
  ("A set is six questions over seven items in order: goal is the middle item twice, to its right twice and to its left twice, and low and high are not always 0 and 6.");
  ("The wrong programs are two ifs in place of if and else if (when found, the second if still moves high, so the found case changes high too), > in place of < (the wrong half), and the last else left off (when goal is to the left, nothing moves). A wrong program is offered only when it writes out something else.");
  ("The writing is a first draft by Claude 2026-11-20.");
  let windows = [
    [0, 6],
    [2, 6],
    [0, 6],
    [0, 4],
    [0, 6],
    [2, 6],
  ];
  let sides = ["middle", "middle", "right", "right", "left", "left"];
  function program_of(input, way) {
    let codes = list_map(input.items, json_to);
    let right = js_code_array(codes);
    let code2 = js_code_let_statement("a", right);
    let right2 = json_to(input.goal);
    let code3 = js_code_let_statement("goal", right2);
    let right3 = json_to(input.low);
    let code4 = js_code_let_statement("low", right3);
    let right4 = json_to(input.high);
    let code5 = js_code_let_statement("high", right4);
    let code6 = js_code_let_statement("found", "false");
    let code7 = js_code_let_statement("sum", "low + high");
    let code8 = js_code_let_statement("middle", "Math.floor(sum / 2)");
    let lets = [code2, code3, code4, code5, code6, code7, code8];
    let same = "a[middle] === goal";
    let test = equal(way, "wrong_side")
      ? "a[middle] > goal"
      : "a[middle] < goal";
    let yes = ["found = true;"];
    let move_low = ["low = middle + 1;"];
    let move_high = ["high = middle - 1;"];
    let step = js_code_if_else_if_with_else_lines_multiple(
      same,
      yes,
      test,
      move_low,
      move_high,
    );
    if (equal(way, "two_ifs")) {
      let lines2 = js_code_if_lines_multiple(same, yes);
      let lines3 = js_code_if_else_lines_multiple(test, move_low, move_high);
      step = list_concat_multiple([lines2, lines3]);
    }
    if (equal(way, "no_else")) {
      step = js_code_if_else_if_lines_multiple(same, yes, test, move_low);
    }
    let statement = js_code_console_log_statement("found");
    let statement2 = js_code_console_log_statement("low");
    let statement3 = js_code_console_log_statement("high");
    let logs = [statement, statement2, statement3];
    let lines = list_concat_multiple([lets, step, logs]);
    let code = list_join_newline(lines);
    return code;
  }
  function input_draw(window, side) {
    "seven items in order, and the goal inside low to high: the middle item, or on the side asked for";
    let low = window[0];
    let high = window[1];
    let p = divide(low + high, 2);
    let middle = floor(p);
    let items = app_learn_js_bin_items();
    let at_all = [];
    for (let k = low; less_than_equal(k, high); k++) {
      let chosen =
        (equal(side, "middle") && equal(k, middle)) ||
        (equal(side, "right") && greater_than(k, middle)) ||
        (equal(side, "left") && less_than(k, middle));
      if (chosen) {
        at_all.push(k);
      }
    }
    let at = list_shuffle_take(at_all, 1)[0];
    let input = {
      items,
      goal: items[at],
      low,
      high,
    };
    return input;
  }
  function inputs_get() {
    "six questions: goal the middle item twice, to its right twice, to its left twice";
    let inputs = [];
    for (let k = 0; less_than(k, windows.length); k++) {
      let v = input_draw(windows[k], sides[k]);
      inputs.push(v);
    }
    return inputs;
  }
  function extra_answers(input2) {
    "nothing changed";
    let joined = list_join_newline(["false", input2.low, input2.high]);
    let r = [joined];
    return r;
  }
  function above(root, context, example) {
    "else if remembered, then the step from the lesson before, and the one case it adds";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_else_if_else,
      [
        "after ",
        "if",
        " and ",
        "else if",
        ", an ",
        "else",
        " runs when neither condition is ",
        "true",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_bin_look_side,
      [
        "if ",
        "a[middle]",
        " is smaller than ",
        "goal",
        ", ",
        "low = middle + 1;",
        ", otherwise ",
        "high = middle - 1;",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "The middle item may be ",
      "goal",
      " itself. Then we found it, so ",
      "found = true;",
      " and ",
      "low",
      " and ",
      "high",
      " stay as they are:",
    ]);
    example(box_three, {
      items: [2, 5, 8, 12, 16, 23, 38],
      goal: 12,
      low: 0,
      high: 6,
    });
    app_learn_js_div_cycle_code(box_three, [
      "Otherwise ",
      "found",
      " stays ",
      "false",
      " and the step goes right or left as before:",
    ]);
    example(box_three, {
      items: [2, 5, 8, 12, 16, 23, 38],
      goal: 23,
      low: 0,
      high: 6,
    });
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "One step of a search",
    "if (a[middle] === goal)",
  );
  let lesson = app_learn_js_lesson_second_generic({
    name_id,
    above,
    inputs_get,
    program_of,
    ways: ["right", "two_ifs", "wrong_side", "no_else"],
    extra_answers,
  });
  return lesson;
}
