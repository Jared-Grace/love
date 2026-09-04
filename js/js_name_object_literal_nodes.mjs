import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function js_name_object_literal_nodes(ast, name) {
  "$plain name";
  arguments_assert(arguments, 2);
  ("Every string written inside the group of settings that this name was bound to, in the piece of code given.");
  ("It exists because a name handed to a call says nothing about what is in it. A group of settings is nearly always written out on its own line and then passed on by its name, so a reading that only opened the call itself would find a name and stop, one step short of the only place the settings are actually written.");
  ("Only a group written out as a group counts. A name bound to anything else - another name, a call, a number - is left alone, because following those is a chain rather than a step, and a chain can arrive anywhere.");
  ("Every binding of the name is read rather than the nearest one. Which binding is in force where is a question about scopes, and this is asked in order to leave strings out of a hunt; being too willing to leave one out costs a word that nobody had to translate anyway, while being too unwilling costs a false accusation.");
  let literals = [];
  for (let binding of js_list_type_nodes(ast, "VariableDeclarator")) {
    let bound = property_get(binding, "id");
    let plain_is = js_node_type_is(bound, "Identifier");
    if (not(plain_is)) {
      continue;
    }
    let bound_name = property_get(bound, "name");
    let same_is = equal(bound_name, name);
    if (not(same_is)) {
      continue;
    }
    let value = property_get(binding, "init");
    let group_is = js_node_type_is(value, "ObjectExpression");
    if (not(group_is)) {
      continue;
    }
    let parts = js_list_type_nodes(value, "Literal");
    list_add_multiple(literals, parts);
  }
  return literals;
}
