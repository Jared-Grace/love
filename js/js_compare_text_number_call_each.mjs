import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { or } from "./or.mjs";
import { list_join } from "./list_join.mjs";
import { list_add } from "./list_add.mjs";
export function js_compare_text_number_call_each(compares, kind_of, found) {
  arguments_assert(arguments, 3);
  function call_each(node) {
    let callee = property_get(node, "callee");
    let callee_named = js_node_type_is(callee, "Identifier");
    if (not(callee_named)) {
      return;
    }
    let callee_name = property_get(callee, "name");
    let comparing = list_includes(compares, callee_name);
    if (not(comparing)) {
      return;
    }
    let args = property_get(node, "arguments");
    let two = list_size_equal(args, 2);
    if (not(two)) {
      return;
    }
    let left = list_first(args);
    let right = list_second(args);
    let left_named = js_node_type_is(left, "Identifier");
    let right_named = js_node_type_is(right, "Identifier");
    if (not(left_named)) {
      return;
    }
    if (not(right_named)) {
      return;
    }
    let left_name = property_get(left, "name");
    let right_name = property_get(right, "name");
    let left_kind = kind_of(left_name);
    let right_kind = kind_of(right_name);
    let text_left = equal(left_kind, "text");
    let number_right = equal(right_kind, "number");
    let number_left = equal(left_kind, "number");
    let text_right = equal(right_kind, "text");
    let one_way = and(text_left, number_right);
    let other_way = and(number_left, text_right);
    let mixed = or(one_way, other_way);
    if (not(mixed)) {
      return;
    }
    let pieces = [callee_name, "(", left_name, ", ", right_name, ")"];
    let said = list_join(pieces, "");
    list_add(found, said);
  }
  return call_each;
}
