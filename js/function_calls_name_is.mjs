export async function function_calls_name_is(f_name, called_name) {
  "Whether the fn of this name calls the fn of that name, asked of the tree rather than of the text";
  "A plain text search cannot tell a call from the same word written inside a message, and the two mean opposite things when the question is what a fn does";
  "The tree knows which node stands in the callee place, so the answer keeps holding once someone spells the name in a string";
  let ast = await function_ast(f_name);
  let found = [];
  function lambda(node) {
    list_add(found, node);
  }
  js_visit_calls_named_nodes(ast, called_name, lambda);
  let calls = greater_than(found.length, 0);
  return calls;
}
