import { list_map } from "./list_map.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { lift_candidates_cut_order } from "./lift_candidates_cut_order.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_functions_nested_declarations } from "./js_functions_nested_declarations.mjs";
import { js_function_nested_lift_reading } from "./js_function_nested_lift_reading.mjs";
import { or } from "./or.mjs";
import { js_function_declaration_statements_deep } from "./js_function_declaration_statements_deep.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
export async function function_lift_candidates(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one that the lift would actually move, with how many lines of work it holds and what it would have to be handed. Biggest first.");
  ("The reading next door sizes every closure; this one says which of them are reachable. The difference matters because the commonest big closure in this repo is a screen's render callback, handed to a page builder as a value - so a list ranked by size alone sends a reader at the one thing that will refuse.");
  ("Nothing is moved and nothing is written. The judgement is the same one the lift itself asks, read from the same place, so a name standing on this list cannot be a name the lift then turns down.");
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let nested = js_functions_nested_declarations(ast);
  let names_nested = list_map(nested, js_function_declaration_name);
  let rows = [];
  for (let declaration of nested) {
    let reading = await js_function_nested_lift_reading(ast, declaration);
    let passed_is = property_list_empty_not_is(reading, "stray_at");
    let writes_is = property_list_empty_not_is(reading, "written_closed");
    let refused_is = or(passed_is, writes_is);
    if (refused_is) {
      continue;
    }
    let name = property_get(reading, "name_old");
    let deep = js_function_declaration_statements_deep(declaration);
    let size = list_size(deep);
    let closed = property_get(reading, "closed");
    ("Which of the names it closes over are themselves functions written here, because those are the ones to lift first rather than hand in.");
    let closed_nested = list_intersection(closed, names_nested);
    list_add(rows, {
      name,
      size,
      closed,
      closed_nested,
    });
  }
  let ranked = lift_candidates_cut_order(rows);
  return ranked;
}
