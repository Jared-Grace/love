import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_identifiers_named_count } from "./js_identifiers_named_count.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { equal_not } from "./equal_not.mjs";
import { not } from "./not.mjs";
export function js_function_parameter_call_sizes(node, index) {
  "How many arguments this function hands to the function it was given at this place, counted once for every call it makes to it. Nothing when it does anything with that function other than call it.";
  "A function handed to another function is only safe to swap for a second function of the same meaning when the receiver hands over the number of arguments both of them take. The receiver is the only place that number is written down, so this reads it there.";
  "Handing the given function on to somebody else is refused rather than followed, because the number of arguments would then be decided somewhere this reading never looks. Counting every mention of the name and comparing that with the number of calls is what catches it: a mention that is not a call is a use this reading cannot account for.";
  "A name bound again inside the body is refused for the same reason. The mentions below it would belong to the new binding, and this counts by name alone.";
  let params = property_get(node, "params");
  let param = list_get(params, index);
  if (equal(param, null)) {
    return null;
  }
  let param_is = js_node_type_is(param, "Identifier");
  if (not(param_is)) {
    return null;
  }
  let name = property_get(param, "name");
  let body = property_get(node, "body");
  let declared = js_declared_names(body);
  let declared_is = list_includes(declared, name);
  if (declared_is) {
    return null;
  }
  let calls = js_list_type(body, "CallExpression");
  let sizes = [];
  for (let v of calls) {
    let call = property_get(v, "node");
    let callee = property_get(call, "callee");
    let callee_is = js_node_type_is(callee, "Identifier");
    if (callee_is) {
      let callee_name = property_get(callee, "name");
      if (equal(callee_name, name)) {
        let args = property_get(call, "arguments");
        let size = list_size(args);
        list_add(sizes, size);
      }
    }
  }
  let called = list_size(sizes);
  let mentions = js_identifiers_named_count(body, name);
  if (equal_not(mentions, called)) {
    return null;
  }
  return sizes;
}
