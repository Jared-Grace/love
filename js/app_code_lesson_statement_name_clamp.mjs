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
  ("keeping a square on a board of squares 0 to 9: let not_low = Math.max(n, 0); let n2 = Math.min(not_low, 9); - picked by the human 2026-10-02 from a list of next lessons. In DSA it is clamping, keeping an index or a value between two bounds.");
  ("Two lines, because let n2 = Math.min(Math.max(n, 0), 9); is longer than 30 characters, and it nests one call inside another, which no lesson has taught yet. The first line's name says what Math.max with 0 makes sure of: the square is not too low. Not picked: low, which reads as the low bound itself; kept or square for the answer, which put the second line past 30 characters; n2 says it is n again, made to fit.");
  ("Math.max for the low edge and Math.min for the high edge is the part a learner gets backwards, since max sounds like the top. So the writing works each call on a square outside its edge and a square inside, and says which edge each one guards.");
  ("The reminder quotes Larger and the lesson before it in their own shape, the call beside what it is, as the human's rule of 2026-10-01 asks: a reminder quotes only the exact code a lesson taught.");
  ("Every screen asks one square below the board, one past it, and two on it, so the answers 0, 9 and two others all differ.");
  ("The writing is a first draft, not yet the human's, 2026-10-02.");
  let names = ["n"];
  let n = "n";
  let not_low = "not_low";
  let n2 = "n2";
  let max_name = "Math.max";
  let min_name = "Math.min";
  let raised = js_code_call_args(max_name, [n, "0"]);
  let line_not_low = js_code_let_statement(not_low, raised);
  let lowered = js_code_call_args(min_name, [not_low, "9"]);
  let line_n = js_code_let_statement(n2, lowered);
  let step = {
    middle: [line_not_low, line_n],
    logged: [n2],
  };
  function remember_lines(box) {
    "Larger and Smaller in their own shape, the call beside what it is";
    let larger = js_code_call_args(max_name, ["3", "8"]);
    html_div_cycle_code(box, ["", larger, " is ", "8"]);
    let smaller = js_code_call_args(min_name, ["3", "8"]);
    html_div_cycle_code(box, ["", smaller, " is ", "3"]);
  }
  function values_get() {
    "one square below the board, one past it, and two on it, in a fresh order each screen";
    let below = list_shuffle_take([[-3], [-1]], 1);
    let above = list_shuffle_take([[12], [15]], 1);
    let inside = list_shuffle_take([[4], [7], [2], [5]], 2);
    let outside = list_concat(below, above);
    let all = list_concat(outside, inside);
    list_shuffle(all);
    return all;
  }
  let max_below = js_code_call_args(max_name, ["-3", "0"]);
  let max_inside = js_code_call_args(max_name, ["4", "0"]);
  let min_above = js_code_call_args(min_name, ["12", "9"]);
  let min_inside = js_code_call_args(min_name, ["4", "9"]);
  let max_n = js_code_call_args(max_name, [n, "0"]);
  let min_n = js_code_call_args(min_name, [n, "9"]);
  let lesson = app_code_lesson_statement_formula({
    words: "Keep a square on the board",
    title_code: line_n,
    names,
    values_get,
    example_values: [12],
    step,
    remember_lesson: app_code_lesson_expression_larger,
    remember_parts: ["we can find the larger and the smaller of two numbers:"],
    remember_lines,
    explain: [
      ["Suppose a board has squares numbered ", "0", " - ", "9"],
      ["A piece that would move past square ", "9", " stops at square ", "9"],
      [
        "And a piece that would move before square ",
        "0",
        " stops at square ",
        "0",
      ],
      app_code_explain_container_next,
      ["", max_n, " is never less than ", "0", ":"],
      ["", max_below, " is ", "0"],
      ["", max_inside, " is ", "4"],
      ["So ", max_name, " with ", "0", " guards the low edge"],
      app_code_explain_container_next,
      ["", min_n, " is never more than ", "9", ":"],
      ["", min_above, " is ", "9"],
      ["", min_inside, " is ", "4"],
      ["So ", min_name, " with ", "9", " guards the high edge"],
      app_code_explain_container_next,
      ["Suppose the square is called ", n],
      ["Here is code that keeps square ", n, " on the board:"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
