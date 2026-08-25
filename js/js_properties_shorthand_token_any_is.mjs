export function js_properties_shorthand_token_any_is(properties, token) {
  "$plain token";
  "Whether any part of a written-out record is written under its own name and that name is exactly the given word.";
  "THE VALUE IS COMPARED AND NOT THE KEY, even though the two are the same word wherever this answers yes. A part written under its own name holds the word twice in the parsed form, once as the name it is filed under and once as the thing read to fill it, and only the second is the piece of code the changed line was showing.";
  arguments_assert(arguments, 2);
  for (let property of properties) {
    let named_own = property_get(property, "shorthand");
    if (not(named_own)) {
      continue;
    }
    let value = property_get(property, "value");
    let same = js_node_token_is(value, token);
    if (same) {
      return true;
    }
  }
  return false;
}
