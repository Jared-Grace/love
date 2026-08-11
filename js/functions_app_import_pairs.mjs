import { arguments_assert } from "./arguments_assert.mjs";
import { functions_app_specific_imports } from "./functions_app_specific_imports.mjs";
import { functions_cross_app_imports } from "./functions_cross_app_imports.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function functions_app_import_pairs() {
  arguments_assert(arguments, 0);
  ("Every reported line of the two records that hold this fault, gathered into one run: code belonging to no app reaching into one, and one app reaching into another.");
  ("Both are the same fault seen from two sides, and anything that reads them reads both, so what stands between them and their readers is this. It finds its own set from the two readings themselves, so it cannot drift from what is really there.");
  let pairs = await functions_app_specific_imports();
  let crossing = await functions_cross_app_imports();
  list_add_multiple(pairs, crossing);
  return pairs;
}
