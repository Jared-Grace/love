import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_hash_object_names } from "./js_hash_object_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_is } from "./text_is.mjs";
import { number_smaller_is } from "./number_smaller_is.mjs";
import { not } from "./not.mjs";
export function js_hash_key_literals(ast) {
  "Every place this file writes a word straight into the address of a page instead of calling something that holds the word.";
  "A word in an address leaves the moment somebody saves the link or sends it to a friend, and after that it is on disks nobody here can reach. Written out at the site, it is a word anybody may reword while tidying, and the link that was saved goes on asking for the old one.";
  "Held by a function instead, the same word can be frozen, and rewording it then shows up as a changed value rather than as nothing at all.";
  "Two shapes reach an address. The short doors take the word first and store it themselves. The long way is a change written by hand, where the address is an object and the word stands beside it.";
  arguments_assert(arguments, 1);
  let held = js_hash_object_names(ast);
  let doors = [
    "html_hash_property_set",
    "html_hash_object_property_set",
  ];
  let sites = [];
  function lambda(v) {
    let node = property_get(v, "node");
    let callee = property_get(node, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return;
    }
    let called = property_get(callee, "name");
    let args = property_get(node, "arguments");
    let door = list_includes(doors, called);
    let index = 1;
    if (door) {
      index = 0;
    }
    if (not(door)) {
      let field = text_starts_with(called, "property_");
      if (not(field)) {
        return;
      }
      if (number_smaller_is(list_size(args), 1)) {
        return;
      }
      let owner = list_first(args);
      let named = js_node_type_is(owner, "Identifier");
      if (not(named)) {
        return;
      }
      let owner_name = property_get(owner, "name");
      let addressed = list_includes(held, owner_name);
      if (not(addressed)) {
        return;
      }
    }
    if (number_smaller_is(list_size(args), index + 1)) {
      return;
    }
    let key = args[index];
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
  js_visit_type(ast, "CallExpression", lambda);
  return sites;
}
