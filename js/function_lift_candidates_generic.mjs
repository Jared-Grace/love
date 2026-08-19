import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast_nested_named_generic } from "./function_ast_nested_named_generic.mjs";
import { function_lift_candidate_rows } from "./function_lift_candidate_rows.mjs";
export async function function_lift_candidates_generic(f_name, fn_readings) {
  "$plain f_name";
  "Every function written inside the named one that this reading says could be moved out, with how many lines of work it holds and what it would have to be handed. Biggest first.";
  "Two reports differ by one word - which reading is asked of each nested function - and were written out whole twice over. Which lift is being asked about is the whole of what a caller chooses here; the walking, the ranking and the counting are the same either way.";
  "Nothing is moved and nothing is written. The judgement is the same one the move itself asks, read from the same place, so a name standing on one of these lists cannot be a name the move then turns down.";
  arguments_assert(arguments, 2);
  async function ranked_of(ast, nested) {
    let readings = await fn_readings(ast, nested);
    let ranked = function_lift_candidate_rows(nested, readings);
    return ranked;
  }
  let ranked = await function_ast_nested_named_generic(f_name, ranked_of);
  return ranked;
}
