import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { equal } from "./equal.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
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
import { app_learn_js_lesson_string_found_e } from "./app_learn_js_lesson_string_found_e.mjs";
import { app_learn_js_lesson_statement_name_middle } from "./app_learn_js_lesson_statement_name_middle.mjs";
import { app_learn_js_lesson_array_index_name } from "./app_learn_js_lesson_array_index_name.mjs";
import { app_learn_js_lesson_array_for_in_order } from "./app_learn_js_lesson_array_for_in_order.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_second_generic } from "./app_learn_js_lesson_second_generic.mjs";
export function app_learn_js_lesson_bin_look_side() {
  arguments_assert(arguments, 0);
  ("one step of a binary search, looking right or left: let a = [2, 5, 8, 12, 16, 23, 38]; let goal = 23; let low = 0; let high = 6; let sum = low + high; let middle = Math.floor(sum / 2); if (a[middle] < goal) { low = middle + 1; } else { high = middle - 1; } console.log(low); console.log(high); writes out 4 then 6");
  ("2026-11-20, approved by the human: the first of five binary search lessons. Middle of two names already finds the middle; the one new fact is that in a list in order, the middle item says which half goal is in, and the + 1 or - 1 leaves out the middle item, which has just been looked at.");
  ("A set is six questions over seven items in order, low and high marking a part of the list of three, five or seven items, goal inside that part but never the middle item itself, to the right three times and to the left three times.");
  ("The wrong programs are low = middle and high = middle (the middle item kept in), and > in place of < (the wrong half). A wrong program is offered only when it writes out something else: low = middle changes nothing when goal is on the left, so it is offered only on the right, and high = middle only on the left. The extra wrong answer is low and high unchanged.");
  ("The writing is a first draft by Claude 2026-11-20.");
  let windows = [
    [0, 6],
    [0, 6],
    [0, 6],
    [0, 6],
    [2, 6],
    [0, 4],
  ];
  let sides = ["right", "left", "right", "left", "right", "left"];
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
    let code6 = js_code_let_statement("sum", "low + high");
    let code7 = js_code_let_statement("middle", "Math.floor(sum / 2)");
    let lets = [code2, code3, code4, code5, code6, code7];
    let test = equal(way, "wrong_side")
      ? "a[middle] > goal"
      : "a[middle] < goal";
    let move_low = equal(way, "low_middle")
      ? "low = middle;"
      : "low = middle + 1;";
    let move_high = equal(way, "high_middle")
      ? "high = middle;"
      : "high = middle - 1;";
    let step = js_code_if_else_lines_multiple(test, [move_low], [move_high]);
    let statement = js_code_console_log_statement("low");
    let statement2 = js_code_console_log_statement("high");
    let logs = [statement, statement2];
    let lines = list_concat_multiple([lets, step, logs]);
    let code = list_join_newline(lines);
    return code;
  }
  function input_draw(window, side) {
    "seven items in order, and the goal inside low to high on the side asked for, never the middle item";
    let low = window[0];
    let high = window[1];
    let p = divide(low + high, 2);
    let middle = floor(p);
    let items = app_learn_js_bin_items();
    let at_all = [];
    for (let k = low; less_than_equal(k, high); k++) {
      let on_right = greater_than(k, middle);
      let on_left = less_than(k, middle);
      if (
        (equal(side, "right") && on_right) ||
        (equal(side, "left") && on_left)
      ) {
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
    "six questions, to the right three times and to the left three times";
    let inputs = [];
    for (let k = 0; less_than(k, windows.length); k++) {
      let v = input_draw(windows[k], sides[k]);
      inputs.push(v);
    }
    return inputs;
  }
  function extra_answers(input2) {
    "low and high unchanged";
    let joined = list_join_newline([input2.low, input2.high]);
    let r = [joined];
    return r;
  }
  function above(root, context, example) {
    "looking at each one, the middle, an index held in a name and a list in order remembered, then why the middle item says which half, then the step right and the step left";
    let box_five = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_five,
      context,
      app_learn_js_lesson_string_found_e,
      ["one way to find something is to look at each one, first to last"],
    );
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_statement_name_middle,
      [
        "",
        "let middle = Math.floor(sum / 2);",
        " is the whole number in the middle of ",
        "low",
        " and ",
        "high",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_index_name,
      ["", "a[i]", " is the item at the index ", "i", " holds"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_three,
      context,
      app_learn_js_lesson_array_for_in_order,
      ["a list is in order when each item is smaller than the one after it"],
    );
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "Suppose the list is in order, smallest to largest. Then there is a faster way: look at the middle item first.",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "Every item to its left is not larger than it. Every item to its right is not smaller than it.",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "So if ",
      "a[middle]",
      " is smaller than ",
      "goal",
      ", then ",
      "goal",
      " can only be to its right. And if ",
      "a[middle]",
      " is larger than ",
      "goal",
      ", then ",
      "goal",
      " can only be to its left.",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "",
      "low",
      " and ",
      "high",
      " are the first and last index of the part where ",
      "goal",
      " can still be. ",
      "middle",
      " is the index halfway between them. ",
      "Math.floor",
      " makes it a whole number, because an index can't be 3.5.",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "If ",
      "a[middle]",
      " is smaller than ",
      "goal",
      ", the middle item is not ",
      "goal",
      ", and nothing to its left is either. So ",
      "low = middle + 1;",
      ", the index just after the middle:",
    ]);
    example(box_four, {
      items: [2, 5, 8, 12, 16, 23, 38],
      goal: 23,
      low: 0,
      high: 6,
    });
    app_learn_js_div_cycle_code(box_four, [
      "Otherwise, ",
      "high = middle - 1;",
      ", the index just before the middle:",
    ]);
    example(box_four, {
      items: [2, 5, 8, 12, 16, 23, 38],
      goal: 5,
      low: 0,
      high: 6,
    });
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Look right or left",
    "low = middle + 1;",
  );
  let lesson = app_learn_js_lesson_second_generic({
    name_id,
    above,
    inputs_get,
    program_of,
    ways: ["right", "low_middle", "high_middle", "wrong_side"],
    extra_answers,
  });
  return lesson;
}
