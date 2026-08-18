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
  ("Nothing calls this yet, and one thing has to be settled before anything does. A name is looked up in the repo by the name alone, so a function written inside the file being read, or handed in as a parameter, wearing the name of a repo function, is answered for by the repo one. The pass that puts the word await in front of calls reads names the same way and carries the same gap, which is why it is left the same here rather than guessed at differently.");
  ("What would close it is a reading of which names the tree itself binds other than by importing them; an import binds a name too, and every file binds the names it calls that way, so the plain reading of what is bound rules out everything and is no use.");
  let names = js_calls_to_each_names(ast);
  let kept = await js_function_names_return_own_not(names);
  js_calls_to_each_apply(ast, kept);
}
