import { js_hash_object_names_handled } from "./js_hash_object_names_handled.mjs";
import { js_hash_object_names_declared } from "./js_hash_object_names_declared.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
export function js_hash_object_names(ast) {
  "The names this file gives to the object a page's address is read into, so a reading can tell a word written into somebody's link apart from a word written into any other object.";
  "Asked of the code rather than of a naming habit. Every one of these is called hash today, and a reading that trusted the word would go on agreeing with itself right up until somebody chose a different one - which is the moment it would matter.";
  "Three ways to come by one. Reading the address gives you it directly. Changing the address hands it to a function you wrote, and that function's first parameter is the same object under whatever name that function chose. Building a link for another tab starts from an empty object that is an address only because of what is done with it at the end.";
  arguments_assert(arguments, 1);
  let names = [];
  function declared(v) {
    let r = js_hash_object_names_declared(v, names);
    return r;
  }
  js_visit_type(ast, "VariableDeclarator", declared);
  let handed = [];
  function handled(v2) {
    let r2 = js_hash_object_names_handled(v2, names, handed);
    return r2;
  }
  js_visit_type(ast, "CallExpression", handled);
  function written(v3) {
    let node = property_get(v3, "node");
    let id = property_get_or_null(node, "id");
    if (null_is(id)) {
      return;
    }
    let hands = property_in_list(id, "name", handed);
    if (not(hands)) {
      return;
    }
    let params = property_get(node, "params");
    if (list_empty_is(params)) {
      return;
    }
    let param = list_first(params);
    let simple = js_node_type_is(param, "Identifier");
    if (not(simple)) {
      return;
    }
    let held = property_get(param, "name");
    list_add(names, held);
  }
  js_visit_type(ast, "FunctionDeclaration", written);
  return names;
}
