export function js_code_literal_key_only(code, literal) {
  arguments_assert(arguments, 2);
  ("Whether every place a file writes a given word, outside its own account of");
  ("itself, is a place where a field is being named.");
  ("A report of repeated spellings offers to move a word behind the function that");
  ("already returns it. Where the word is a field name that offer is not tidying,");
  ("it is a change to the shape of the data - and this repo saves whole objects,");
  ("so those shapes are already written on disks nobody here can reach. The merge");
  ("would tie a name in somebody's saved file to a name in this code, and every");
  ("later rename would leave the saved file unreadable.");
  ("So a file whose only mentions are field names is not a site the report should");
  ("offer, in the same way and for a stronger reason than a sentence that merely");
  ("mentions the word. The sentence cannot be repaired; this one must not be.");
  let ast = js_parse(code);
  let sites = [];
  let named = [];
  function lambda(v) {
    let node = property_get(v, "node");
    let held = js_literal_value_get(node);
    let same = equal(held, literal);
    if (not(same)) {
      return;
    }
    let stack = property_get(v, "stack");
    let above = js_stack_node_above(stack);
    let above_type = js_node_type(above);
    let prose_is = equal(above_type, "ExpressionStatement");
    if (prose_is) {
      return;
    }
    list_add(sites, above_type);
    let key_is = js_string_site_key_is(stack);
    if (key_is) {
      list_add(named, above_type);
    }
  }
  js_visit_types(ast, ["Literal"], lambda);
  let any = greater_than(list_size(sites), 0);
  let all_named = equal(list_size(sites), list_size(named));
  let key_only = any && all_named;
  return key_only;
}
