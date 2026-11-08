import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_prose_code_list_numbered } from "./app_learn_js_prose_code_list_numbered.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_learn_js_definition_term } from "./app_learn_js_definition_term.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_index_generic } from "./app_learn_js_lesson_array_index_generic.mjs";
export function app_learn_js_lesson_array_first() {
  arguments_assert(arguments, 0);
  ("the first item of an array: let a = [14, 27, 35]; console.log(a[0]); writes out 14");
  ("The first lesson of arrays, chosen by the human 2026-11-06 as a group of its own after an if inside a for. Two new facts and no more: square brackets hold several values under one name, and a[0] reads the first of them, because counting starts at 0.");
  ("Only ever a[0], so the one thing asked is which item the 0 reaches. The second item is the next lesson, and any item the one after.");
  ("The writing is the human's, 2026-11-08, replacing a first draft by Claude 2026-11-06. It opens on a list a person already knows, numbered from 1, so that the array counting from 0 has something to differ from; and it names the wrong guess, a[1], before giving the right one.");
  function above(root, context, example, walk) {
    "a numbered list, the same list written as an array, then a[0] reading its first item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_one, [
      "Suppose we have a list of numbers:",
    ]);
    app_learn_js_prose_code_list_numbered(box_one, [
      [["text", "14"]],
      [["text", "27"]],
      [["text", "35"]],
    ]);
    let called = html_div(box_one);
    html_span_text(called, "In JS lists are called ");
    app_learn_js_definition_term(called, "Arrays");
    html_span_text(called, ". Here's how we write that list in JS:");
    app_learn_js_div_cycle_code(box_one, ["", "let a = [14, 27, 35];"]);
    app_learn_js_div_cycle_code(box_one, [
      "Square brackets ",
      "[",
      " ",
      "]",
      " hold 0 or more values in between. There is a comma ",
      ",",
      " in between each value.",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "In our list above, the first number is ",
      "14",
      ". How do we ask for the first item of an Array? Someone might think that ",
      "a[1]",
      " would return the first item in the list, because of the ",
      "1",
      ". However in JS, we use ",
      "0",
      " (and not ",
      "1",
      ") to refer to the first item in a list.",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "So here's the code to refer to the first item of a list:",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The first item of an array",
    "a[0]",
  );
  let lesson = app_learn_js_lesson_array_index_generic({
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
