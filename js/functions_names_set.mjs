import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
export async function functions_names_set() {
  arguments_assert(arguments, 0);
  ("Every name this repo answers to, gathered into a lookup rather than left as a list.");
  ("Three readings walk every function in the repo asking each one about these names, and a crossing or a subtraction against a list gathers that list afresh for every question asked. Gathering once, out here, is what stops nine thousand names being re-gathered nine thousand times - measured 2026-08-14, thirteen seconds of one gate spent on nothing else. Each of the three used to open by gathering its own, in the same two lines written out three times.");
  let names = await functions_names();
  let known = list_unique_set(names);
  return known;
}
