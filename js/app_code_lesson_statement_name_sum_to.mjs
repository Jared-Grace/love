import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_between_space_nb } from "./list_between_space_nb.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_multiply } from "./app_code_lesson_statement_name_multiply.mjs";
export function app_code_lesson_statement_name_sum_to() {
  arguments_assert(arguments, 0);
  ("the sum 1 + 2 + ... + n in three short lines: let next = n + 1; let product = n * next; let sum = product / 2;");
  ("Chosen for later use: finding the one number missing from 1 to n compares a list's sum with this one, and it is the first formula whose line count stays the same however big n is.");
  ("n * (n + 1) is always even, so every sum is whole, and the five sums differ.");
  ("The writing is the human's, 2026-09-27: why a formula is wanted - 1 + 2 + 3 + 4 is 3 additions, the first 100 numbers would be 99 - then the formula as one expression, then the same answer in three short lines. Each sum and expression the writing names is a code chip, and each + it counts is shown as the + it means, so sums is read as additions and not as answers. Not picked: saying additions instead of sums, which drops the human's word; and the earlier opening, add one number at a time, which gave no reason to want anything else.");
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
  function chip(tokens) {
    "code written with unbreakable spaces between its tokens, so a chip never breaks across two lines";
    let spaced = list_between_space_nb(tokens);
    let combined = text_combine_multiple(spaced);
    return combined;
  }
  let four = chip(["1", plus, "2", plus, "3", plus, "4"]);
  let hundred = chip(["1", plus, "2", plus, "3", plus, "...", plus, "100"]);
  let up_to = chip(["1", plus, "2", plus, "3", plus, "...", plus, n]);
  let expression = chip([n, times, "(n", plus, "1)", slash, "2"]);
  let after = chip([n, plus, "1"]);
  let halve = chip([slash, "2"]);
  let worked = chip(["4", times, "5", slash, "2"]);
  let lesson = app_code_lesson_statement_formula({
    words: "Adding 1 up to n",
    title_code: line_sum,
    names,
    values_get,
    example_values: [4],
    step,
    remember_lesson: app_code_lesson_statement_name_multiply,
    remember_parts: ["we can multiply two names and give the answer a name:"],
    remember_lines,
    explain: [
      ["", four, " has 4 numbers and 3 sums (", plus, ")"],
      ["We could do all 3 sums (", plus, ")"],
      ["But what if we wanted to add the first 100 numbers? ", hundred, " ?"],
      ["Then there would be 99 sums (", plus, ") to add together"],
      ["Instead, there's a formula to add the numbers ", up_to],
      ["Here's the formula in one expression: ", expression],
      [
        "In other words, multiply ",
        n,
        " by the number after it (",
        after,
        "), then halve it (",
        halve,
        ")",
      ],
      [
        "Here's the code to step by step calculate the same answer as that expression:",
      ],
      ["", line_next],
      ["", line_product],
      ["", line_sum],
      ["For 4 that is ", worked, ", which is 10, the same as ", four, ":"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
