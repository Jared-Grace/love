import { app_code_lesson_statement_name_clock_face } from "./app_code_lesson_statement_name_clock_face.mjs";
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
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_clock_next() {
  arguments_assert(arguments, 0);
  ("the hour after this one on a clock: let later = hour + 1; let next = later % 24; - after 23 comes 0, not 24, because the remainder of dividing by 24 starts the count again");
  ("Chosen for later use: going round a list and back to its start, the next place in a ring, and the day of the week a number of days from now are all this line, once lists are taught. A clock is used first because every learner already knows the hour after 23 is 0, so the formula explains a thing they know rather than a thing they do not. Picked by the human from a list of formulas, 2026-09-28.");
  ("Taught after the clock face of 1 to 12, at the human's word, 2026-09-30: the face is the clock people know, so it comes first, and this one is the same idea on a clock that starts at 0. It is kept because it counts from 0 as a list does, and a list is where the formula is used later. Its reminder is the face lesson, so the two are read as a pair.");
  ("Two short lines rather than one, as the formulas split into short statements are. Not picked: let next = (hour + 1) % 24; which the bracket lessons would allow but which asks for the plus and the remainder at once.");
  ("Every screen asks about 23, because that is the one hour the whole lesson is about; the other three are from four ordinary hours, where the % changes nothing, so the learner sees both. The five answers differ.");
  ("The writing is a first draft, not yet the human's, 2026-09-28.");
  let names = ["hour"];
  let hour = "hour";
  let later = "later";
  let next = "next";
  let day = "24";
  let plus = js_operator_plus_symbol();
  let percent = js_operator_percent_symbol();
  let added = js_code_binary_spaced_nb(hour, plus, "1");
  let line_later = js_code_let_statement(later, added);
  let wrapped = js_code_binary_spaced_nb(later, percent, day);
  let line_next = js_code_let_statement(next, wrapped);
  let step = {
    middle: [line_later, line_next],
    logged: [next],
  };
  let face_remainder = js_code_binary_spaced_nb(hour, percent, "12");
  let line_past = js_code_let_statement("past_12", face_remainder);
  let face_added = js_code_binary_spaced_nb("past_12", plus, "1");
  let line_face = js_code_let_statement(next, face_added);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [[hour, 12]],
    [line_past, line_face],
    [next],
  );
  function values_get() {
    "23 every time, and three of four ordinary hours, in a fresh order each screen";
    let ordinary = list_shuffle_take([[8], [14], [20], [5]], 3);
    let all = list_concat([[23]], ordinary);
    list_shuffle(all);
    return all;
  }
  let code = js_code_binary_result_nb("9", plus, "1", "10");
  let code2 = js_code_binary_result_nb("23", plus, "1", "24");
  let code3 = js_code_binary_result_nb("24", percent, day, "0");
  let code4 = js_code_binary_result_nb("10", percent, day, "10");
  let lesson = app_code_lesson_statement_formula({
    words: "Next hour on a 24-hour clock",
    title_code: line_next,
    names,
    values_get,
    example_values: [23],
    step,
    remember_lesson: app_code_lesson_statement_name_clock_face,
    remember_parts: ["we can find the next hour on a clock of 1 to 12:"],
    remember_lines,
    explain: [
      ["Some clocks count 24 hours, 0 to 23, instead of 1 to 12"],
      ["One hour after 9 is 10:"],
      ["", code],
      app_code_explain_container_next,
      ["What is one hour after 23?"],
      ["", code2],
      ["But there is no hour 24. The clock starts again at 0"],
      ["The remainder (", percent, ") of dividing by 24 does that:"],
      ["", code3],
      ["And it leaves every other hour as it was:"],
      ["", code4],
      ["", line_later],
      ["", line_next],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
