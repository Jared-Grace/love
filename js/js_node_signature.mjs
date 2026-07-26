import { list_index_of } from "./list_index_of.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { json_to } from "./json_to.mjs";
import { null_is } from "./null_is.mjs";
import { list_is } from "./list_is.mjs";
import { each } from "./each.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { and } from "./and.mjs";
import { object_values_map_list } from "./object_values_map_list.mjs";
import { js_node_signature_keys_skipped } from "./js_node_signature_keys_skipped.mjs";
import { list_join } from "./list_join.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_node_signature(node, bound) {
  "The shape of a piece of code with every locally chosen name replaced by the position it was first introduced at, so two people who wrote the same thing and named their parts differently produce the same text here. A name this file does not bind - an imported unit, a language global - is kept as written, because that is what the code actually means. Comparing these texts is what turns 'these two look similar' into 'these two are equal', which is the only form a machine can act on.";
  "A name after a dot, and a key in an object, are never replaced. Without that rule, taking the includes of a list and taking the split of a text come out identical, because each stores its answer in a variable named after the thing it just called.";
  "A value that is not a node and not a list is written out as it stands. Kinds and operators live in those plain fields, so leaving them out would make adding two numbers and dividing them the same shape.";
  let slot_names = [];
  let pieces = [];
  function slot_of(name) {
    let known = list_includes(slot_names, name);
    let missing = not(known);
    if (missing) {
      list_add(slot_names, name);
    }
    let index = list_index_of(slot_names, name);
    let slot = "v" + index;
    return slot;
  }
  function written_key(key) {
    ("a key is written either as a bare word or as a quoted one, and only one of the two fields is there to read");
    let name = property_get_or_null(key, "name");
    let named_is = null_not_is(name);
    if (named_is) {
      return name;
    }
    let value = property_get_or_null(key, "value");
    let text = json_to(value);
    return text;
  }
  function emit(node_) {
    let absent = null_is(node_);
    if (absent) {
      return;
    }
    let list_of_nodes_is = list_is(node_);
    if (list_of_nodes_is) {
      list_add(pieces, "[");
      each(node_, emit);
      list_add(pieces, "]");
      return;
    }
    let type = property_get_or_null(node_, "type");
    let untyped_is = text_empty_is(type);
    if (untyped_is) {
      return;
    }
    let identifier_is = equal(type, "Identifier");
    if (identifier_is) {
      let name = property_get(node_, "name");
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
      let value = property_get(node_, "value");
      let text = json_to(value);
      list_add(pieces, "literal:" + text);
      return;
    }
    let computed = property_get(node_, "computed");
    let plain_is = not(computed);
    let member_is = equal(type, "MemberExpression");
    let after_dot_is = and(member_is, plain_is);
    if (after_dot_is) {
      list_add(pieces, "member(");
      let object = property_get(node_, "object");
      emit(object);
      let property = property_get(node_, "property");
      let written = written_key(property);
      list_add(pieces, "." + written + ")");
      return;
    }
    let property_is = equal(type, "Property");
    let key_is = and(property_is, plain_is);
    if (key_is) {
      let key = property_get(node_, "key");
      let written_ = written_key(key);
      list_add(pieces, "key(" + written_ + "=");
      let value_ = property_get(node_, "value");
      emit(value_);
      list_add(pieces, ")");
      return;
    }
    list_add(pieces, type + "(");
    function name_of(value_3, key_) {
      return key_;
    }
    let keys = object_values_map_list(node_, name_of);
    function emit_key(key_3) {
      let list = js_node_signature_keys_skipped();
      let skipped = list_includes(list, key_3);
      if (skipped) {
        return;
      }
      let child = property_get(node_, key_3);
      let child_list_is = list_is(child);
      if (child_list_is) {
        emit(child);
        return;
      }
      let child_type = property_get(child, "type");
      let child_node_is = text_empty_not_is(child_type);
      if (child_node_is) {
        emit(child);
        return;
      }
      let child_absent = null_is(child);
      if (child_absent) {
        list_add(pieces, key_3 + "=null;");
        return;
      }
      let written_3 = json_to(child);
      list_add(pieces, key_3 + "=" + written_3 + ";");
    }
    each(keys, emit_key);
    list_add(pieces, ")");
  }
  emit(node);
  let empty = "";
  let signature = list_join(pieces, empty);
  return signature;
}
