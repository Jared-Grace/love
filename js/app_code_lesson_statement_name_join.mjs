import { app_code_lesson_statement_names_binary_decoys } from "./app_code_lesson_statement_names_binary_decoys.mjs";
import { app_code_lesson_statement_name_join_decoys } from "./app_code_lesson_statement_name_join_decoys.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_name_join_pairs } from "./app_code_lesson_statement_name_join_pairs.mjs";
import { app_code_lesson_expression_string_concat } from "./app_code_lesson_expression_string_concat.mjs";
export function app_code_lesson_statement_name_join() {
  arguments_assert(arguments, 0);
  ('two names holding text, joined: let a = "God"; let b = "love"; let joined = a + b; console.log(joined); writes out Godlove');
  ("The lesson on joining two pieces of text showed a plus between two strings. The lessons on adding two names showed a plus between two names holding numbers. This one puts the two together: the same plus, between names holding text, joins the text.");
  ("So the new fact is that what a plus does depends on what the names hold, not on the names. The line a + b is spelled the same here as in the lesson on adding two names, and only the values given to a and b decide whether it adds or joins.");
  ("It sits right after the lesson that gives a sum its own name, because it is the same program with the numbers swapped for text.");
  let plus = js_operator_plus_symbol();
  let lesson = app_code_lesson_statement_names_binary_decoys({
    words: "Joining two names",
    symbol: plus,
    pairs_get: app_code_lesson_statement_name_join_pairs,
    example_pair: ['"God"', '"love"'],
    remember_lesson: app_code_lesson_expression_string_concat,
    remember_parts: ["we can join (", plus, ") two pieces of text:"],
    answer_name: "joined",
    answer_count: null,
    decoys: app_code_lesson_statement_name_join_decoys,
  });
  return lesson;
}
