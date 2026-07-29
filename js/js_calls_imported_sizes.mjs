import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_imports_local_names } from "./js_imports_local_names.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
export function js_calls_imported_sizes(ast) {
  arguments_assert(arguments, 1);
  ("Every call this file makes to a name an import line brought in, and how many");
  ("things each one hands over.");
  ("Only imported names, because those are the ones whose declaration lives");
  ("somewhere this repo can go and read. A call to a local or to something the");
  ("platform provides cannot be checked against anything.");
  ("A name the file also binds itself is left out. The import may still be there,");
  ("but the call in front of the reader reaches the local, so counting it against");
  ("the imported function's parameters would compare two unrelated things.");
  ("A call spreading a list is left out too - how many things it hands over is not");
  ("known until it runs, so there is nothing here to compare.");
  let imported = js_imports_local_names(ast);
  let bound = js_binding_names(ast);
  let calls = [];
  function lambda(v) {
    let node = property_get(v, "node");
    let callee = property_get(node, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (!plain) {
      return;
    }
    let name = property_get(callee, "name");
    let brought_in = list_includes(imported, name);
    if (!brought_in) {
      return;
    }
    let own = list_includes(bound, name);
    if (own) {
      return;
    }
    let args = property_get(node, "arguments");
    function spread_is(argument) {
      let s = js_node_type_is(argument, "SpreadElement");
      return s;
    }
    let none_spread = list_includes_not(args.map(spread_is), true);
    if (!none_spread) {
      return;
    }
    let size = list_size(args);
    let call = {
      name,
      size,
    };
    list_add(calls, call);
  }
  js_visit_type(ast, "CallExpression", lambda);
  return calls;
}
