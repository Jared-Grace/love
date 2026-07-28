export function js_call_named_find_index(ast, f_name, index_text) {
  "One of several calls to the same name, counting from nothing.";
  "A selector answers exactly one node, so naming a function called twice fails —";
  "correctly, because two places is not an address. What it left missing was any";
  "way to say which of the two was meant, and the answer to that complaint is a";
  "second word rather than a different address.";
  "Written order, so it is read off the file the same way a person would: the";
  "first call is nothing, the next is one.";
  let list = js_list_calls_named_nodes(ast, f_name);
  let index = number_from_text(index_text);
  let call = list_get(list, index);
  return call;
}
