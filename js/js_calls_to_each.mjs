import { fn_name } from "./fn_name.mjs";
import { js_calls_to_each_names } from "./js_calls_to_each_names.mjs";
import { js_function_names_return_own_not } from "./js_function_names_return_own_not.mjs";
import { js_calls_to_each_apply } from "./js_calls_to_each_apply.mjs";
export async function js_calls_to_each(ast) {
  "Puts a single walk in the place of every run of calls standing one after another in this tree on the same function, each given one argument.";
  "So a pair of lines calling a function with 1 and then with 2 becomes one line handing that function the list of 1 and 2.";
  "A walk stops as soon as what it calls hands back true, so a run of calls and a walk over their arguments only mean the same thing when the function called can never hand that back. The names are looked up in the repo and only those whose body hands nothing back at all are collapsed; every other run is left exactly as it stands. The cases in ";
  (fn_name("js_calls_to_each_cases"),
    " say which runs are collapsed and which are left alone.");
  let names = js_calls_to_each_names(ast);
  let kept = await js_function_names_return_own_not(names);
  js_calls_to_each_apply(ast, kept);
}
