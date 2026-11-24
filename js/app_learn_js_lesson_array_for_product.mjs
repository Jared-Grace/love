import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_total } from "./app_learn_js_lesson_array_for_total.mjs";
import { app_learn_js_lesson_statement_name_times_assign } from "./app_learn_js_lesson_statement_name_times_assign.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_product() {
  arguments_assert(arguments, 0);
  ("the items of an array multiplied together: let product = 1; for (let i = 0; i < a.length; i++) { product *= a[i]; } console.log(product); writes out all the numbers of the array multiplied together");
  ("2026-11-24, at the human's asking: the lesson after Add them up, the same loop with *= in place of +=. The one new fact is that the kept name starts at 1, not 0, since anything multiplied by 0 is 0.");
  ("The numbers are 1 to 5, so the answer stays small enough to work out by hand.");
  ("The wrong answers are starting product at 0 (writes out 0), product = a[i]; (only the last number is kept) and product += a[i]; (adds them, starting from 1).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let items_two = [2, 5, 3];
  function above(root, context, example, example_by_hand, walk) {
    "add them up remembered, *= remembered, then the product";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_total,
      [
        "",
        "total",
        " starts as ",
        "0",
        " and ",
        "total += a[i];",
        " adds every number to it",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_statement_name_times_assign,
      ["", "*=", " multiplies a name by what is on its right"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "product",
      " starts as ",
      "1",
      ", not ",
      "0",
      ", because any number times ",
      "0",
      " is ",
      "0",
      ". Each run, ",
      "product *= a[i];",
      " multiplies ",
      "product",
      " by the item, so after the loop ",
      "product",
      " is all the numbers multiplied together:",
    ]);
    example(box_three, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Multiply them all",
    "product *= a[i];",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_pool: [1, 2, 3, 4, 5],
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        keep_name: "product",
        keep_start: 1,
        keep_set: "product *= a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        keep_name: "product",
        keep_start: 0,
        keep_set: "product *= a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        keep_name: "product",
        keep_start: 1,
        keep_set: "product = a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        keep_name: "product",
        keep_start: 1,
        keep_set: "product += a[i];",
      },
    ],
  });
  return lesson;
}
