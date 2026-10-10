import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { app_code_braces_two_ifs } from "./app_code_braces_two_ifs.mjs";
import { app_code_braces_two_if_else } from "./app_code_braces_two_if_else.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
export function app_code_braces_two_batch() {
  arguments_assert(arguments, 0);
  ("the three programs with two pairs of braces, in a random order: an if inside an if, two ifs one after the other, and an if and its else");
  let n = app_code_braces_two_nested();
  let t = app_code_braces_two_ifs();
  let e = app_code_braces_two_if_else();
  let codes = [n, t, e];
  list_shuffle(codes);
  return codes;
}
