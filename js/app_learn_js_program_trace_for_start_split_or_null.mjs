import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { object_copy_property_set } from "./object_copy_property_set.mjs";
export function app_learn_js_program_trace_for_start_split_or_null(node) {
  arguments_assert(arguments, 1);
  ("a for with a start, as for (let n = 1; n < 9; n += 3) has, told apart into what it runs: the start, once, as a statement of its own, and then the same for with no start, which goes round as any other for does. Null for anything else");
  ("2026-11-04, at the human's asking, so the start is pressed by itself as the condition and the change are. The for handed back has no start, so going round again can never run the start twice. Not picked: running the start inside the for's own run, which would be a second way of running a let that could come to disagree with the first");
  let is_for = js_node_type_is(node, "ForStatement");
  if (not(is_for)) {
    return null;
  }
  let start = property_get(node, "init");
  if (null_is(start)) {
    return null;
  }
  let statement = object_copy_property_set(start, "for_start", true);
  let rest = object_copy_property_set(node, "init", null);
  let r = [statement, rest];
  return r;
}
