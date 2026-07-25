import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_replace } from "./object_replace.mjs";
import { fn_name } from "./fn_name.mjs";
export async function js_fn_name_references_to_calls(ast) {
  "The inverse of the ao pass that turns a fn-name string into an X.name reference.";
  "For a file headed into a web bundle, an imported fn referenced ONLY for its name";
  "string drags its whole dependency tree in. This rewrites each imported-fn X.name";
  "into the dependency-free name marker, keeping rename-safety with no import. Run";
  "ao after: it drops the now-unused X import and adds the marker import.";
  let fn_names = await functions_names();
  function each(v) {
    let node = property_get(v, "node");
    let object = property_get(node, "object");
    let property = property_get(node, "property");
    let computed = property_get(node, "computed");
    let object_type = property_get(object, "type");
    let object_is_identifier = equal(object_type, "Identifier");
    let property_name = property_get(property, "name");
    let property_is_name = equal(property_name, "name");
    let name = property_get(object, "name");
    let is_fn = list_includes(fn_names, name);
    let convert = object_is_identifier && property_is_name && is_fn;
    let keep = computed || not(convert);
    if (keep) {
      return;
    }
    let string_code = js_code_string(name);
    let args = [string_code];
    let call_code = js_code_call_args(fn_name.name, args);
    let expression = js_parse_expression(call_code);
    object_replace(node, expression);
  }
  js_visit_type(ast, "MemberExpression", each);
}
