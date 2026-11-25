import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_while_walk } from "./app_learn_js_lesson_array_while_walk.mjs";
import { app_learn_js_lesson_array_for_break } from "./app_learn_js_lesson_array_for_break.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_find() {
  arguments_assert(arguments, 0);
  ('the first joy found by a while that stops there: let i = 0; while (i < a.length && a[i] !== "joy") { i++; } console.log(i); - what the while asks stops it, so no break is needed');
  ("2026-11-25, at the human's asking: the first joy, as Stop at the first joy found it with break, now found by what the while asks. When there is no joy, i ends at a.length, one past the last index.");
  ("The inputs hold joy at the start, in the middle, twice, and not at all.");
  ("The wrong programs are: === in place of !== (it stops at the first item that is not joy), asking only i < a.length (it walks to the end), asking i < a.length - 1 (it stops one early when there is no joy), and writing out a[i] in place of i. None can run forever: each still asks i < a.length or stops sooner.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let others = [
    "love",
    "peace",
    "patience",
    "kindness",
    "goodness",
    "gentleness",
  ];
  function program_with(items, test, logged) {
    "the array, i at 0, then a while asking test, moving i, then writing out logged";
    function lambda(w) {
      let r2 = '"' + w + '"';
      return r2;
    }
    let quoted = list_map(items, lambda);
    let lines = [
      "let a = [" + quoted.join(", ") + "];",
      "let i = 0;",
      "while (" + test + ") {",
      "  i++;",
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let test_right = 'i < a.length && a[i] !== "joy"';
  function program_of(items2) {
    let code2 = program_with(items2, test_right, "i");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, 'i < a.length && a[i] === "joy"', "i");
    let v2 = program_with(items3, "i < a.length", "i");
    let v3 = program_with(items3, 'i < a.length - 1 && a[i] !== "joy"', "i");
    let v4 = program_with(items3, test_right, "a[i]");
    let programs = [v, v2, v3, v4];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function input_drawn(places) {
    "three or four other words, with joy put at each of places";
    let count = list_shuffle_take([3, 4], 1)[0];
    let items5 = list_shuffle_take(others, count);
    for (let place of places) {
      items5.splice(place, 0, "joy");
    }
    return items5;
  }
  function inputs_get() {
    "joy first, in the middle, at the end, twice, and not at all";
    let kinds = [[0], [1], [2], [3], [1, 3], []];
    let inputs = list_map(kinds, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Every item with a while and Stop at the first joy remembered, then the while that asks for both";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_while_walk,
      [
        "",
        "while (i < a.length)",
        " walks every item of ",
        "a",
        ", with ",
        "i++;",
        " at the end of its body",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_break,
      ["", "break;", " stops a loop at the first ", "joy", ""],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      [
        "A ",
        "while",
        " can stop there without ",
        "break;",
        ", by asking for it:",
      ],
      [
        "",
        'a[i] !== "joy"',
        " is ",
        "true",
        " until ",
        "i",
        " reaches a ",
        "joy",
        "",
      ],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of(["love", "peace", "joy", "patience"]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "When ",
      "i",
      " is ",
      "2",
      ", ",
      "a[2]",
      " is ",
      '"joy"',
      ", so the ",
      "while",
      " stops",
    ]);
    let code4 = program_of(["love", "peace", "patience"]);
    app_learn_js_div_cycle_code(box_three, [
      "With no ",
      "joy",
      ", it stops when ",
      "i",
      " reaches ",
      "a.length",
      ":",
    ]);
    let lines3 = text_split_newline(code4);
    let value2 = eval_console_log_lines(code4);
    app_learn_js_code_lines_writes_out(box_three, lines3, value2);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Find with a while",
    'a[i] !== "joy"',
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
