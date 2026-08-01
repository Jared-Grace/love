import { property_in_list } from "./property_in_list.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_hash_object_names } from "./js_hash_object_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_size } from "./list_size.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_is } from "./text_is.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function js_hash_key_literals(ast) {
  "Every place this file writes a word straight into the address of a page instead of calling something that holds the word.";
  "A word in an address leaves the moment somebody saves the link or sends it on, and after that it is on disks nobody here can reach. Written out at the site, it is a word anybody may reword while tidying, and the saved link goes on asking for the old one.";
  "Held by a function instead, the same word can be frozen, and rewording it then shows up as a changed value rather than as nothing at all.";
  "Two shapes reach an address. The short doors take the word first and store it themselves, so the word stands at the front. The long way changes the address as an object, and there the word stands second, after the object it belongs to.";
  arguments_assert(arguments, 1);
  let held = js_hash_object_names(ast);
  let f_name = fn_name("html_hash_property_set");
  let f_name2 = fn_name("html_hash_object_property_set");
  let doors = [f_name, f_name2];
  let sites = [];
  function key_note(called, key) {
    let spelled = js_node_type_is(key, "Literal");
    if (not(spelled)) {
      return;
    }
    let word = property_get(key, "value");
    let written = text_is(word);
    if (not(written)) {
      return;
    }
    let site = {
      called,
      word,
    };
    list_add(sites, site);
  }
  function lambda(v) {
    let node = property_get(v, "node");
    let callee = property_get(node, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return;
    }
    let called = property_get(callee, "name");
    let args = property_get(node, "arguments");
    let count = list_size(args);
    let door = list_includes(doors, called);
    if (door) {
      if (less_than(count, 1)) {
        return;
      }
      let key = list_first(args);
      key_note(called, key);
      return;
    }
    let field = text_starts_with(called, "property_");
    if (not(field)) {
      return;
    }
    if (less_than(count, 2)) {
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
    let key2 = list_second(args);
    key_note(called, key2);
  }
  js_visit_type(ast, "CallExpression", lambda);
  return sites;
}
