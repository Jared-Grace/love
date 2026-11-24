import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists_assert } from "./property_exists_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { app_learn_js_program_trace_value } from "./app_learn_js_program_trace_value.mjs";
export function app_learn_js_program_trace_splice(
  expression,
  actions,
  code,
  values,
) {
  arguments_assert(arguments, 4);
  ("an a.splice(i, 1); or a.splice(i, 0, x); or a.splice(i, 1, x); line run: one item taken out at index i, one put in there, or one put in place of the one there, added to actions, and the name given the new array in values");
  ("2026-11-22, at the human's asking, for the splice lessons: taking one item out is a pop at an index, so it is a pop step, method splice and index saying where; putting one in is a push at an index, a push step the same way; putting one in place of the one there is a push step that also says replaces, since only that item changes. The index is a number or a name, read without a step of its own, as a[i] = x; reads it. The array is copied rather than changed, so a value handed out earlier still says what it said then. Not picked: an assign step for the last, which would choose Assign a value for a function called, where every other function called is chosen as Solve an expression");
  let object = property_path_get_2(expression, "callee", "object");
  let name = property_get(object, "name");
  property_exists_assert(values, name);
  let args = property_get(expression, "arguments");
  let size = list_size(args);
  let index_piece = list_get(args, 0);
  let index_type = property_get(index_piece, "type");
  let index = null;
  if (equal(index_type, "Literal")) {
    index = property_get(index_piece, "value");
  } else if (equal(index_type, "Identifier")) {
    let index_name = property_get(index_piece, "name");
    property_exists_assert(values, index_name);
    index = property_get(values, index_name);
  } else {
    error({
      message: "a splice index is a number or a name here",
      code,
    });
  }
  let count_piece = list_get(args, 1);
  let count = property_get(count_piece, "value");
  let before = property_get(values, name);
  let after = before.slice();
  if (equal(size, 2) && equal(count, 1)) {
    let value = before[index];
    after.splice(index, 1);
    list_add(actions, {
      kind: "pop",
      method: "splice",
      name,
      value,
      index,
      after,
      from: property_get(expression, "start"),
      to: property_get(expression, "end"),
    });
    property_set(values, name, after);
    return value;
  }
  if (equal(size, 3) && (equal(count, 0) || equal(count, 1))) {
    let item_piece = list_get(args, 2);
    let item = app_learn_js_program_trace_value(
      item_piece,
      actions,
      code,
      values,
    );
    after.splice(index, count, item);
    list_add(actions, {
      kind: "push",
      method: "splice",
      name,
      value: item,
      index,
      replaces: equal(count, 1),
      after,
      from: property_get(item_piece, "start"),
      to: property_get(item_piece, "end"),
    });
    property_set(values, name, after);
    return null;
  }
  error({
    message:
      "only a.splice(i, 1), a.splice(i, 0, x) and a.splice(i, 1, x) are run here",
    code,
  });
}
