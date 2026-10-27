import { js_native_callback_imported_calls } from "./js_native_callback_imported_calls.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_add } from "./list_add.mjs";
export function js_native_callback_imported(ast) {
  "every place this file hands an IMPORTED name straight to a native array method as its callback";
  "the method passes the index and the whole list after the item, so a repo function that counts its own arguments throws the moment it is called - and the repo has a sweep whose whole job is to add that count to functions that lack it, so a site that works today is one sweep away from throwing";
  "an imported name is the whole question: a lambda declared in this file is written for this call and takes what it takes, while an imported name belongs to a file that never saw the call site";
  let calls = js_native_callback_imported_calls(ast);
  let found = [];
  for (let call of calls) {
    let method = property_path_get_2(call, "callee", "property");
    let site = {
      method: method.name,
      passed: call.arguments[0].name,
    };
    list_add(found, site);
  }
  return found;
}
