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
  let ranked = list_sort_by_property_descending(rows, "size");
  return ranked;
}
