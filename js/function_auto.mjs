import { js_auto } from "./js_auto.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
export async function function_auto(f_name) {
  ("Hands back the function as it now stands, which is the evidence that the pass");
  ("ran and what it did. Every other command that changes a function answers with");
  ("the result; this one alone answered with nothing, and a command that shows");
  ("nothing leaves the caller no way to learn the outcome except to ask again.");
  ("That is not a habit to discourage - asking twice is the only thing a silent");
  ("command leaves anybody to do.");
  let unaliased = await function_name_unalias_only(f_name);
  let output = await function_transform(unaliased, js_auto);
  return output;
}
