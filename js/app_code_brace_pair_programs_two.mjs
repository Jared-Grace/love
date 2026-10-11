import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { app_code_braces_two_ifs } from "./app_code_braces_two_ifs.mjs";
import { app_code_braces_two_if_else } from "./app_code_braces_two_if_else.mjs";
export function app_code_brace_pair_programs_two() {
  arguments_assert(arguments, 0);
  ("the four programs of Which brace pairs with which, two pairs, each with exactly two pairs of braces: an if inside an if, twice, two ifs one after the other, and an if and its else");
  ("The if inside an if is there twice because it is the only one where the } nearest the pointed-at { is not its pair, which is the mistake the learner made.");
  let code = app_code_braces_two_nested();
  let code2 = app_code_braces_two_nested();
  let code3 = app_code_braces_two_ifs();
  let code4 = app_code_braces_two_if_else();
  let codes = [code, code2, code3, code4];
  return codes;
}
