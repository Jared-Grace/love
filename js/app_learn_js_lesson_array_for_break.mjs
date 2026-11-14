import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_at_first } from "./app_learn_js_lesson_array_for_at_first.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_break() {
  arguments_assert(arguments, 0);
  ('the first joy found by stopping the loop there: let at = -1; for (let i = 0; i < a.length; i++) { if (a[i] === "joy") { at = i; break; } } console.log(at); - break ends the loop at once, so no later joy can set at again');
  ("2026-11-14, at the human's asking: break, the new idea, after the first joy was found with && at === -1, so the answer is one the student already knows and only the way there is new. In the step-through, the break line is pressed, then said complete, and then the line below the loop is pressed. Questions hold joy twice, twice, once and not at all.");
  ("The wrong answers are the loop without break (the last joy), break before at = i; (the loop ends before at is set, so -1 every time), and keeping the item instead of its index. The writing is a first draft by Claude 2026-11-14.");
  let items_twice = ["joy", "love", "joy", "peace"];
  let items_twice_later = ["love", "joy", "peace", "joy"];
  function above(root, context, example, example_by_hand, walk) {
    "the first joy with && remembered, then break";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_at_first,
      [
        "adding ",
        "&& at === -1",
        " to the ",
        "if",
        " lets only the first ",
        "joy",
        " set ",
        "at",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "break;",
      " ends the loop at once. The computer goes on below the loop's ",
      "}",
      ", so no later ",
      "joy",
      " can set ",
      "at",
      " again:",
    ]);
    example(box_two, items_twice);
    example(box_two, items_twice_later);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Stop at the first joy",
    "break;",
  );
  let condition = 'a[i] === "joy"';
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_repeated: "joy",
    repeat_counts: [2, 2, 1, 0],
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "at",
        keep_start: -1,
        keep_set: ["at = i;", "break;"],
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "at",
        keep_start: -1,
        keep_set: "at = i;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "at",
        keep_start: -1,
        keep_set: ["break;", "at = i;"],
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "at",
        keep_start: -1,
        keep_set: ["at = a[i];", "break;"],
      },
    ],
  });
  return lesson;
}
