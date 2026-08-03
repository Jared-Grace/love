export function js_key_literal_word_try(ast, key) {
  "The word standing where a field of an address is named, whether it was typed into the slot or set a line above and handed over - or null where it came from somewhere this file cannot read. Read-only, pure.";
  "Both are the same publishing. A word in an address leaves the moment somebody saves the link, and neither shape can be frozen, because a freeze watches a function and neither of these is one.";
  "A variable is followed only to where this file set it. One set from a call is the repaired shape - the word is held by a function, and whether that function is frozen is somebody else's question - and one set from outside the file is not this file's word at all.";
  arguments_assert(arguments, 2);
  let spelled = js_node_type_is(key, "Literal");
  if (spelled) {
    let typed = property_get(key, "value");
    return typed;
  }
  let variable = js_identifier_name_try(key);
  let plain = not_equal(variable, null);
  if (not(plain)) {
    return null;
  }
  let source = js_name_set_from_node_try(ast, variable);
  let above = js_literal_value_try(source);
  return above;
}
