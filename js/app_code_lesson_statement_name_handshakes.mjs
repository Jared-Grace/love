import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_sum_to } from "./app_code_lesson_statement_name_sum_to.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_handshakes() {
  arguments_assert(arguments, 0);
  ("how many handshakes when each person shakes hands once with each other person: let others = people - 1; let twice = people * others; let shakes = twice / 2; - the number of pairs, n * (n - 1) / 2. Chosen by the human 2026-09-30 as the next formula lesson; in DSA it is how many pairs a list holds, which is how many comparisons checking every pair makes");
  ("Three short lines rather than one: let shakes = people * (people - 1) / 2; is past the 30 characters a code line may be. The reminder is Adding 1 up to n, the same shape of formula - multiply by a neighbouring number, then halve. Not picked: counting the handshakes as 1 + 2 + ... + (people - 1), which is right but leans on that lesson's formula instead of a reason the learner can see at a party.");
  ("The name twice says what the product is: each handshake counted once for each of its two people. Not picked: product, which says how it was made and not what it counts.");
  ("Four of five counts each screen; the answers 1, 10, 15, 21 and 45 all differ, so the quiz choices do too. The explanation works 3 people and the example below 4, so neither repeats a question.");
  ("The writing is a first draft, not yet the human's, 2026-09-30.");
  let names = ["people"];
  let people = list_first(names);
  let others = "others";
  let twice = "twice";
  let shakes = "shakes";
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let times = js_operator_asterisk_symbol();
  let slash = js_operator_division_symbol();
  let less = js_code_binary_spaced_nb(people, minus, "1");
  let line_others = js_code_let_statement(others, less);
  let multiplied = js_code_binary_spaced_nb(people, times, others);
  let line_twice = js_code_let_statement(twice, multiplied);
  let halved = js_code_binary_spaced_nb(twice, slash, "2");
  let line_shakes = js_code_let_statement(shakes, halved);
  let step = {
    middle: [line_others, line_twice, line_shakes],
    logged: [shakes],
  };
  let n = "n";
  let next = "next";
  let product = "product";
  let sum = "sum";
  let right = js_code_binary_spaced_nb(n, plus, "1");
  let code = js_code_let_statement(next, right);
  let right2 = js_code_binary_spaced_nb(n, times, next);
  let code2 = js_code_let_statement(product, right2);
  let right3 = js_code_binary_spaced_nb(product, slash, "2");
  let code3 = js_code_let_statement(sum, right3);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [[n, 4]],
    [code, code2, code3],
    [sum],
  );
  function values_get() {
    "four of the five, in a fresh order each screen";
    let candidates = [[2], [5], [6], [7], [10]];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let counted = js_code_binary_result_nb("3", times, "2", "6");
  let halve = js_code_binary_result_nb("6", slash, "2", "3");
  let lesson = app_code_lesson_statement_formula({
    words: "Handshakes",
    title_code: line_shakes,
    names,
    values_get,
    example_values: [4],
    step,
    remember_lesson: app_code_lesson_statement_name_sum_to,
    remember_parts: [
      "we can multiply a number by the number after it and then halve it:",
    ],
    remember_lines,
    explain: [
      ["At a party, each person shakes hands once with each other person"],
      ["How many handshakes are there with ", "3", " people?"],
      ["Call the people A, B and C"],
      ["The handshakes are A with B, A with C, and B with C"],
      ["That is ", "3", " handshakes"],
      app_code_explain_container_next,
      [
        "Each of the ",
        "3",
        " people shakes hands with the ",
        "2",
        " other people:",
      ],
      ["", counted],
      ["But ", "6", " counts each handshake twice"],
      ["When A shakes hands with B, B also shakes hands with A"],
      ["That is one handshake, but we counted it once for A and once for B"],
      ["So we halve it (", "/ 2", "):"],
      ["", halve],
      app_code_explain_container_next,
      ["Each person shakes hands with everyone except themselves (", less, ")"],
      ["Then we halve, because each handshake was counted twice"],
      ["Here is code that finds how many handshakes there are:"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
