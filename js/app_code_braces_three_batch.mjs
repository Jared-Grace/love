import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_three_programs } from "./app_code_braces_three_programs.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_code_braces_three_batch() {
  arguments_assert(arguments, 0);
  ("four of the five programs with three pairs of braces, in a random order");
  let list = app_code_braces_three_programs();
  let codes = list_shuffle_take(list, 4);
  return codes;
}
