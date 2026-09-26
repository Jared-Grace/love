import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { app_code_lesson_statement_names_binary_pairs_balanced } from "./app_code_lesson_statement_names_binary_pairs_balanced.mjs";
import { app_code_lesson_statement_names_binary } from "./app_code_lesson_statement_names_binary.mjs";
import { app_code_lesson_expression_less_than } from "./app_code_lesson_expression_less_than.mjs";
export function app_code_lesson_statement_name_compare() {
  arguments_assert(arguments, 0);
  ("two names compared: let a = 3; let b = 5; let smaller = a < b; console.log(smaller); writes out true");
  ("The lesson that adds two names put them in the two places a sum takes its numbers from. This one leaves the names exactly where they were and changes the symbol between them, so the only thing a learner is asked to accept is that the rule they were given there was about the places rather than about the plus.");
  ("A comparison rather than any of the other things that fit between two names, because it is the one a learner has already spent a whole category of lessons on. What comes out of it - true or false - was settled in the Operators lessons, so nothing about the answer is new here either.");
  ("Only two answers exist, so a question that shows the program and asks for the value offers two buttons rather than four, and each screen draws two programs that come out true and two that come out false.");
  ("The two numbers of a pair are far apart and never equal: which of two numbers is smaller is not what this lesson teaches, and two equal numbers answering false is a lesson of its own in the Operators category.");
  ("The same screen as every other lesson that puts one symbol between two names, at the human's asking, so the wording a learner reads here is the wording they read on each of the others.");
  let symbol = js_operator_less_than_symbol();
  function pairs_get() {
    "two pairs that come out true and two that come out false, in a fresh order each screen";
    let candidates = [
      [2, 9],
      [3, 8],
      [1, 7],
      [4, 10],
      [5, 12],
      [9, 2],
      [8, 3],
      [7, 1],
      [10, 4],
      [12, 5],
    ];
    let pairs = app_code_lesson_statement_names_binary_pairs_balanced(
      symbol,
      candidates,
    );
    return pairs;
  }
  let lesson = app_code_lesson_statement_names_binary({
    words: "Comparing two names",
    symbol,
    pairs_get,
    example_pair: [3, 5],
    remember_lesson: app_code_lesson_expression_less_than,
    remember_parts: [
      "we can ask whether one number is smaller (",
      symbol,
      ") than another:",
    ],
    answer_name: "smaller",
    answer_count: 2,
  });
  return lesson;
}
