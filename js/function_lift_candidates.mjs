import { function_lift_nested_readings } from "./function_lift_nested_readings.mjs";
import { function_lift_candidate_rows } from "./function_lift_candidate_rows.mjs";
import { function_ast_nested } from "./function_ast_nested.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export async function function_lift_candidates(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one that the lift would actually move, with how many lines of work it holds and what it would have to be handed. Biggest first.");
  ("The reading next door sizes every closure; this one says which of them are reachable. The difference matters because the commonest big closure in this repo is a screen's render callback, handed to a page builder as a value - so a list ranked by size alone sends a reader at the one thing that will refuse.");
  ("Nothing is moved and nothing is written. The judgement is the same one the lift itself asks, read from the same place, so a name standing on this list cannot be a name the lift then turns down.");
  let read = await function_ast_nested(f_name);
  let ast = property_get(read, "ast");
  let nested = property_get(read, "nested");
  let readings = await function_lift_nested_readings(ast, nested);
  let ranked = function_lift_candidate_rows(nested, readings);
  return ranked;
}
