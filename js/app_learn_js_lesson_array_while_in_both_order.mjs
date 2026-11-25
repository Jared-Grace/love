import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_code_array_while_three_ways } from "./app_learn_js_code_array_while_three_ways.mjs";
import { range_1 } from "./range_1.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_map } from "./list_map.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_in_both } from "./app_learn_js_lesson_array_for_in_both.mjs";
import { app_learn_js_lesson_array_while_compare_each } from "./app_learn_js_lesson_array_while_compare_each.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_in_both_order() {
  arguments_assert(arguments, 0);
  ("the items in both of two sorted arrays: while (i < a.length && j < b.length) { if (a[i] === b[j]) { console.log(a[i]); i++; j++; } else if (a[i] < b[j]) { i++; } else { j++; } } writes out 4 and 9 for a = [1, 4, 6, 9] and b = [2, 4, 9]");
  ("2026-11-25, at the human's asking, after Same, smaller or larger: the same while, with only the === branch writing anything out. The one new fact is why the smaller one can be passed by: every item left in the other array is at least as large, so it is in neither. The program is two lines shorter than the lesson before; the human asked that programs not grow, the longer ones waiting for functions.");
  ("The inputs are a and b, two numbers each from 1 to 6, each sorted, exactly one number in both - two, like Merge's, so the step-by-step walkthrough stays short. An input is drawn again until some wrong program writes out something else. Not drawn: a and b the same, which every wrong program also gets right, and none in both, which writes out nothing.");
  ("The wrong programs are the ones Same, smaller or larger used: the === branch moving only i, the < branch moving j, and the > branch moving i.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [
    [1, 4, 6, 9],
    [2, 4, 9],
  ];
  function program_of(input) {
    let code = app_learn_js_code_array_while_three_ways(
      input,
      false,
      ["i", "j"],
      ["i"],
      ["j"],
    );
    return code;
  }
  function wrong_programs_of(input2) {
    let v = app_learn_js_code_array_while_three_ways(
      input2,
      false,
      ["i"],
      ["i"],
      ["j"],
    );
    let v2 = app_learn_js_code_array_while_three_ways(
      input2,
      false,
      ["i", "j"],
      ["j"],
      ["j"],
    );
    let v3 = app_learn_js_code_array_while_three_ways(
      input2,
      false,
      ["i", "j"],
      ["i"],
      ["i"],
    );
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function input_drawn() {
    "three different numbers from 1 to 6, x < y < z; the one in both arrays is y or z, never x, since a match that comes first leaves one comparison after it, which every wrong program gets right; the other two go one to each array, each array sorted. The check below is kept as a guard: with y or z in both, the < branch moving j always writes out nothing, so it never draws again";
    while (true) {
      let list = range_1(6);
      let numbers = list_shuffle_take(list, 3);
      let n = list_sort_number(numbers);
      let match_last = list_shuffle_take([true, false], 1)[0];
      let shared = match_last ? n[2] : n[1];
      let rest = match_last ? [n[0], n[1]] : [n[0], n[2]];
      let mixed = list_shuffle_take(rest, 2);
      let list3 = [mixed[0], shared];
      let v4 = list_sort_number(list3);
      let list4 = [mixed[1], shared];
      let v5 = list_sort_number(list4);
      let input4 = [v4, v5];
      let code2 = program_of(input4);
      let answer = eval_console_log_lines(code2);
      let list2 = wrong_programs_of(input4);
      let outputs = list_map(list2, eval_console_log_lines);
      function lambda(out) {
        let neq = not_equal(out, answer);
        return neq;
      }
      let others = outputs.filter(lambda);
      if (greater_than(others.length, 0)) {
        return input4;
      }
    }
  }
  function inputs_get() {
    let inputs = [];
    while (less_than(inputs.length, 6)) {
      let v6 = input_drawn();
      inputs.push(v6);
    }
    return inputs;
  }
  function above(root, context) {
    "In both and Same, smaller or larger remembered, then why the smaller one can be passed by";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_in_both,
      [
        "",
        "b.includes(a[i])",
        " finds the items of ",
        "a",
        " that are also in ",
        "b",
        "",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_while_compare_each,
      [
        "when ",
        "a[i]",
        " and ",
        "b[j]",
        " are the same, both ",
        "i",
        " and ",
        "j",
        " move; otherwise only the index of the smaller one moves",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("one thought to a line");
    let lines_said = [
      [
        "Suppose we want the items in both ",
        "a",
        " and ",
        "b",
        ", and each is in order, smallest first",
      ],
      [
        "When ",
        "a[i]",
        " and ",
        "b[j]",
        " are the same, that item is in both, so it is written out",
      ],
      [
        "When ",
        "a[i]",
        " is smaller, every item left in ",
        "b",
        " is larger than it, so ",
        "a[i]",
        " is not in ",
        "b",
        ", and ",
        "i",
        " moves on",
      ],
      ["In the same way, when ", "b[j]", " is smaller, ", "j", " moves on"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "1",
      ", ",
      "2",
      " and ",
      "6",
      " are each passed by, being smaller than the item they were compared with",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "In both, both in order",
    "if (a[i] === b[j])",
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
