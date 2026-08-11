import { property_get_curried_right } from "./property_get_curried_right.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_functions_nested_declarations } from "./js_functions_nested_declarations.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_function_declaration_statements_deep } from "./js_function_declaration_statements_deep.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
export async function function_nested_sizes(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one, with how many lines of work each holds, biggest first.");
  ("The reading that turns a diagnosis into a command. The report next door says how much of a function's size is folded inside something rather than standing at the top of its body, but not which something - so the answer to a large gap was to open the file and read it. This names each closure and sizes it, which is exactly the two words the lift asks for.");
  ("Every closure is listed, including the ones the lift will refuse. The list that has already dropped those is the candidate report; this one is the honest picture of where a function's size actually sits, which is a different question and the one to ask when the lift says no.");
  let nested = await function_nested_declarations(f_name);
  function lambda(declaration) {
    let name = js_function_declaration_name(declaration);
    let deep = js_function_declaration_statements_deep(declaration);
    let size = list_size(deep);
    let row = {
      name,
      size,
    };
    return row;
  }
  let rows = list_map(nested, lambda);
  let ranked = list_sort_size_reverse(rows);
  return ranked;
}
