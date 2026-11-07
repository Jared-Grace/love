import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_array_index_generic } from "./app_code_lesson_array_index_generic.mjs";
export function app_code_lesson_array_first() {
  arguments_assert(arguments, 0);
  ("the first item of an array: let a = [14, 27, 35]; console.log(a[0]); writes out 14");
  ("The first lesson of arrays, chosen by the human 2026-11-06 as a group of its own after an if inside a for. Two new facts and no more: square brackets hold several values under one name, and a[0] reads the first of them, because counting starts at 0.");
  ("Only ever a[0], so the one thing asked is which item the 0 reaches. The second item is the next lesson, and any item the one after.");
  ("The writing is a first draft by Claude 2026-11-06.");
  function above(root, context, example, walk) {
    "an array given a name, then a[0] reading its first item";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_div_cycle_code(box_one, [
      "Square brackets hold several values, with a comma between each. Given a name with ",
      "let",
      ", they are an array: ",
      "let a = [14, 27, 35];",
      " gives the name ",
      "a",
      " to three numbers at once.",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "",
      "a[0]",
      " is the first item of the array: counting starts at ",
      "0",
      ", not at ",
      "1",
      ":",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The first item of an array",
    "a[0]",
  );
  let lesson = app_code_lesson_array_index_generic({
    name_id,
    above,
    item_count: 3,
    indexes: [0],
    example: {
      items: [14, 27, 35],
      index: 0,
    },
  });
  return lesson;
}
