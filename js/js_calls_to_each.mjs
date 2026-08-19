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
  ("The repo is asked by the name alone, so the answer is about a repo function of that name and not about what the name means here. A name the tree binds for itself - a function written inside it, a variable, a parameter - is therefore dropped before anything is rewritten, and that reading lives in ");
  (fn_name("js_binding_names"),
    ", which leaves imported names out for exactly this reason: an import of the repo function is the one case where the name does mean what was asked about.");
  ("A name is dropped for the whole tree as soon as any part of it binds the name, rather than for the scopes that can see the binding. So a file that writes its own helper of that name deep inside one function keeps its runs of calls everywhere else too. Erring this way costs a change that is not made; erring the other way collapses a run onto a function that can stop the walk early.");
  let names = js_calls_to_each_names(ast);
  let kept = await js_function_names_return_own_not(names);
  js_calls_to_each_apply(ast, kept);
}
