import { arguments_assert } from "./arguments_assert.mjs";
import { js_hash_object_names } from "./js_hash_object_names.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_literal_value_try } from "./js_literal_value_try.mjs";
import { text_is } from "./text_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { js_field_call_prefix } from "./js_field_call_prefix.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function js_hash_object_word_calls_unknown(ast) {
  "Every place this file writes a word into the object a page address is read into, through a call the walk over addresses does not know how to read, as {called, word}.";
  "The walk finds a field being named by looking for a call whose name starts with the prefix the field-setting functions share. That prefix is a word somebody typed, so it covers whatever happens to match it and goes quiet about everything else - and a word published through a call it does not match would be found by nothing at all.";
  "Only a call handed a word written out counts. A call handed a hash object and something else is doing anything at all with an address and is not this repo's business here; what is being looked for is the one shape that publishes - a word spelled into the source, standing where a field name goes.";
  "The second thing given is where a field name stands in every one of these, because the object it belongs to stands first. A call that put them the other way round would be missed, and would also be the first of its kind here.";
  arguments_assert(arguments, 1);
  let held = js_hash_object_names(ast);
  let prefix = js_field_call_prefix();
  let unknown = [];
  function lambda(visited) {
    let node = property_get(visited, "node");
    let callee = property_get(node, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return;
    }
    let called = property_get(callee, "name");
    let known = text_starts_with(called, prefix);
    if (known) {
      return;
    }
    let args = property_get(node, "arguments");
    let few = list_size_less_than_value(args, 2);
    if (few) {
      return;
    }
    let owner = list_first(args);
    let named = js_node_type_is(owner, "Identifier");
    if (not(named)) {
      return;
    }
    let addressed = property_in_list(owner, "name", held);
    if (not(addressed)) {
      return;
    }
    let key = list_second(args);
    let word = js_literal_value_try(key);
    let written = text_is(word);
    if (not(written)) {
      return;
    }
    let site = {
      called,
      word,
    };
    list_add(unknown, site);
  }
  js_visit_type(ast, "CallExpression", lambda);
  return unknown;
}
