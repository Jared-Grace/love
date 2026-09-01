import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function js_node_stopping_found_is(node, decide, stop_types) {
  arguments_assert(arguments, 3);
  if (equal(node, null)) {
    return false;
  }
  let node_object_is = equal(typeof node, "object");
  if (not(node_object_is)) {
    return false;
  }
  let node_list_is = Array.isArray(node);
  if (node_list_is) {
    for (let item of node) {
      if (js_node_stopping_found_is(item, decide, stop_types)) {
        return true;
      }
    }
    return false;
  }
  let typed = equal(typeof node.type, "string");
  if (not(typed)) {
    return false;
  }
  let stopped = stop_types.includes(node.type);
  if (stopped) {
    return false;
  }
  if (decide(node)) {
    return true;
  }
  for (let key of object_property_names(node)) {
    let skipped = equal(key, "type");
    if (skipped) {
      continue;
    }
    if (js_node_stopping_found_is(node[key], decide, stop_types)) {
      return true;
    }
  }
  return false;
}
