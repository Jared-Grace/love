import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_remainder } from "./app_code_lesson_statement_name_remainder.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_clock_face() {
  arguments_assert(arguments, 0);
  ("the hour after this one on a clock face of 1 to 12: let past_12 = hour % 12; let next = past_12 + 1; - after 12 comes 1, because 12 o'clock is 0 hours past 12");
  ("Taught before the 24-hour clock at the human's word, 2026-09-30: the goal is what is easier for a learner, and the face of 1 to 12 is the clock people know. The 24-hour lesson after it has the shape a list uses later, and reads as the same idea on a clock that starts at 0.");
  ("The name past_12 says what the remainder is on a face: how many hours past 12 o'clock it is, 0 at 12 itself. That turns the order of the two lines into something a learner can say - first how far past 12, then one more - rather than a rule about the remainder coming before the plus. Not picked: wrapped, which names what the line does rather than what the number is.");
  ("Two short lines rather than one, as the formulas split into short statements are. Not picked: let next = hour % 12 + 1; which the order lessons would allow but which asks for the remainder and the plus at once.");
  ("Every screen asks about 12, because that is the one hour the whole lesson is about; the other three are from four ordinary hours, where the remainder changes nothing. The five answers differ.");
  ("The writing is a first draft, not yet the human's, 2026-09-30.");
  let names = ["hour"];
  let hour = "hour";
  let past = "past_12";
  let next = "next";
  let twelve = "12";
  let plus = js_operator_plus_symbol();
  let percent = js_operator_percent_symbol();
  let remainder = js_code_binary_spaced_nb(hour, percent, twelve);
  let line_past = js_code_let_statement(past, remainder);
  let added = js_code_binary_spaced_nb(past, plus, "1");
  let line_next = js_code_let_statement(next, added);
  let step = {
    middle: [line_past, line_next],
    logged: [next],
  };
  let remainder_code = js_code_binary_spaced_nb("a", percent, "b");
  let line_remainder = js_code_let_statement("remainder", remainder_code);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      ["a", 20],
      ["b", 9],
    ],
    [line_remainder],
    ["remainder"],
  );
  function values_get() {
    "12 every time, and three of four ordinary hours, in a fresh order each screen";
    let ordinary = list_shuffle_take([[4], [7], [9], [2]], 3);
    let all = list_concat([[12]], ordinary);
    list_shuffle(all);
    return all;
  }
  let code = js_code_binary_result_nb("5", plus, "1", "6");
  let code2 = js_code_binary_result_nb("5", percent, twelve, "5");
  let code3 = js_code_binary_result_nb(twelve, percent, twelve, "0");
  let code4 = js_code_binary_result_nb("0", plus, "1", "1");
  let lesson = app_code_lesson_statement_formula({
    words: "Next hour on a clock",
    title_code: line_next,
    names,
    values_get,
    example_values: [12],
    step,
    remember_lesson: app_code_lesson_statement_name_remainder,
    remember_parts: [
      "we can find the remainder (",
      percent,
      ") of dividing one number by another:",
    ],
    remember_lines,
    explain: [
      ["A clock shows the hours 1 to 12"],
      ["One hour after 5 is 6:"],
      ["", code],
      app_code_explain_container_next,
      ["What is one hour after 12?"],
      ["Not 13. The clock goes back to 1"],
      ["First, how many hours past 12 is it?"],
      ["At 5 o'clock, 5 hours past 12:"],
      ["", code2],
      ["At 12 o'clock, 0 hours past 12:"],
      ["", code3],
      ["Then the next hour is one more:"],
      ["", code4],
      ["", line_past],
      ["", line_next],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
