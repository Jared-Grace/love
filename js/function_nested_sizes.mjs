import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_list_function_nodes_visitors } from "./js_list_function_nodes_visitors.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_function_declaration_statements_deep } from "./js_function_declaration_statements_deep.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { property_get_curried_right } from "./property_get_curried_right.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function function_nested_sizes(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one, with how many lines of work each holds, biggest first.");
  ("The reading that turns a diagnosis into a command. The report next door says how much of a function's size is folded inside something rather than standing at the top of its body, but not which something - so the answer to a large gap was to open the file and read it. This names each closure and sizes it, which is exactly the two words the lift asks for.");
  ("Only functions written as declarations are listed, because those are the ones that can be lifted. A function written as a value is reached by whatever holds it and has no name of its own to be addressed by.");
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let outer = js_flo(ast);
  let visitors = js_list_function_nodes_visitors(ast);
  let rows = [];
  function lambda(v) {
    let node = property_get(v, "node");
    let same = equal(node, outer);
    if (same) {
      return;
    }
    let node_type = js_node_type(node);
    let declaration_is = equal(node_type, "FunctionDeclaration");
    if (not(declaration_is)) {
      return;
    }
    let name = js_function_declaration_name(node);
    let deep = js_function_declaration_statements_deep(node);
    let size = list_size(deep);
    list_add(rows, {
      name,
      size,
    });
  }
  each(visitors, lambda);
  let sizer = property_get_curried_right("size");
  let ranked = list_sort_number_mapper_reverse(rows, sizer);
  return ranked;
}
