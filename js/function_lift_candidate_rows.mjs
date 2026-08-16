import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { function_lift_candidate_row } from "./function_lift_candidate_row.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { lift_candidates_cut_order } from "./lift_candidates_cut_order.mjs";
export function function_lift_candidate_rows(nested, readings) {
  "One line for each function a move would take, biggest first, and nothing at all for the ones too small to be worth moving.";
  "The half both reports of what could be moved end in. Which functions may go is the question the two of them answer differently; what to say about the ones that may is the same answer either way, so it is written once here.";
  "The names are read off every function written inside, not only the ones being taken, because a line saying what a function would have to be handed has to tell a name it reached out for apart from a neighbour written beside it - and a neighbour that this move happens to be turning down is a neighbour still.";
  arguments_assert(arguments, 2);
  let names_nested = list_map(nested, js_function_declaration_name);
  let rows = [];
  for (let taken of readings) {
    let declaration = property_get(taken, "declaration");
    let reading = property_get(taken, "reading");
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
