import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_objects_array_lines } from "./app_learn_js_objects_array_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { range_1 } from "./range_1.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_list_cheapest } from "./app_learn_js_lesson_object_list_cheapest.mjs";
import { app_learn_js_lesson_array_for_small_at } from "./app_learn_js_lesson_array_for_small_at.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_object_list_most_for_price() {
  arguments_assert(arguments, 0);
  ("the item giving the most weight for its price: let best = items[0]; let most = best.weight / best.price; a for loop from 1 doing let each = item.weight / item.price; if (each > most) { most = each; best = item; } then console.log(best.name); writes out the name of the item that gives the most for each 1 paid");
  ("2026-11-26, at the human's asking, whose words were: a list of choices, weight and price, choosing the best price taking into account weight - then: choosing the best weight. Read as the most weight for each 1 paid, weight / price, the biggest kept; it always picks the same item as the lowest price / weight, and is easier to say. Not taken: the heaviest item alone, which is The cheapest again with > and adds nothing.");
  ("The fourth of four lessons asking a question of a list of objects, after The cheapest. The one new idea is that what is compared is worked out from two properties. It is kept in most, beside best, as Where is the smallest kept small beside at, so the if line stays short enough for a phone.");
  ("The items are grains and beans sold by weight - barley, wheat, lentils, beans, rice, oats. Each program has four, at four different prices from 1 to 9, each giving a different whole amount from 1 to 6 for each 1 paid, so weight is price times that amount and no division leaves a fraction. Drawn again until the best, the heaviest, the cheapest and the worst are four different items, so every wrong program writes out something else, and the best is not the first, so the loop has something to find. Four different items cannot all stay off the first place among four, so only the best is kept off it; best starting as items[0] still finds the others wherever they stand.");
  ("A set is four questions, shuffled.");
  ("The wrong programs compare the weight alone (the heaviest), the price alone with < (the cheapest), < in place of > (the worst), and price / weight in place of weight / price (also the worst, so it is offered only as a program going backwards). Each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-26.");
  let names = ["barley", "wheat", "lentils", "beans", "rice", "oats"];
  function program_with(input, each_of, most_of, compare) {
    "the items, best and most from the first, the loop keeping the better, then best's name written out";
    let lines = app_learn_js_objects_array_lines("items", input.items, [
      "name",
      "price",
      "weight",
    ]).concat([
      "let best = items[0];",
      "let most = " + most_of + ";",
      "for (let i = 1; i < items.length; i++) {",
      "  let item = items[i];",
      "  let each = " + each_of + ";",
      "  if (each " + compare + " most) {",
      "    most = each;",
      "    best = item;",
      "  }",
      "}",
      "console.log(best.name);",
    ]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code = program_with(
      input,
      "item.weight / item.price",
      "best.weight / best.price",
      ">",
    );
    return code;
  }
  function wrong_programs_of(input) {
    let v = program_with(input, "item.weight", "best.weight", ">");
    let v2 = program_with(input, "item.price", "best.price", "<");
    let v3 = program_with(
      input,
      "item.weight / item.price",
      "best.weight / best.price",
      "<",
    );
    let v4 = program_with(
      input,
      "item.price / item.weight",
      "best.price / best.weight",
      ">",
    );
    let programs = [v, v2, v3, v4];
    return programs;
  }
  function wrong_outputs_of(input) {
    let none = [];
    return none;
  }
  function at_most(list) {
    let top = Math.max(...list);
    let at = list.indexOf(top);
    return at;
  }
  function at_least(list) {
    let low = Math.min(...list);
    let at = list.indexOf(low);
    return at;
  }
  function fits(prices, amounts) {
    "best, heaviest, cheapest and worst four different items, the best not first";
    function lambda(p, i) {
      let p2 = multiply(p, amounts[i]);
      return p2;
    }
    let weights = prices.map(lambda);
    let v5 = at_most(amounts);
    let v6 = at_most(weights);
    let v7 = at_least(prices);
    let v8 = at_least(amounts);
    let ats = [v5, v6, v7, v8];
    let heavy_once = equal(list_unique(weights).length, 4);
    let different = equal(list_unique(ats).length, 4);
    let best_later = not_equal(v5, 0);
    let r = heavy_once && different && best_later;
    return r;
  }
  function items_drawn() {
    let list2 = range_1(9);
    let prices = list_shuffle_take(list2, 4);
    let list3 = range_1(6);
    let amounts = list_shuffle_take(list3, 4);
    while (not(fits(prices, amounts))) {
      let list4 = range_1(9);
      prices = list_shuffle_take(list4, 4);
      let list5 = range_1(6);
      amounts = list_shuffle_take(list5, 4);
    }
    let drawn = list_shuffle_take(names, 4);
    function item_at(name, i) {
      let item = {
        name,
        price: prices[i],
        weight: multiply(prices[i], amounts[i]),
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
    "The cheapest and Where is the smallest remembered, then the most for each 1 paid";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_list_cheapest,
      ["", "cheapest = item;", " keeps the whole item"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_small_at,
      ["", "small = a[i];", " and ", "at = i;", " keep two things at once"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "item.weight / item.price",
      " is how much you get for each 1 you pay. ",
      "most",
      " keeps the most so far, and ",
      "best",
      " the item that gives it:",
    ]);
    let code = program_of({
      items: [
        {
          name: "barley",
          price: 3,
          weight: 6,
        },
        {
          name: "wheat",
          price: 2,
          weight: 10,
        },
        {
          name: "lentils",
          price: 4,
          weight: 12,
        },
      ],
    });
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    let said = [
      ["", "6 / 3", " is ", "2", " for each 1 paid"],
      ["", "10 / 2", " is ", "5", " for each 1 paid"],
      ["", "12 / 4", " is ", "3", " for each 1 paid"],
    ];
    for (let line of said) {
      app_learn_js_div_cycle_code(box_three, line);
    }
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Most for the price",
    "item.weight / item.price",
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
