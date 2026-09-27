import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_multiply } from "./app_code_lesson_statement_name_multiply.mjs";
export function app_code_lesson_statement_name_sum_to() {
  arguments_assert(arguments, 0);
  ("the sum 1 + 2 + ... + n in three short lines: let next = n + 1; let product = n * next; let sum = product / 2;");
  ("Chosen for later use: finding the one number missing from 1 to n compares a list's sum with this one, and it is the first formula whose line count stays the same however big n is.");
  ("n * (n + 1) is always even, so every sum is whole, and the five sums differ.");
  let names = ["n"];
  let n = list_first(names);
  let next = "next";
  let product = "product";
  let sum = "sum";
  let plus = js_operator_plus_symbol();
  let times = js_operator_asterisk_symbol();
  let slash = js_operator_division_symbol();
  let added = js_code_binary_spaced_nb(n, plus, "1");
  let line_next = js_code_let_statement(next, added);
  let multiplied = js_code_binary_spaced_nb(n, times, next);
  let line_product = js_code_let_statement(product, multiplied);
  let halved = js_code_binary_spaced_nb(product, slash, "2");
  let line_sum = js_code_let_statement(sum, halved);
  let step = {
    middle: [line_next, line_product, line_sum],
    logged: [sum],
  };
  let name_a = "a";
  let name_b = "b";
  let multiplied_ab = js_code_binary_spaced_nb(name_a, times, name_b);
  let line_ab = js_code_let_statement(product, multiplied_ab);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [name_a, 4],
      [name_b, 5],
    ],
    [line_ab],
    [product],
  );
  function values_get() {
    "four of the five, in a fresh order each screen";
    let candidates = [[5], [6], [7], [9], [10]];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let lesson = app_code_lesson_statement_formula({
    words: "Adding 1 up to n",
    names,
    values_get,
    example_values: [4],
    step,
    remember_lesson: app_code_lesson_statement_name_multiply,
    remember_parts: ["we can multiply two names and give the answer a name:"],
    remember_lines,
    explain: [
      ["To add 1 + 2 + 3 + 4 we could add one number at a time"],
      [
        "But there is a shortcut: multiply ",
        n,
        " by the number after it, then halve it",
      ],
      ["", line_next],
      ["", line_product],
      ["", line_sum],
      ["For 4 that is 4 * 5 / 2, which is 10, the same as 1 + 2 + 3 + 4:"],
    ],
    decoys: null,
  });
  return lesson;
}
