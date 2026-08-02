import { property_nested_or_null } from "./property_nested_or_null.mjs";
import { property_equals } from "./property_equals.mjs";
import { js_call_args_from_code } from "./js_call_args_from_code.mjs";
import { not } from "./not.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { object_replace } from "./object_replace.mjs";
import { fn_name } from "./fn_name.mjs";
export async function js_fn_name_references_to_calls(ast) {
  "The inverse of the ao pass that turns a fn-name string into an X.name reference.";
  "For a file headed into a web bundle, an imported fn referenced ONLY for its name";
  "string drags its whole dependency tree in. This rewrites each imported-fn X.name";
  "into the dependency-free name marker, keeping rename-safety with no import. Run";
  "ao after: it drops the now-unused X import and adds the marker import.";
  let fn_names = await functions_names();
  function each_item(v) {
    let node = property_get(v, "node");
    let computed = property_get(node, "computed");
    if (computed) {
      return;
    }
    let object = property_get(node, "object");
    let object_is_identifier = property_equals(object, "type", "Identifier");
    if (not(object_is_identifier)) {
      return;
    }
    let property_name = property_nested_or_null(node, "property", "name");
    let property_is_name = equal(property_name, "name");
    if (not(property_is_name)) {
      return;
    }
    let name = property_get(object, "name");
    let is_fn = list_includes(fn_names, name);
    if (not(is_fn)) {
      return;
    }
    let string_code = js_code_string(name);
    let args = [string_code];
    let expression = js_call_args_from_code(fn_name("fn_name"), args);
    object_replace(node, expression);
  }
  js_visit_type(ast, "MemberExpression", each_item);
}
