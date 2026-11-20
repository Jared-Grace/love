import { floor } from "./floor.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { divide } from "./divide.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_bin_search_program } from "./app_learn_js_bin_search_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_bin_items } from "./app_learn_js_bin_items.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_bin_search } from "./app_learn_js_lesson_bin_search.mjs";
import { app_learn_js_lesson_array_for_in_order } from "./app_learn_js_lesson_array_for_in_order.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_second_generic } from "./app_learn_js_lesson_second_generic.mjs";
export function app_learn_js_lesson_bin_unsorted() {
  arguments_assert(arguments, 0);
  ("binary search over a list not in order: the same program as Binary search, want in the list, and still it writes out false, because a step that sees a smaller middle item throws away the left half, where want may be. let a = [12, 2, 38, 5, 23, 8, 16]; let want = 12; ... writes out false");
  ("2026-11-20, approved by the human: the last of five binary search lessons. A binary search answers whether want is in a list only when the list is in order.");
  ("A set is six questions, each seven different numbers in a shuffled order and want one of them that the search misses.");
  ("The wrong program is the same search over the same numbers put in order first, which finds want and writes out true. The extra wrong answer is true.");
  ("The writing is a first draft by Claude 2026-11-20.");
  function program_of(input, way) {
    let code = app_learn_js_bin_search_program(input, way);
    return code;
  }
  function search_found(items, want) {
    "what the program writes out, worked out here so a question can be drawn where the search misses";
    let low = 0;
    let high = subtract(items.length, 1);
    while (less_than_equal(low, high)) {
      let p = divide(low + high, 2);
      let middle = floor(p);
      if (equal(items[middle], want)) {
        return true;
      }
      if (less_than(items[middle], want)) {
        low = middle + 1;
      } else {
        high = subtract(middle, 1);
      }
    }
    return false;
  }
  function input_draw() {
    "seven numbers shuffled, and want one of them that the search misses";
    while (true) {
      let list = app_learn_js_bin_items();
      let items = list_shuffle_take(list, 7);
      let want = list_shuffle_take(items, 1)[0];
      let b = search_found(items, want);
      if (not(b)) {
        let input = {
          items,
          want,
        };
        return input;
      }
    }
  }
  function inputs_get() {
    "six questions";
    let inputs = [];
    for (let k = 0; less_than(k, 6); k++) {
      let v = input_draw();
      inputs.push(v);
    }
    return inputs;
  }
  function extra_answers(input2) {
    "found";
    let r = ["true"];
    return r;
  }
  function above(root, context, example) {
    "the search and a list in order remembered, then the search missing an item in a list out of order";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_bin_search,
      [
        "when ",
        "a[middle]",
        " is smaller than ",
        "want",
        ", the search looks only to the right of it",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_in_order,
      ["a list is in order when each item is smaller than the one after it"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Looking only to the right is safe only when the list is in order. Here ",
      "12",
      " is in the list, but the first middle item is ",
      "5",
      ", so the search looks right of it, and ",
      "12",
      " is on the left:",
    ]);
    example(box_three, {
      items: [12, 2, 38, 5, 23, 8, 16],
      want: 12,
    });
    app_learn_js_div_cycle_code(box_three, [
      "The same numbers in order, and the search finds ",
      "12",
      ". A binary search needs a list in order:",
    ]);
    example(box_three, {
      items: [2, 5, 8, 12, 16, 23, 38],
      want: 12,
    });
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Search a list out of order",
    "a[middle] < want",
  );
  let lesson = app_learn_js_lesson_second_generic({
    name_id,
    above,
    inputs_get,
    program_of,
    ways: ["right", "sorted"],
    extra_answers,
  });
  return lesson;
}
