export function js_node_signature(node, bound) {
  "The shape of a piece of code with every locally chosen name replaced by the position it was first introduced at, so that two authors who wrote the same thing and named their parts differently produce the same text here. Names the file does not bind - an imported unit, a language global - are kept as written, because those are what the code actually means.";
  "A name after a dot, or a key in an object, is not a variable and is never replaced. Without that, taking the includes of a list and taking the split of a text look identical, since each stores its answer in a variable named after the thing it just called.";
  let slots = {};
  let pieces = [];
  function slot_of(name) {
    let known = object_property_exists(slots, name);
    if (known) {
      let existing = property_get(slots, name);
      return existing;
    }
    let index = object_keys(slots).length;
    let fresh = "v" + index;
    slots[name] = fresh;
    return fresh;
  }
  function key_text(key) {
    let name = property_get(key, "name");
    let named_is = text_empty_not_is(name);
    if (named_is) {
      return name;
    }
    let value = property_get(key, "value");
    let text = json_encode(value);
    return text;
  }
  function emit(node_2) {
    let absent = null_is(node_2);
    if (absent) {
      return;
    }
    let list_is = list_json_is(node_2);
    if (list_is) {
      list_add(pieces, "[");
      each(node_2, emit);
      list_add(pieces, "]");
      return;
    }
    let type = property_get(node_2, "type");
    let typed_not_is = text_empty_is(type);
    if (typed_not_is) {
      return;
    }
    let identifier_is = equal(type, "Identifier");
    if (identifier_is) {
      let name = property_get(node_2, "name");
      let local_is = list_includes(bound, name);
      if (local_is) {
        let slot = slot_of(name);
        list_add(pieces, "local:" + slot);
        return;
      }
      list_add(pieces, "free:" + name);
      return;
    }
    let literal_is = equal(type, "Literal");
    if (literal_is) {
      let value = property_get(node_2, "value");
      let text = json_encode(value);
      list_add(pieces, "literal:" + text);
      return;
    }
    let member_is = equal(type, "MemberExpression");
    let computed = property_get(node_2, "computed");
    let plain_member_is = and(member_is, not(computed));
    if (plain_member_is) {
      let object = property_get(node_2, "object");
      list_add(pieces, "member(");
      emit(object);
      let property = property_get(node_2, "property");
      let after_dot = key_text(property);
      list_add(pieces, "." + after_dot + ")");
      return;
    }
    let property_is = equal(type, "Property");
    let plain_property_is = and(property_is, not(computed));
    if (plain_property_is) {
      let key = property_get(node_2, "key");
      let written = key_text(key);
      list_add(pieces, "key(" + written + "=");
      let value = property_get(node_2, "value");
      emit(value);
      list_add(pieces, ")");
      return;
    }
    list_add(pieces, type + "(");
    let keys = object_keys(node_2);
    function emit_key(key_2) {
      let positional_is = list_includes(js_node_position_keys(), key_2);
      if (positional_is) {
        return;
      }
      let type_key_is = equal(key_2, "type");
      if (type_key_is) {
        return;
      }
      let child = property_get(node_2, key_2);
      let node_is = object_json_is(child);
      let list_child_is = list_json_is(child);
      let structure_is = or(node_is, list_child_is);
      if (structure_is) {
        emit(child);
        return;
      }
      let written = json_encode(child);
      list_add(pieces, key_2 + "=" + written + ";");
    }
    each(keys, emit_key);
    list_add(pieces, ")");
  }
  emit(node);
  let empty = "";
  let signature = list_join(pieces, empty);
  return signature;
}
