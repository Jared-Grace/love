import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { app_code_braces_two_ifs } from "./app_code_braces_two_ifs.mjs";
import { app_code_braces_two_if_else } from "./app_code_braces_two_if_else.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_first } from "./list_first.mjs";
export function app_code_braces_two_batch() {
  arguments_assert(arguments, 0);
  ("two programs with two pairs of braces, in a random order: an if inside an if, and either two ifs one after the other or an if and its else");
  ("One of each order, { { } } and { } { }, because a lesson shows its examples two at a time, and two of the three programs have the same order: with all three in the batch, one screen in three showed { } { } twice. Noticed by the human 2026-10-11. The program left out is drawn when the batch is made again, so both are still met.");
  let n = app_code_braces_two_nested();
  let t = app_code_braces_two_ifs();
  let e = app_code_braces_two_if_else();
  let apart = [t, e];
  list_shuffle(apart);
  let codes = [n, list_first(apart)];
  list_shuffle(codes);
  return codes;
}
