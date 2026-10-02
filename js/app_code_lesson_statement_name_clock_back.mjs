import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_clock_next } from "./app_code_lesson_statement_name_clock_next.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_clock_back() {
  arguments_assert(arguments, 0);
  ("the hour before this one on a 24-hour clock: let earlier = hour + 23; let back = earlier % 24; - picked by the human 2026-10-02 from a list of next lessons. In DSA it is stepping back round a ring, the place before index i in a list of length n, which is (i + n - 1) % n.");
  ("Going back one hour is written as going forward 23, because in JavaScript the remainder keeps the sign of the number divided: (0 - 1) % 24 is -1, not 23. Adding 23 never makes a negative number, so the remainder lesson already taught is enough. The -1 is not shown in the writing: it is a fact about JavaScript a learner would have to be told, and the lesson works without it.");
  ("On the 24-hour clock of 0 to 23, as the previous lesson, Next hour on a 24-hour clock, is, so that lesson is the reminder and the two are read as a pair. Not picked: the 12-hour face, because the face lesson counts 1 to 12 and going back from 1 to 12 would need a different formula; nor a clock of 0 to 11, which no earlier lesson shows.");
  ("Two short lines, as the previous lesson has. Not picked: let back = (hour + 23) % 24; which asks for the plus and the remainder at once.");
  ("Every screen asks about 0, because that is the one hour the whole lesson is about; the other three are from four ordinary hours, where the % only takes 24 back off. The five answers differ.");
  ("The writing is a first draft, not yet the human's, 2026-10-02.");
  let names = ["hour"];
  let hour = "hour";
  let earlier = "earlier";
  let back = "back";
  let day = "24";
  let plus = js_operator_plus_symbol();
  let percent = js_operator_percent_symbol();
  let added = js_code_binary_spaced_nb(hour, plus, "23");
  let line_earlier = js_code_let_statement(earlier, added);
  let wrapped = js_code_binary_spaced_nb(earlier, percent, day);
  let line_back = js_code_let_statement(back, wrapped);
  let step = {
    middle: [line_earlier, line_back],
    logged: [back],
  };
  let later = "later";
  let next = "next";
  let next_added = js_code_binary_spaced_nb(hour, plus, "1");
  let line_later = js_code_let_statement(later, next_added);
  let next_wrapped = js_code_binary_spaced_nb(later, percent, day);
  let line_next = js_code_let_statement(next, next_wrapped);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [[hour, 23]],
    [line_later, line_next],
    [next],
  );
  function values_get() {
    "0 every time, and three of four ordinary hours, in a fresh order each screen";
    let ordinary = list_shuffle_take([[10], [5], [15], [23]], 3);
    let all = list_concat([[0]], ordinary);
    list_shuffle(all);
    return all;
  }
  let code = js_code_binary_result_nb("10", plus, "23", "33");
  let code2 = js_code_binary_result_nb("33", percent, day, "9");
  let code3 = js_code_binary_result_nb("0", plus, "23", "23");
  let code4 = js_code_binary_result_nb("23", percent, day, "23");
  let lesson = app_code_lesson_statement_formula({
    words: "Previous hour on a 24-hour clock",
    title_code: line_back,
    names,
    values_get,
    example_values: [0],
    step,
    remember_lesson: app_code_lesson_statement_name_clock_next,
    remember_parts: [
      "we can find the next hour on a clock of ",
      "0",
      " to ",
      "23",
      ":",
    ],
    remember_lines,
    explain: [
      ["One hour before ", "10", " is ", "9"],
      ["One hour before ", "0", " (12 AM midnight) is ", "23", " (11 PM)"],
      app_code_explain_container_next,
      ["A day has ", "24", " hours"],
      [
        "So going back ",
        "1",
        " hour is the same as going forward ",
        "23",
        " hours",
      ],
      ["Going forward ", "23", " hours from ", "10", ":"],
      ["", code],
      ["But there is no hour ", "33"],
      [
        "The remainder (",
        percent,
        ") of dividing by ",
        "24",
        " brings it back between ",
        "0",
        " and ",
        "23",
        ":",
      ],
      ["", code2],
      app_code_explain_container_next,
      ["Going forward ", "23", " hours from ", "0", ":"],
      ["", code3],
      ["", code4],
      ["So one hour before ", "0", " is ", "23"],
      app_code_explain_container_next,
      [
        "Here's code that finds the previous hour and makes sure it is between ",
        "0",
        " and ",
        "23",
        ":",
      ],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
