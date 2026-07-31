export function js_select_object_property_elements(selects, key_name) {
  arguments_assert(arguments, 2);
  "the list held under a name inside the one record a selection points at";
  "two names deep is the shape a register is, so all four verbs that reach into one opened by walking the same three steps - the single selection, the record it holds, and the list under the name.";
  let node = list_single(selects);
  let record = js_node_value_get(node);
  let elements = js_object_property_elements_get(record, key_name);
  return elements;
}
