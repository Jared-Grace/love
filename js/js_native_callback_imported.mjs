import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_imports_local_names } from "./js_imports_local_names.mjs";
import { js_array_methods_callback } from "./js_array_methods_callback.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
export function js_native_callback_imported(ast) {
  "every place this file hands an IMPORTED name straight to a native array method as its callback";
  "the method passes the index and the whole list after the item, so a repo function that counts its own arguments throws the moment it is called - and the repo has a sweep whose whole job is to add that count to functions that lack it, so a site that works today is one sweep away from throwing";
  "an imported name is the whole question: a lambda declared in this file is written for this call and takes what it takes, while an imported name belongs to a file that never saw the call site";
  let imported = js_imports_local_names(ast);
  let methods = js_array_methods_callback();
  let calls = js_list_type_nodes(ast, "CallExpression");
  let found = [];
  for (let call of calls) {
    let callee = property_get(call, "callee");
    let callee_type = property_get(callee, "type");
    let member = equal(callee_type, "MemberExpression");
    if (!member) {
      continue;
    }
    let computed = property_get(callee, "computed");
    if (computed) {
      continue;
    }
    let property = property_get(callee, "property");
    let method = property_get(property, "name");
    let watched = list_includes(methods, method);
    if (!watched) {
      continue;
    }
    let args = property_get(call, "arguments");
    let one = equal(list_size(args), 1);
    if (!one) {
      continue;
    }
    let argument = args[0];
    let argument_type = property_get(argument, "type");
    let bare = equal(argument_type, "Identifier");
    if (!bare) {
      continue;
    }
    let passed = property_get(argument, "name");
    let from_elsewhere = list_includes(imported, passed);
    if (!from_elsewhere) {
      continue;
    }
    let site = {
      method,
      passed,
    };
    list_add(found, site);
  }
  return found;
}
