import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { math_min } from "./math_min.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { range_1 } from "./range_1.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { not } from "./not.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { assert } from "./assert.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_rises } from "./app_learn_js_lesson_array_for_rises.mjs";
import { app_learn_js_lesson_object_shorthand } from "./app_learn_js_lesson_object_shorthand.mjs";
import { app_learn_js_lesson_object_push } from "./app_learn_js_lesson_object_push.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_rises() {
  arguments_assert(arguments, 0);
  ("each rise kept as an object: let item = a[i]; small keeps the smallest so far, let rise = item - small; and rises.push({ item, small, rise }); then console.log(rises)");
  ("2026-11-26, at the human's asking: the whole of rises is written out, not one property of one object, since keeping all three numbers each time round is what the lesson is about, and Each rise writes out the whole of rises too. Each answer is about 95 characters, written on one line.");
  ("2026-11-26, at the human's asking - Each rise again, now that objects are taught: each time round pushes the number, the smallest so far and the rise together, so all three can be read back afterwards. Built after An object from variables, The same name twice, Writing the name once and Pushing an object, which teach each part.");
  ("let item = a[i]; names the number the way Counting words with a loop names words[i] as w, so the shorthand { item, small, rise } can be used; a[i] cannot be a shorthand property.");
  ("Each input is four different numbers from 1 to 9, drawn again until a new smallest comes after the first number and some rise is above 0, as in Each rise, but four rather than five or six, since every pushed object holds three numbers.");
  ("The wrong programs are the three of Each rise - the rise worked out and pushed before the if (below 0 at each new smallest), small starting at 0 (each rise is then the number itself), and item - a[i - 1] (the change from the number before) - and the loop starting at 0, which pushes an object for the first number too. Each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-26.");
  function program_with(items, small_start, rise_first, i_start, rise_of) {
    "the array, small and an empty rises, the loop pushing each object, then rises written out";
    let rise_lines = [
      "  let rise = " + rise_of + ";",
      "  rises.push({ item, small, rise });",
    ];
    let if_lines = ["  if (item < small) {", "    small = item;", "  }"];
    let body = rise_first
      ? rise_lines.concat(if_lines)
      : if_lines.concat(rise_lines);
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let small = " + small_start + ";",
      "let rises = [];",
      "for (let i = " + i_start + "; i < a.length; i++) {",
      "  let item = a[i];",
    ]
      .concat(body)
      .concat(["}", "console.log(rises);"]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code = program_with(input.items, "a[0]", false, 1, rise_right);
    return code;
  }
  let rise_right = "item - small";
  function wrong_programs_of(input) {
    let items = input.items;
    let v = program_with(items, "a[0]", true, 1, rise_right);
    let v2 = program_with(items, "0", false, 1, rise_right);
    let v3 = program_with(items, "a[0]", false, 0, rise_right);
    let v4 = program_with(items, "a[0]", false, 1, "item - a[i - 1]");
    let programs = [v, v2, v3, v4];
    return programs;
  }
  function rises_of(items) {
    let small = items[0];
    let rises = [];
    for (let i = 1; less_than(i, items.length); i++) {
      small = math_min(small, items[i]);
      let difference = subtract(items[i], small);
      rises.push(difference);
    }
    return rises;
  }
  function fits(items) {
    let left = Math.min(...items);
    let later_smallest = not_equal(left, items[0]);
    let top = Math.max(...rises_of(items));
    let some_rise = greater_than(top, 0);
    let r = later_smallest && some_rise;
    return r;
  }
  function items_drawn() {
    "four different numbers, drawn again until a later smallest and some rise";
    let list = range_1(9);
    let items = list_shuffle_take(list, 4);
    while (not(fits(items))) {
      let list2 = range_1(9);
      items = list_shuffle_take(list2, 4);
    }
    return items;
  }
  function inputs_get() {
    "four inputs, each four numbers";
    let inputs = [];
    for (let i = 0; less_than(i, 4); i++) {
      inputs.push({
        items: items_drawn(),
      });
    }
    return inputs;
  }
  let input_by_code = new Map();
  function batch_get() {
    let inputs = inputs_get();
    function code_of(input) {
      let code = program_of(input);
      input_by_code.set(code, input);
      return code;
    }
    let codes = list_map(inputs, code_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function input_of(code) {
    let known = input_by_code.has(code);
    assert(known);
    let input = input_by_code.get(code);
    return input;
  }
  function decoys(question, answer) {
    "what each wrong program writes out; each once, never the answer";
    let v5 = input_of(question);
    let programs = wrong_programs_of(v5);
    let outputs = list_map(programs, eval_console_log_lines);
    let found = list_without(outputs, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "each wrong program that writes out something other than the answer";
    let v6 = input_of(answer);
    let programs = wrong_programs_of(v6);
    let out_answer = eval_console_log_lines(answer);
    function differs(code) {
      let out = eval_console_log_lines(code);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    let once = list_unique(kept);
    return once;
  }
  function above(root, context) {
    "Each rise and the two object lessons remembered, then each rise pushed as an object";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_rises,
      ["", "rises.push(rise);", " pushes each rise from the smallest so far"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_shorthand,
      [
        "",
        "{ name, town }",
        " is ",
        "{ name: name, town: town }",
        " written short",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_three,
      context,
      app_learn_js_lesson_object_push,
      ["the item pushed can be an object"],
    );
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "Now each time round pushes the number, the smallest so far and the rise together:",
    ]);
    let code = program_of({
      items: [7, 2, 5, 1],
    });
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_four, lines, value);
    let said = [
      ["", "2", " is a new smallest, so its rise is ", "0", ""],
      ["", "5 - 2", " is ", "3", ""],
      ["", "1", " is a new smallest, so its rise is ", "0", ""],
    ];
    for (let line of said) {
      app_learn_js_div_cycle_code(box_four, line);
    }
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Each rise, as objects",
    "{ item, small, rise }",
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: false,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
