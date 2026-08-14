import { fn_name } from "./fn_name.mjs";
import { js_operator_plus } from "./js_operator_plus.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
import { list_concat_single_right } from "./list_concat_single_right.mjs";
export function app_code_operators_solvable() {
  ("every operator a code lesson may put between two things and then work out, each carrying the function that works it out");
  ("It is ",
    fn_name("js_operators_binary"),
    " with plus added back. Plus is left out there on purpose, because between two things of unknown kind it may either add numbers or join words, and nothing beside it says which. A lesson knows what it built, so here the question does not arise.");
  let operators = js_operators_binary();
  let o = js_operator_plus();
  let all = list_concat_single_right(operators, o);
  return all;
}
