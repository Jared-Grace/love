import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { app_replace_rule_set_proof_show_in_run } from "./app_replace_rule_set_proof_show_in_run.mjs";
import { subtract } from "./subtract.mjs";
export function app_replace_rule_set_proof_show_highlighted_is(
  position,
  j,
  selected,
  history,
) {
  arguments_assert(arguments, 4);
  if (null_is(selected)) {
    ("with nothing chosen every step symbol glows green (the whole solved proof); choosing a rule narrows the green to just that rule's single usage and darkens the rest");
    return true;
  }
  let entry = list_get(history, selected);
  let rule = property_get(entry, "rule");
  let index = property_get(entry, "index");
  if (equal(position, selected)) {
    let right = property_get(rule, "right");
    let size = list_size(right);
    let r = app_replace_rule_set_proof_show_in_run(j, index, size);
    return r;
  }
  let right2 = subtract(selected, 1);
  if (equal(position, right2)) {
    let left = property_get(rule, "left");
    let size2 = list_size(left);
    let r2 = app_replace_rule_set_proof_show_in_run(j, index, size2);
    return r2;
  }
  return false;
}
