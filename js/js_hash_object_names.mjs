import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
export function js_hash_object_names(ast) {
  "The names this file gives to the object a page's address is read into, so a reading can tell a word written into somebody's link apart from a word written into any other object.";
  "Asked of the code rather than of a naming habit. Every one of these is called hash today, and a reading that trusted the word would go on agreeing with itself right up until somebody chose a different one - which is the moment it would matter.";
  "Two ways to come by one. Reading the address gives you it directly. Changing the address hands it to a function you wrote, and that function's first parameter is the same object under whatever name that function chose.";
  arguments_assert(arguments, 1);
  let names = [];
  function declared(v) {
    let node = property_get(v, "node");
    let init = property_get_or_null(node, "init");
    if (null_is(init)) {
      return;
    }
    let call = js_node_type_is(init, "CallExpression");
    if (not(call)) {
      return;
    }
    let callee = property_get(init, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return;
    }
    let called = property_get(callee, "name");
    let reads = equal(called, fn_name("html_hash_object_get"));
    if (not(reads)) {
      return;
    }
    let id = property_get(node, "id");
    let simple = js_node_type_is(id, "Identifier");
    if (not(simple)) {
      return;
    }
    let held = property_get(id, "name");
    list_add(names, held);
  }
  js_visit_type(ast, "VariableDeclarator", declared);
  let handed = [];
  function handled(v2) {
    let node2 = property_get(v2, "node");
    let callee2 = property_get(node2, "callee");
    let plain2 = js_node_type_is(callee2, "Identifier");
    if (not(plain2)) {
      return;
    }
    let called2 = property_get(callee2, "name");
    let changes = list_includes(
      [fn_name("html_hash_transform"), fn_name("html_hash_transform_reload")],
      called2,
    );
    if (not(changes)) {
      return;
    }
    let args = property_get(node2, "arguments");
    if (list_empty_is(args)) {
      return;
    }
    let first = list_first(args);
    let named = js_node_type_is(first, "Identifier");
    if (not(named)) {
      return;
    }
    let taker = property_get(first, "name");
    list_add(handed, taker);
  }
  js_visit_type(ast, "CallExpression", handled);
  function written(v3) {
    let node3 = property_get(v3, "node");
    let id2 = property_get_or_null(node3, "id");
    if (null_is(id2)) {
      return;
    }
    let taken = property_get(id2, "name");
    let hands = list_includes(handed, taken);
    if (not(hands)) {
      return;
    }
    let params = property_get(node3, "params");
    if (list_empty_is(params)) {
      return;
    }
    let param = list_first(params);
    let simple2 = js_node_type_is(param, "Identifier");
    if (not(simple2)) {
      return;
    }
    let held2 = property_get(param, "name");
    list_add(names, held2);
  }
  js_visit_type(ast, "FunctionDeclaration", written);
  return names;
}
