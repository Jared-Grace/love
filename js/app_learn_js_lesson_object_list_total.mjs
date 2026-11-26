import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_objects_array_lines } from "./app_learn_js_objects_array_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_total } from "./app_learn_js_lesson_array_for_total.mjs";
import { app_learn_js_lesson_object_list_find } from "./app_learn_js_lesson_object_list_find.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { list_join } from "./list_join.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_object_list_total() {
  arguments_assert(arguments, 0);
  ("adding up one property of a list of objects: let total = 0; a for loop doing let item = items[i]; total += item.price; then console.log(total); writes out all the prices added together");
  ("2026-11-26, at the human's asking - the second of four lessons asking a question of a list of objects: Add them up again, with each number read through a property of an object rather than taken from the array itself.");
  ("The items are things a market in Bible times sold - bread, fish, oil, figs, honey, salt - each at a price from 1 to 9, drawn again for every program; two items may cost the same.");
  ("A set is four questions, three items twice and four items twice, shuffled.");
  ("The wrong programs are the three of Add them up: total = item.price; in place of total += item.price; (only the last price is kept), writing total out inside the loop (the total so far, every time round), and starting i at 1 (the first price is left out). Each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-26.");
  let names = ["bread", "fish", "oil", "figs", "honey", "salt"];
  function program_with(input, i_start, add, log_inside) {
    "the items, total starting at 0, the loop adding each price, then total written out";
    let log_line = "console.log(total);";
    let body = ["  let item = items[i];", "  total " + add + " item.price;"];
    let inside = log_inside ? ["  " + log_line] : [];
    let after = log_inside ? [] : [log_line];
    let lines = app_learn_js_objects_array_lines("items", input.items, [
      "name",
      "price",
    ])
      .concat([
        "let total = 0;",
        "for (let i = " + i_start + "; i < items.length; i++) {",
      ])
      .concat(body)
      .concat(inside)
      .concat(["}"])
      .concat(after);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code = program_with(input, 0, "+=", false);
    return code;
  }
  function wrong_programs_of(input) {
    let v = program_with(input, 0, "=", false);
    let v2 = program_with(input, 0, "+=", true);
    let v3 = program_with(input, 1, "+=", false);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input) {
    let none = [];
    return none;
  }
  function item_of(name) {
    let item = {
      name,
      price: integer_random(1, 9),
    };
    return item;
  }
  function inputs_get() {
    "four inputs: three items twice, four items twice, shuffled";
    let inputs = [];
    for (let size of [3, 3, 4, 4]) {
      let drawn = list_shuffle_take(names, size);
      inputs.push({
        items: list_map(drawn, item_of),
      });
    }
    list_shuffle(inputs);
    return inputs;
  }
  function above(root, context) {
    "Add them up and Finding a person by town remembered, then the prices added up";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_total,
      ["", "total += a[i];", " adds each number to total"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_list_find,
      ["", "p.town", " reads one property of each person in turn"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Now each number added is a property, ",
      "item.price",
      ":",
    ]);
    let items = [
      {
        name: "bread",
        price: 3,
      },
      {
        name: "fish",
        price: 5,
      },
      {
        name: "oil",
        price: 2,
      },
    ];
    let code = program_of({
      items,
    });
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    function price_of(item) {
      let price = item.price;
      return price;
    }
    let prices = list_map(items, price_of);
    let joined = list_join(prices, " + ");
    app_learn_js_div_cycle_code(box_three, ["", joined, " is ", value, ""]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Adding up prices",
    "total += item.price;",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs_stepping(
    {
      name_id,
      above,
      inputs_get,
      program_of,
      wrong_programs_of,
      wrong_outputs_of,
    },
    false,
  );
  return lesson;
}
