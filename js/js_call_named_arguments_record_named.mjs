import { list_size_equal } from "./list_size_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { js_names_chosen_indices } from "./js_names_chosen_indices.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_get } from "./list_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { js_list_indices_record_gather } from "./js_list_indices_record_gather.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
export function js_call_named_arguments_record_named(
  ast,
  f_name,
  names,
  chosen,
) {
  arguments_assert(arguments, 4);
  ("$plain ast");
  ("Rewrite every call to this name in this file so that the things standing where these chosen names stand travel together as one record, each filed under its name, and everything else is handed over exactly as it was.");
  ("A CALL HANDING OVER A DIFFERENT NUMBER OF THINGS THAN THE FUNCTION TAKES IS LEFT ALONE HERE, because working out which name each thing was meant for would be inventing the answer. Whoever calls this asks about those calls first and refuses, so by the time this runs there are none.");
  ("Where the thing handed over is already the very word it will be filed under, it is written once rather than twice, which is what somebody writing the line by hand would have done.");
  let wanted = list_size(names);
  let indices = js_names_chosen_indices(names, chosen);
  let changed = 0;
  function lambda(node) {
    let args = js_call_arguments_get(node);
    let matched = list_size_equal(args, wanted);
    if (not(matched)) {
      return;
    }
    let properties = [];
    for (let index of indices) {
      let name = list_get(names, index);
      let argument = list_get(args, index);
      let key = {
        type: "Identifier",
        name: name,
      };
      let named = js_identifier_is(argument);
      let same = false;
      if (named) {
        let argument_name = property_get(argument, "name");
        same = equal(argument_name, name);
      }
      let property = {
        type: "Property",
        key: key,
        value: argument,
        kind: "init",
        method: false,
        shorthand: same,
        computed: false,
      };
      list_add(properties, property);
    }
    let record = {
      type: "ObjectExpression",
      properties: properties,
    };
    let kept = js_list_indices_record_gather(args, indices, record);
    property_set(node, "arguments", kept);
    changed = add(changed, 1);
  }
  js_visit_calls_named_nodes(ast, f_name, lambda);
  return changed;
}
