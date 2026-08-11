import { arguments_assert } from "./arguments_assert.mjs";
import { list_is } from "./list_is.mjs";
import { list_add } from "./list_add.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function qa_gate_said_advice_remove_advice_free(value, advice) {
  arguments_assert(arguments, 2);
  let listed = list_is(value);
  if (listed) {
    let each_free = [];
    for (let member of value) {
      let item = qa_gate_said_advice_remove_advice_free(member, advice);
      list_add(each_free, item);
    }
    return each_free;
  }
  let filled = null_not_is(value);
  let shaped = equal(typeof value, "object");
  let objected = and(filled, shaped);
  if (not(objected)) {
    return value;
  }
  let kept = {};
  for (let key of object_property_names(value)) {
    let advised = equal(key, advice);
    if (advised) {
      continue;
    }
    kept[key] = qa_gate_said_advice_remove_advice_free(value[key], advice);
  }
  return kept;
}
