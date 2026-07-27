export function js_prose_literal_nodes(ast) {
  "Every string that is a comment rather than a value - the ones this repo writes explanations with, standing alone as their own statement.";
  "Anything hunting for a string a function actually uses has to take these out first, and there is no telling them apart by what they contain. A comment and a value are the same kind of node holding the same kind of text; only where they sit says which is which, and a statement of nothing but a string is a comment by construction.";
  let statements = js_list_type_nodes(ast, "ExpressionStatement");
  let prose = list_filter(statements, js_statement_string_is);
  let literals = list_map_property(prose, "expression");
  return literals;
}
