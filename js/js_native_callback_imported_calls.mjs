import { js_imports_local_names } from "./js_imports_local_names.mjs";
import { js_array_methods_callback } from "./js_array_methods_callback.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { property_equals } from "./property_equals.mjs";
import { not } from "./not.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_add } from "./list_add.mjs";
export function js_native_callback_imported_calls(ast) {
  "every call in this file that hands an IMPORTED name straight to a native array method as its callback, as the call nodes themselves, so a reader can say where they are and a repair can change them";
  let imported = js_imports_local_names(ast);
  let methods = js_array_methods_callback();
  let calls = js_list_type_nodes(ast, "CallExpression");
  let found = [];
  for (let call of calls) {
    let callee = property_get(call, "callee");
    let member = property_equals(callee, "type", "MemberExpression");
    if (not(member)) {
      continue;
    }
    let computed = property_get(callee, "computed");
    if (computed) {
      continue;
    }
    let method = property_path_get_2(callee, "property", "name");
    let watched = list_includes(methods, method);
    if (not(watched)) {
      continue;
    }
    let args = property_get(call, "arguments");
    let one = list_size_1(args);
    if (not(one)) {
      continue;
    }
    let argument = args[0];
    let bare = property_equals(argument, "type", "Identifier");
    if (not(bare)) {
      continue;
    }
    let passed = property_get(argument, "name");
    let from_elsewhere = list_includes(imported, passed);
    if (not(from_elsewhere)) {
      continue;
    }
    list_add(found, call);
  }
  return found;
}
