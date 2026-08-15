import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { null_is } from "./null_is.mjs";
import { function_ast_nested } from "./function_ast_nested.mjs";
import { function_lift_candidate_row } from "./function_lift_candidate_row.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_function_nested_lift_reading } from "./js_function_nested_lift_reading.mjs";
import { js_function_lift_wrapper_refusals } from "./js_function_lift_wrapper_refusals.mjs";
import { lift_candidates_cut_order } from "./lift_candidates_cut_order.mjs";
export async function function_lift_wrapper_candidates(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one whose body could be moved out with its name left behind, with how many lines of work it holds and what it would have to be handed. Biggest first.");
  ("The wider of the two reports. The one next door lists what the plain lift would take, which is only what is always called by name; this lists what the move that leaves the name behind would take, which is nearly everything - a callback handed to a visitor, a renderer handed to a page. Reading them together says which of the two moves to make: where both list a piece, the plain lift is the better one, because it leaves no line behind at all.");
  ("Nothing is moved and nothing is written. The judgement is the same one the move itself asks, read from the same place, so a name standing on this list cannot be a name the move then turns down.");
  let read = await function_ast_nested(f_name);
  let ast = property_get(read, "ast");
  let nested = property_get(read, "nested");
  let names_nested = list_map(nested, js_function_declaration_name);
  let rows = [];
  for (let declaration of nested) {
    let refusals = await js_function_lift_wrapper_refusals(ast, declaration);
    let refused_is = list_empty_not_is(refusals);
    if (refused_is) {
      continue;
    }
    let reading = await js_function_nested_lift_reading(ast, declaration);
    let row = function_lift_candidate_row(reading, declaration, names_nested);
    let small_is = null_is(row);
    if (small_is) {
      continue;
    }
    list_add(rows, row);
  }
  let ranked = lift_candidates_cut_order(rows);
  return ranked;
}
