export async function js_statement_find_call_named_index(
  ast,
  f_name,
  index_text,
) {
  "The whole line holding one of several calls to the same name.";
  "The two depths a call is addressed at each need their own way of saying which";
  "one was meant, because a verb written for a line cannot take a call and a verb";
  "written for a call cannot take a line.";
  let call = js_call_named_find_index(ast, f_name, index_text);
  let item = js_node_to_block_item(ast, call);
  return item;
}
