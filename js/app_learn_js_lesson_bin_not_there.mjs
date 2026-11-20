import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_bin_search_program } from "./app_learn_js_bin_search_program.mjs";
import { app_learn_js_bin_items } from "./app_learn_js_bin_items.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_bin_search } from "./app_learn_js_lesson_bin_search.mjs";
import { app_learn_js_lesson_while_less_equal } from "./app_learn_js_lesson_while_less_equal.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_second_generic } from "./app_learn_js_lesson_second_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_learn_js_lesson_bin_not_there() {
  arguments_assert(arguments, 0);
  ("binary search when goal is not in the list: low and high cross, low <= high turns false, the loop ends, and found is still the false it started as. let a = [2, 5, 8, 12, 16, 23, 38]; let goal = 20; ... writes out false");
  ("2026-11-20, approved by the human: the fourth of five binary search lessons. It also shows why the loop asks <= and not <: a goal found only where low and high meet would be missed.");
  ("A set is six questions over seven items in order: three goals not in the list, and three found only on the last step, where low and high are the same.");
  ("The wrong programs are low < high in place of low <= high (misses the last item), > in place of < (the wrong half), and found starting at true (added to the plan: when goal is not there no other wrong program writes out anything but false, so without it those questions would have no wrong program to offer). The extra wrong answer is true.");
  ("The writing is a first draft by Claude 2026-11-20.");
  function program_of(input, way) {
    let code = app_learn_js_bin_search_program(input, way);
    return code;
  }
  function input_absent() {
    "seven items in order, and the goal a number from 0 to 41 that is not one of them";
    let items = app_learn_js_bin_items();
    let outside = [];
    for (let n = 0; less_than_equal(n, 41); n++) {
      let b = items.includes(n);
      if (not(b)) {
        outside.push(n);
      }
    }
    let goal = list_shuffle_take(outside, 1)[0];
    let input = {
      items,
      goal,
    };
    return input;
  }
  function input_last(index) {
    "seven items in order, and the goal the item at an index found only on the third step";
    let items = app_learn_js_bin_items();
    let input = {
      items,
      goal: items[index],
    };
    return input;
  }
  function inputs_get() {
    "three not there, three found where low and high meet, in a shuffled order";
    let indexes = list_shuffle_take([0, 2, 4, 6], 3);
    let v = input_absent();
    let v2 = input_absent();
    let v3 = input_absent();
    let inputs = [v, v2, v3];
    for (let index of indexes) {
      let v4 = input_last(index);
      inputs.push(v4);
    }
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function extra_answers(input2) {
    "found";
    let r = ["true"];
    return r;
  }
  function above(root, context, example) {
    "the search and <= remembered, then a goal that is not there, then why <=";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_bin_search,
      [
        "the search repeats one step while ",
        "low <= high",
        " and stops with ",
        "break;",
        " when it finds ",
        "goal",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_while_less_equal,
      ["", "<=", " is true when the two sides are the same too"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "When ",
      "goal",
      " is not in the list, each step leaves less to look at, until ",
      "low",
      " is past ",
      "high",
      ". Then ",
      "low <= high",
      " is false, the loop ends, and ",
      "found",
      " is still ",
      "false",
      ":",
    ]);
    example(box_three, {
      items: [2, 5, 8, 12, 16, 23, 38],
      goal: 20,
    });
    app_learn_js_div_cycle_code(box_three, [
      "Here ",
      "goal",
      " is found on the last step, when ",
      "low",
      " and ",
      "high",
      " are both 4. With ",
      "low < high",
      " the loop would end before that step:",
    ]);
    example(box_three, {
      items: [2, 5, 8, 12, 16, 23, 38],
      goal: 16,
    });
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "When it is not there",
    "low <= high",
  );
  let lesson = app_learn_js_lesson_second_generic({
    name_id,
    above,
    inputs_get,
    program_of,
    ways: ["right", fn_name("less_than"), "wrong_side", "start_true"],
    extra_answers,
  });
  return lesson;
}
