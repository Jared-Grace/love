import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_expression_round_up } from "./app_code_lesson_expression_round_up.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_egg_boxes() {
  arguments_assert(arguments, 0);
  ("how many boxes of 12 hold some eggs: let exact = eggs / 12; let boxes = Math.ceil(exact); - dividing rounded UP, because a box that is not full is still a box. Chosen by the human 2026-09-30 as the next formula lesson; in DSA it is how many pages or chunks a list of items splits into");
  ("Two short lines rather than one: let boxes = Math.ceil(eggs / 12); is 33 characters, past the 30 a code line may be, and it asks for the dividing and the rounding at once. Not picked: the whole-number trick Math.floor((eggs + 11) / 12), which is right but asks the learner to take a trick on trust.");
  ("The name exact says what the division gives: the boxes needed if a box could be cut, 2.5 for 30 eggs. Not picked: share, which reads as dividing between people.");
  ("Every screen asks about 24, the one count that fills its boxes exactly, where rounding up changes nothing; the other three are from four counts that leave a box part full. The answers all differ, so the quiz choices do too.");
  ("The writing is a first draft, not yet the human's, 2026-09-30.");
  let names = ["eggs"];
  let eggs = "eggs";
  let exact = "exact";
  let boxes = "boxes";
  let twelve = "12";
  let ceil = "Math.ceil";
  let slash = js_operator_division_symbol();
  let same = js_operator_triple_equal_symbol();
  let divided = js_code_binary_spaced_nb(eggs, slash, twelve);
  let line_exact = js_code_let_statement(exact, divided);
  let rounded = js_code_call_args(ceil, [exact]);
  let line_boxes = js_code_let_statement(boxes, rounded);
  let step = {
    middle: [line_exact, line_boxes],
    logged: [boxes],
  };
  let remember_call = js_code_call_args(ceil, ["3.2"]);
  let statement = js_code_console_log_statement(remember_call);
  let remember_lines = [statement];
  function values_get() {
    "24 every time, and three of four counts that leave a box part full, in a fresh order each screen";
    let ordinary = list_shuffle_take([[30], [40], [50], [70]], 3);
    let all = list_concat([[24]], ordinary);
    list_shuffle(all);
    return all;
  }
  let full = js_code_binary_result_nb("24", slash, twelve, "2");
  let part = js_code_binary_result_nb("30", slash, twelve, "2.5");
  let left = js_code_call_args(ceil, ["2.5"]);
  let up = js_code_binary_spaced_nb(left, same, "3");
  let left2 = js_code_call_args(ceil, ["2"]);
  let kept = js_code_binary_spaced_nb(left2, same, "2");
  let lesson = app_code_lesson_statement_formula({
    words: "Boxes for eggs",
    title_code: line_boxes,
    names,
    values_get,
    example_values: [30],
    step,
    remember_lesson: app_code_lesson_expression_round_up,
    remember_parts: [
      "we can round a number up to a whole number with ",
      ceil,
      ":",
    ],
    remember_lines,
    explain: [
      ["Eggs come in boxes of 12"],
      ["24 eggs fill 2 boxes:"],
      ["", full],
      app_code_explain_container_next,
      ["How many boxes do 30 eggs need?"],
      ["", part],
      ["But we cannot use half a box"],
      ["2 boxes hold only 24 eggs, so 6 eggs would be left over"],
      ["So we need 3 boxes, and one of them is not full"],
      app_code_explain_container_next,
      ["We round the boxes up:"],
      ["", up],
      ["When the eggs fill the boxes exactly, rounding up changes nothing:"],
      ["", kept],
      ["Here is code that finds how many boxes the eggs need:"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
