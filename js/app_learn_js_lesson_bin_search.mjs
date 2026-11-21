import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_bin_search_program } from "./app_learn_js_bin_search_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_bin_items } from "./app_learn_js_bin_items.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_bin_step } from "./app_learn_js_lesson_bin_step.mjs";
import { app_learn_js_lesson_while_two_meet } from "./app_learn_js_lesson_while_two_meet.mjs";
import { app_learn_js_lesson_while_and } from "./app_learn_js_lesson_while_and.mjs";
import { app_learn_js_lesson_statement_name_not } from "./app_learn_js_lesson_statement_name_not.mjs";
import { app_learn_js_lesson_array_last_index } from "./app_learn_js_lesson_array_last_index.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_second_generic } from "./app_learn_js_lesson_second_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_learn_js_lesson_bin_search() {
  arguments_assert(arguments, 0);
  ("the whole binary search: One step of a search inside while (low <= high && !found), so the loop stops once found, high starting at a.length - 1. Seven items take at most three steps.");
  ("2026-11-20, approved by the human: the third of five binary search lessons. Every goal here is in the list, so the program always writes out true; the questions that teach are the ones asking which program wrote that out.");
  ("A set is six questions over seven items in order, goal at the indexes 0, 1, 2, 4, 5 and 6 in a shuffled order, so the search takes two or three steps. Index 3, found on the first step, is shown above but not asked: there every wrong program also finds it, so no wrong program could be offered.");
  ("The wrong programs are > in place of < (looks in the wrong half, so writes out false) and low < high in place of low <= high (stops before looking at the last item, so writes out false when goal is found only on the third step). The plan also named leaving out break (now leaving out && !found) and low = middle; both can run forever, so neither is offered. The extra wrong answer is false.");
  ("The writing is a first draft by Claude 2026-11-20.");
  function program_of(input, way) {
    let code = app_learn_js_bin_search_program(input, way);
    return code;
  }
  function inputs_get() {
    "six questions, goal at every index but the middle one";
    let indexes = list_shuffle_take([0, 1, 2, 4, 5, 6], 6);
    let inputs = [];
    for (let index of indexes) {
      let items = app_learn_js_bin_items();
      inputs.push({
        items,
        goal: items[index],
      });
    }
    return inputs;
  }
  function extra_answers(input2) {
    "not found";
    let r = ["false"];
    return r;
  }
  function above(root, context, example) {
    "the step, a while whose two names meet, && in a while, ! and the last index remembered, then where low and high start, then the step in a loop";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_bin_step,
      [
        "one step either finds ",
        "goal",
        " in the middle, or moves ",
        "low",
        " or ",
        "high",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_while_two_meet,
      ["a ", "while", " can move two names toward each other until they meet"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_three,
      context,
      app_learn_js_lesson_while_and,
      [
        "a ",
        "while",
        " with ",
        "&&",
        " repeats only while both sides are true",
      ],
    );
    let box_five = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_five,
      context,
      app_learn_js_lesson_statement_name_not,
      ["", "!found", " is ", "true", " when ", "found", " is ", "false"],
    );
    let box_six = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_six,
      context,
      app_learn_js_lesson_array_last_index,
      [
        "array indexes start at ",
        "0",
        ", so ",
        "a.length - 1",
        " is the index of the last item",
      ],
    );
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "At first the goal can be anywhere in the array, so ",
      "low",
      " starts at the first index, ",
      "0",
      ", and ",
      "high",
      " at the last index, ",
      "a.length - 1",
      ".",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "Repeat the step while ",
      "low <= high",
      ", that is, while some part of the array is left to look at, and while ",
      "!found",
      ". When the middle item is ",
      "goal",
      ", ",
      "found = true;",
      ", so ",
      "low <= high && !found",
      " is false and the search stops. Here it is found on the first step:",
    ]);
    example(box_four, {
      items: [2, 5, 8, 12, 16, 23, 38],
      goal: 12,
    });
    app_learn_js_div_cycle_code(box_four, [
      "Here it takes three steps. On the last one ",
      "low",
      " and ",
      "high",
      " are the same, and one item is left:",
    ]);
    example(box_four, {
      items: [2, 5, 8, 12, 16, 23, 38],
      goal: 38,
    });
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Binary search",
    "while (low <= high && !found)",
  );
  let lesson = app_learn_js_lesson_second_generic({
    name_id,
    above,
    inputs_get,
    program_of,
    ways: ["right", "wrong_side", fn_name("less_than")],
    extra_answers,
  });
  return lesson;
}
