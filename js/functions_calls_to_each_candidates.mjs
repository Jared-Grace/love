import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { js_calls_to_each_names } from "./js_calls_to_each_names.mjs";
export async function functions_calls_to_each_candidates() {
  "Every function in the repo that calls one and the same name on a line of its own, with one argument, more than once - each named beside the names it does that with.";
  "What the step that puts a run of side by side calls into a single walk would ask the repo about, and nothing else. A function absent from here is one that step passes over without a single reading, so this says both what switching it on would cost and, at most, how much of the repo it could change.";
  "At most, because a name here has still to survive two further readings before anything is rewritten: the repo has to say that a function of that name hands nothing back, and the file has to not bind the name for itself. Both only ever take names away.";
  let offenders = await functions_ast_offenders_generic(
    js_calls_to_each_names,
    "names",
  );
  return offenders;
}
