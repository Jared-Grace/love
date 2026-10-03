import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_expression_larger } from "./app_code_lesson_expression_larger.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_clamp() {
  arguments_assert(arguments, 0);
  ("keeping a heater's setting between 10 and 30 degrees: let low_ok = Math.max(t, 10); let t2 = Math.min(low_ok, 30); - picked by the human 2026-10-02 from a list of next lessons. In DSA it is clamping, keeping an index or a value between two bounds.");
  ("A heater, asked for by the human 2026-10-03, because a temperature asked for can be any number, far outside on either side. The first draft was a board of squares 0 to 9: a board reads as two-dimensional, a grid, while this keeps one number. Not picked: volume, which steps up and down by 1 and so is only ever one past an edge; a test score out of 100, a slider dragged past its end, and a number typed into a box.");
  ("Celsius and Fahrenheit both, asked for by the human 2026-10-03: the code keeps Celsius, and the first sentence says the same range in Fahrenheit, so a reader who thinks in either knows how warm the edges are. Not picked: a screen in Fahrenheit as well, which would change the line the title shows, and so the lesson, from one screen to the next.");
  ("Two lines, because let t2 = Math.min(Math.max(t, 10), 30); is longer than 30 characters, and it nests one call inside another, which no lesson has taught yet. The first line's name says what Math.max with 10 makes sure of: the low edge is kept. Not picked: not_low, which put the second line one past 30 characters; low, which reads as the low bound itself; t2 says it is t again, made to fit.");
  ("Math.max for the low edge and Math.min for the high edge is the part a learner gets backwards, since max sounds like the top. So the writing works each call on a temperature outside its edge and one inside, and says which edge each one guards.");
  ("The reminder quotes Larger and the lesson before it in their own shape, the call beside what it is, as the human's rule of 2026-10-01 asks: a reminder quotes only the exact code a lesson taught.");
  ("Every screen asks one temperature below the range, one above it, and two in it, so the answers 10, 30 and two others all differ.");
  ("The writing is a first draft, not yet the human's, 2026-10-03.");
  let names = ["t"];
  let t = "t";
  let low_ok = "low_ok";
  let t2 = "t2";
  let max_name = "Math.max";
  let min_name = "Math.min";
  let raised = js_code_call_args(max_name, [t, "10"]);
  let line_low_ok = js_code_let_statement(low_ok, raised);
  let lowered = js_code_call_args(min_name, [low_ok, "30"]);
  let line_t = js_code_let_statement(t2, lowered);
  let step = {
    middle: [line_low_ok, line_t],
    logged: [t2],
  };
  function remember_lines(box) {
    "Larger and Smaller in their own shape, the call beside what it is";
    let larger = js_code_call_args(max_name, ["3", "8"]);
    html_div_cycle_code(box, ["", larger, " is ", "8"]);
    let smaller = js_code_call_args(min_name, ["3", "8"]);
    html_div_cycle_code(box, ["", smaller, " is ", "3"]);
  }
  function values_get() {
    "one temperature below the range, one above it, and two in it, in a fresh order each screen";
    let below = list_shuffle_take([[5], [-2]], 1);
    let above = list_shuffle_take([[45], [35]], 1);
    let inside = list_shuffle_take([[18], [22], [25], [12]], 2);
    let outside = list_concat(below, above);
    let all = list_concat(outside, inside);
    list_shuffle(all);
    return all;
  }
  let max_below = js_code_call_args(max_name, ["5", "10"]);
  let max_inside = js_code_call_args(max_name, ["22", "10"]);
  let min_above = js_code_call_args(min_name, ["45", "30"]);
  let min_inside = js_code_call_args(min_name, ["22", "30"]);
  let max_t = js_code_call_args(max_name, [t, "10"]);
  let min_t = js_code_call_args(min_name, [t, "30"]);
  let lesson = app_code_lesson_statement_formula({
    words: "Keep a heater's setting in range",
    title_code: line_t,
    names,
    values_get,
    example_values: [45],
    step,
    remember_lesson: app_code_lesson_expression_larger,
    remember_parts: ["we can find the larger and the smaller of two numbers:"],
    remember_lines,
    explain: [
      [
        "Suppose a heater can be set from ",
        "10",
        " to ",
        "30",
        " degrees Celsius, which is ",
        "50",
        " to ",
        "86",
        " degrees Fahrenheit",
      ],
      ["Someone who asks for ", "45", " degrees gets ", "30"],
      ["And someone who asks for ", "5", " degrees gets ", "10"],
      app_code_explain_container_next,
      ["", max_t, " is never less than ", "10", ":"],
      ["", max_below, " is ", "10"],
      ["", max_inside, " is ", "22"],
      ["So ", max_name, " with ", "10", " guards the low edge"],
      app_code_explain_container_next,
      ["", min_t, " is never more than ", "30", ":"],
      ["", min_above, " is ", "30"],
      ["", min_inside, " is ", "22"],
      ["So ", min_name, " with ", "30", " guards the high edge"],
      app_code_explain_container_next,
      ["Suppose the temperature asked for is called ", t],
      ["Here is code that keeps ", t, " in the heater's range:"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
