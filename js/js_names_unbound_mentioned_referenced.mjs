import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_scope_binder_nearest_remembered } from "./js_scope_binder_nearest_remembered.mjs";
import { js_visit } from "./js_visit.mjs";
import { set_includes } from "./set_includes.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
export function js_names_unbound_mentioned_referenced(ast, referenced) {
  arguments_assert(arguments, 2);
  ("The same answer as the twin without the suffix - every name with at least one mention no scope around it binds - for a caller that has already worked out which mentions read a value.");
  ("Which mentions read a value rather than merely name a property is a walk of the whole tree, and the caller with the most reason to ask this also needs that same answer for itself. Asked separately it was two walks over one tree for one reading of it: measured 2026-08-14 across this repo, four and a third seconds spent working out a second time what the caller was already holding.");
  ("What each scope binds is worked out once per scope and kept for the whole walk. Every mention asks its ancestors the same question, and a file's mentions stand inside the same handful of scopes: measured 2026-08-14 across this repo, seven hundred and eighty-seven thousand askings about thirty-nine thousand scopes, so nineteen of every twenty were working out an answer already in hand.");
  let unbound = new Set();
  let remembered = new Map();
  function consider(v) {
    let node = property_get(v, "node");
    let identifier = js_node_type_is(node, "Identifier");
    if (not(identifier)) {
      return;
    }
    let reads_value = set_includes(referenced, node);
    if (not(reads_value)) {
      return;
    }
    let name = property_get_name(node);
    let stack = property_get(v, "stack");
    let nearest = js_scope_binder_nearest_remembered(stack, name, remembered);
    let outside = equal(nearest, null);
    if (outside) {
      unbound.add(name);
    }
  }
  js_visit(ast, consider);
  return unbound;
}
