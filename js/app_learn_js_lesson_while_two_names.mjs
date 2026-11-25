import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_while } from "./app_learn_js_lesson_while.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { js_code_two_names_while_lines } from "./js_code_two_names_while_lines.mjs";
import { app_learn_js_lesson_expression_where_b_ends } from "./app_learn_js_lesson_expression_where_b_ends.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_two_names_generic } from "./app_learn_js_lesson_two_names_generic.mjs";
export function app_learn_js_lesson_while_two_names() {
  arguments_assert(arguments, 0);
  ("a while changing a name it never asks about: let a = 1; let b = 9; while (a < 4) { a++; b--; } console.log(b); writes out 6");
  ("The one new fact is that a while may change a second name, which it does not ask about, so that name is found by counting how many times the { ... } ran. Two numbers meeting, next, then asks about both.");
  ("Asked for by the human 2026-11-02. Only b is written out, since a stops exactly on the number compared against and could be copied from there, while b can only be found by following the runs.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let name_a = "a";
  let name_b = "b";
  function above(root, context, example, walk) {
    "While remembered, then a while changing a second name it never asks about";
    let box_one = app_learn_js_container_light_blue(root);
    let r = app_learn_js_braces_dots();
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_while,
      [
        "a ",
        "while",
        " runs its ",
        r,
        " again and again, while what it asks is ",
        "true",
        ".",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "A ",
      "while",
      " can change a name it never asks about. Here it asks only about ",
      name_a,
      ", and ",
      name_b,
      " changes too:",
    ]);
    example(box_two, js_code_two_names_while_lines);
    walk(box_two);
    ("2026-11-25, at the human's asking, after a learner asked for a shortcut on Two numbers meeting, next: the runs counted without stepping, with why. It gives the same answer as stepping on all eight programs the lesson draws, including the two that never run, which is why the rule opens with asking a < 4 first.");
    ("Later the same day, at the human's asking: the shortcut became its own lesson just before, with code that works it out, so this box recalls it.");
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_three,
      context,
      app_learn_js_lesson_expression_where_b_ends,
      [
        "",
        "console.log(b - (4 - a));",
        " works out a number from ",
        name_a,
        " and ",
        name_b,
      ],
    );
    let lines_said = [
      [
        "A shortcut: if ",
        "a < 4",
        " is ",
        "true",
        " at the start, this ",
        "while",
        " writes out the same as ",
        "console.log(b - (4 - a));",
        "",
      ],
      ["Why it works:"],
      ["Each time, ", name_a, " goes up 1, so it stops exactly on ", "4", ""],
      ["So the ", r, " runs ", "4 - a", " times"],
      ["And ", name_b, " goes down 1 each of those times"],
      ["Here, ", "9 - (4 - 1)", " is ", "6", ""],
      [
        "With another number in place of ",
        "4",
        ", use that number: for ",
        "a < 3",
        ", it is ",
        "b - (3 - a)",
        "",
      ],
      [
        "If ",
        "a < 4",
        " is ",
        "false",
        " at the start, the lines inside ",
        r,
        " run no times, and ",
        name_b,
        " stays as it is",
      ],
    ];
    for (let line of lines_said) {
      app_learn_js_div_cycle_code(box_three, line);
    }
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Two names in a while",
    "while (a < 4) { a++; b--; }",
  );
  let lesson = app_learn_js_lesson_two_names_generic({
    name_id,
    above,
    program_write: js_code_two_names_while_lines,
  });
  return lesson;
}
