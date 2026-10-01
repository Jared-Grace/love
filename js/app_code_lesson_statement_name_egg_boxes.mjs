import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
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
  ("The second and third boxes are the human's wording, 2026-09-30; the first box is still a draft.");
  let names = ["eggs"];
  let eggs = "eggs";
  let exact = "exact";
  let boxes = "boxes";
  let twelve = "12";
  let ceil_name = "Math.ceil";
  let slash = js_operator_division_symbol();
  let same = js_operator_triple_equal_symbol();
  let divided = js_code_binary_spaced_nb(eggs, slash, twelve);
  let line_exact = js_code_let_statement(exact, divided);
  let rounded = js_code_call_args(ceil_name, [exact]);
  let line_boxes = js_code_let_statement(boxes, rounded);
  let step = {
    middle: [line_exact, line_boxes],
    logged: [boxes],
  };
  ("The reminder keeps the call out of console.log: let whole = Math.ceil(3.2); then console.log(whole);. The rounding lesson tested Math.ceil on its own and never inside console.log, and a learner was puzzled by the same nesting with Math.abs, reported by the human 2026-10-01. Not picked: the call inside console.log, which is two calls nested where the lesson taught one.");
  let whole = "whole";
  let remember_call = js_code_call_args(ceil_name, ["3.2"]);
  let remember_line = js_code_let_statement(whole, remember_call);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [],
    [remember_line],
    [whole],
  );
  function values_get() {
    "24 every time, and three of four counts that leave a box part full, in a fresh order each screen";
    let ordinary = list_shuffle_take([[30], [40], [50], [70]], 3);
    let all = list_concat([[24]], ordinary);
    list_shuffle(all);
    return all;
  }
  let full = js_code_binary_result_nb("24", slash, twelve, "2");
  let part = js_code_binary_result_nb("30", slash, twelve, "2.5");
  let left = js_code_call_args(ceil_name, ["2.5"]);
  let up = js_code_binary_spaced_nb(left, same, "3");
  let left2 = js_code_call_args(ceil_name, ["2"]);
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
      ceil_name,
      ":",
    ],
    remember_lines,
    explain: [
      ["Eggs come in boxes of ", "12"],
      ["", "24", " eggs fill ", "2", " boxes:"],
      ["", full],
      app_code_explain_container_next,
      ["How many boxes do ", "30", " eggs need?"],
      ["", part],
      ["But there are no half-sized boxes"],
      ["We only have full-sized boxes"],
      [
        "If we tried to put ",
        "30",
        " eggs into ",
        "2",
        " boxes, then the ",
        "2",
        " boxes could only hold ",
        "24",
        " eggs, so ",
        "30 - 24 === 6",
        " eggs would be left over",
      ],
      ["So we need ", "3", " boxes to hold ", "30", " eggs"],
      [
        "We could put ",
        "24",
        " eggs to fill up ",
        "2",
        " boxes, and then we could put the remaining ",
        "6",
        " eggs to partially fill the third box",
      ],
      [
        "The third box would only have ",
        "6",
        " out of ",
        "12",
        " eggs, so the third box would not be full",
      ],
      app_code_explain_container_next,
      ["How do we calculate the number of whole boxes we need?"],
      [
        "First we calculate the number of partial boxes by dividing by the size of each box (",
        "/ 12",
        "):",
      ],
      ["", part],
      ["Then we round up:"],
      ["", up],
      [
        "When the eggs fill the boxes exactly, then we'll have a whole number like ",
        "2",
      ],
      ["Rounding up a whole number changes nothing:"],
      ["", kept],
      ["Here is code that finds how many boxes the eggs need:"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
