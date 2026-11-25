import { floor } from "./floor.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_even_odd } from "./app_learn_js_lesson_array_for_even_odd.mjs";
import { app_learn_js_lesson_array_concat } from "./app_learn_js_lesson_array_concat.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_push_else_concat() {
  arguments_assert(arguments, 0);
  ('moving every copy of one letter to the end: let move = "x"; one for loop pushing a[i] to keep if it is not move, else to moved, then console.log(keep.concat(moved))');
  ("2026-11-25, at the human's asking, after Concat. Not picked, as the human chose: two for loops one after another, the first pushing what is not move and the second what is, put after Leave one value out - it checks every letter twice with two opposite tests, and two loops filling one array is already taught by Two arrays into a new one. Splitting into two arrays with if and else is taught by Evens and odds; the new fact here is joining the two with concat, so the letters that matched come last and the others keep their order.");
  ("The letter moved is held in move rather than written in each test, at the human's asking, and is a letter rather than 0, so it is not mistaken for an index. Each input is five or six letters from b c d f g h k m, one of them moved, appearing one to three times, the others different; it is drawn again until moving changes it.");
  ("The wrong programs are: moved.concat(keep) (the matching letters first), writing out keep alone, and the two pushes swapped. None has a loop that can run forever. The other wrong answer offered is a as it was.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let letters = ["b", "c", "d", "f", "g", "h", "k", "m"];
  function array_code(items) {
    let codes = list_map(items, json_to);
    let text = "[" + codes.join(", ") + "]";
    return text;
  }
  function program_with(input, keep_to, moved_to, logged) {
    "the array, move, the two empty arrays, the loop pushing to keep_to or else moved_to, and logged written out";
    let lines = [
      "let a = " + array_code(input.items) + ";",
      "let move = " + json_to(input.move) + ";",
      "let keep = [];",
      "let moved = [];",
      "for (let i = 0; i < a.length; i++) {",
      "  if (a[i] !== move) {",
      "    " + keep_to + ".push(a[i]);",
      "  } else {",
      "    " + moved_to + ".push(a[i]);",
      "  }",
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let joined = "keep.concat(moved)";
  function program_of(input2) {
    let code2 = program_with(input2, "keep", "moved", joined);
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "keep", "moved", "moved.concat(keep)");
    let v2 = program_with(input3, "keep", "moved", "keep");
    let v3 = program_with(input3, "moved", "keep", joined);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let unchanged = array_code(input4.items);
    let outputs = [unchanged];
    return outputs;
  }
  function moved_of(items2, move) {
    function lambda(x) {
      let neq = not_equal(x, move);
      return neq;
    }
    let keep = items2.filter(lambda);
    function lambda2(x) {
      let eq = equal(x, move);
      return eq;
    }
    let moved = items2.filter(lambda2);
    let after = keep.concat(moved);
    return after;
  }
  function input_drawn(size) {
    "size letters, one of them moved and there one to three times";
    let left = Math.random();
    let p = multiply(left, 3);
    let copies = 1 + floor(p);
    let picked = list_shuffle_take(letters, subtract(size, copies) + 1);
    let move2 = picked[0];
    let items3 = picked.slice(1);
    for (let k = 0; less_than(k, copies); k++) {
      items3.push(move2);
    }
    list_shuffle(items3);
    while (equal(moved_of(items3, move2).join(), items3.join())) {
      list_shuffle(items3);
    }
    let input5 = {
      items: items3,
      move: move2,
    };
    return input5;
  }
  function inputs_get() {
    "six inputs, of five and six letters three times each";
    let sizes = [5, 5, 5, 6, 6, 6];
    let inputs = list_map(sizes, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "evens and odds and concat remembered, then the two arrays joined";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_even_odd,
      ["With ", "if", " and ", "else", ", each item goes to one of two arrays"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_concat,
      ["", "a.concat(b)", " is ", "a", "'s items, then ", "b", "'s"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      ["To move every ", "move", " to the end, push it to ", "moved", ""],
      ["Push every other letter to ", "keep", ""],
      ["Then ", "keep.concat(moved)", " puts them last:"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let example = {
      items: ["b", "x", "c", "x", "d"],
      move: "x",
    };
    let code3 = program_of(example);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    let lines_said2 = [
      [
        "",
        "keep",
        " is ",
        '["b", "c", "d"]',
        " and ",
        "moved",
        " is ",
        '["x", "x"]',
        "",
      ],
      ["The other letters keep their order", ""],
    ];
    for (let said2 of lines_said2) {
      app_learn_js_div_cycle_code(box_three, said2);
    }
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Move them to the end",
    "keep.concat(moved)",
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
