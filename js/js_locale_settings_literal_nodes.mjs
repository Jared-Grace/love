import { property_starts_with } from "./property_starts_with.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { js_name_object_literal_nodes } from "./js_name_object_literal_nodes.mjs";
export function js_locale_settings_literal_nodes(ast) {
  arguments_assert(arguments, 1);
  ("Every string handed to one of the platform's own writers of dates, times and numbers, which are settings telling it how to write rather than words anybody reads.");
  ("A hunt for words a function says out loud has to take these out first, and it can only take out what it can recognise by where it sits. 'long' and 'numeric' beside a date, or a language's own code, are read by the writer and never reach a page - the words that reach the page are made by the platform afterwards, in whatever language it was handed.");
  ("Without this, a function that says nothing at all looks like a function saying english. That is the exact shape of the one that writes today's date over a passage: it types out no word of its own, hands the reader's own language code straight to the platform, and was still named as never having asked anybody - which is the opposite of what it does.");
  ("Only what is handed in is read, never what it was called on. A run of characters can have one of these writers called on it, and that run is a word somebody wrote; the settings are the arguments and nothing else.");
  ("A name standing where the settings go is followed one step, because writing the group out on its own line and then passing its name is how nearly everybody writes this - the reading that stopped at the name found nothing and reported the words as spoken aloud.");
  ("Recognised by the writer's name beginning with the same word all of them begin with, because that beginning is what the platform itself uses to mean 'in the reader's own language' - so a writer added to the platform later is known to this the day it arrives.");
  let literals = [];
  for (let node of js_list_type_nodes(ast, "CallExpression")) {
    let callee = property_get(node, "callee");
    let reached_is = js_node_type_is(callee, "MemberExpression");
    if (not(reached_is)) {
      continue;
    }
    let named = property_get(callee, "property");
    let plain_is = js_node_type_is(named, "Identifier");
    if (not(plain_is)) {
      continue;
    }
    let locale_is = property_starts_with(named, "name", "toLocale");
    if (not(locale_is)) {
      continue;
    }
    let handed = property_get(node, "arguments");
    for (let given of handed) {
      let parts = js_list_type_nodes(given, "Literal");
      list_add_multiple(literals, parts);
      let given_is = js_node_type_is(given, "Identifier");
      if (not(given_is)) {
        continue;
      }
      let given_name = property_get(given, "name");
      let settings = js_name_object_literal_nodes(ast, given_name);
      list_add_multiple(literals, settings);
    }
  }
  return literals;
}
