import { js_node_absent_is } from "./js_node_absent_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_call_absence_tested_name(node, checkers) {
  "The name a call is asking about the absence of, or nothing when it is asking";
  "something else. Two shapes say the same thing and only one of them was";
  "looked for: a checker handed the name, and a comparison of the name against";
  "nothing.";
  "The comparison is the one a gate cannot afford to miss, because the pass that";
  "rewrites operators into calls turns a written triple-equals into exactly it -";
  "so the shape arrives in canonical files whether anybody typed it or not, and";
  "a gate blind to it would report a clean repo it had only half read.";
  let callee = property_get_or_null(node, "callee");
  let callee_name = property_get_or_null(callee, "name");
  let args = property_get(node, "arguments");
  let checked = list_includes(checkers, callee_name);
  if (checked) {
    let first = args[0];
    let name = property_get_or_null(first, "name");
    return name;
  }
  let compared = equal(callee_name, equal.name);
  if (not(compared)) {
    return null;
  }
  let left2 = list_size(args);
  let two = equal(left2, 2);
  if (not(two)) {
    return null;
  }
  let left = args[0];
  let right = args[1];
  let left_absent = js_node_absent_is(left);
  let right_absent = js_node_absent_is(right);
  if (right_absent) {
    let name2 = property_get_or_null(left, "name");
    return name2;
  }
  if (left_absent) {
    let name3 = property_get_or_null(right, "name");
    return name3;
  }
  return null;
}
