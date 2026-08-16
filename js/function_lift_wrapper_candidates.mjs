import { function_lift_wrapper_nested_readings } from "./function_lift_wrapper_nested_readings.mjs";
import { function_lift_candidate_rows } from "./function_lift_candidate_rows.mjs";
import { function_ast_nested_named } from "./function_ast_nested_named.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export async function function_lift_wrapper_candidates(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one whose body could be moved out with its name left behind, with how many lines of work it holds and what it would have to be handed. Biggest first.");
  ("The wider of the two reports. The one next door lists what the plain lift would take, which is only what is always called by name; this lists what the move that leaves the name behind would take, which is nearly everything - a callback handed to a visitor, a renderer handed to a page. Reading them together says which of the two moves to make: where both list a piece, the plain lift is the better one, because it leaves no line behind at all.");
  ("Nothing is moved and nothing is written. The judgement is the same one the move itself asks, read from the same place, so a name standing on this list cannot be a name the move then turns down.");
  let read = await function_ast_nested_named(f_name);
  let ast = property_get(read, "ast");
  let nested = property_get(read, "nested");
  let readings = await function_lift_wrapper_nested_readings(ast, nested);
  let ranked = function_lift_candidate_rows(nested, readings);
  return ranked;
}
