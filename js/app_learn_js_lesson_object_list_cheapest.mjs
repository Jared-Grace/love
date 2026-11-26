import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_objects_array_lines } from "./app_learn_js_objects_array_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_1 } from "./range_1.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_smallest } from "./app_learn_js_lesson_array_for_smallest.mjs";
import { app_learn_js_lesson_object_rises } from "./app_learn_js_lesson_object_rises.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_object_list_cheapest() {
  arguments_assert(arguments, 0);
  ("the cheapest object of a list, kept whole: let cheapest = items[0]; a for loop from 1 doing let item = items[i]; if (item.price < cheapest.price) { cheapest = item; } then console.log(cheapest.name); writes out the name of the cheapest item");
  ("2026-11-26, at the human's asking - the third of four lessons asking a question of a list of objects: Smallest number again, with the price compared and the whole object kept, so its name can be written out after the loop. The human chose the cheapest over the most expensive.");
  ("cheapest starts as the first item and the loop starts at 1, as small = a[0] did in Each rise, as objects; a price of 10 to start from, as Smallest number did, would need an object made up for it.");
  ("The items are the market things of Adding up prices - bread, fish, oil, figs, honey, salt. Each program has four, at four different prices from 1 to 9, drawn again until the cheapest is neither the first nor the last, so every wrong program below writes out something else.");
  ("A set is four questions, shuffled.");
  ("The wrong programs are > in place of < (the dearest), cheapest = item; with no if around it (the last item), and writing out cheapest.price in place of cheapest.name (the price, not the item). Each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-26.");
  let names = ["bread", "fish", "oil", "figs", "honey", "salt"];
  function program_with(input, compare, has_if, written) {
    "the items, cheapest starting as the first, the loop keeping the cheaper, then a property of cheapest written out";
    let keep = has_if
      ? [
          "  if (item.price " + compare + " cheapest.price) {",
          "    cheapest = item;",
          "  }",
        ]
      : ["  cheapest = item;"];
    let lines = app_learn_js_objects_array_lines("items", input.items, [
      "name",
      "price",
    ])
      .concat([
        "let cheapest = items[0];",
        "for (let i = 1; i < items.length; i++) {",
        "  let item = items[i];",
      ])
      .concat(keep)
      .concat(["}", "console.log(cheapest." + written + ");"]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code = program_with(input, "<", true, "name");
    return code;
  }
  function wrong_programs_of(input) {
    let v = program_with(input, ">", true, "name");
    let v2 = program_with(input, "<", false, "name");
    let v3 = program_with(input, "<", true, "price");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input) {
    let none = [];
    return none;
  }
  function items_drawn() {
    "four items at four different prices; the cheapest neither first nor last";
    let drawn = list_shuffle_take(names, 4);
    let list = range_1(9);
    let prices = list_shuffle_take(list, 4);
    let low = Math.min(...prices);
    let at = list_index_of(prices, low);
    while (equal(at, 0) || equal(at, 3)) {
      let list2 = range_1(9);
      prices = list_shuffle_take(list2, 4);
      low = Math.min(...prices);
      at = list_index_of(prices, low);
    }
    function item_at(name, i) {
      let item = {
        name,
        price: prices[i],
      };
      return item;
    }
    let items = drawn.map(item_at);
    return items;
  }
  function inputs_get() {
    "four inputs, four items each";
    let inputs = [];
    for (let i = 0; less_than(i, 4); i++) {
      inputs.push({
        items: items_drawn(),
      });
    }
    list_shuffle(inputs);
    return inputs;
  }
  function above(root, context) {
    "Smallest number and Each rise, as objects remembered, then the cheapest kept whole";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_smallest,
      ["", "if (a[i] < small) { small = a[i]; }", " keeps the smallest number"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_rises,
      [
        "",
        "let small = a[0];",
        " starts from the first item, so the loop starts at ",
        "1",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Now the prices are compared, but ",
      "cheapest",
      " keeps the whole item, so its ",
      "name",
      " can be written out after the loop:",
    ]);
    let code = program_of({
      items: [
        {
          name: "bread",
          price: 4,
        },
        {
          name: "fish",
          price: 2,
        },
        {
          name: "oil",
          price: 6,
        },
      ],
    });
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "fish",
      " costs ",
      "2",
      ", less than any other",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The cheapest",
    "cheapest = item;",
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
