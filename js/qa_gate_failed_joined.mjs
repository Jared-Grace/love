import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat_property } from "./list_concat_property.mjs";
export function qa_gate_failed_joined(told, here) {
  "Every gate that went red, from both halves of a run, as one list of names";
  "A run asks two sets of questions - one of a frozen copy of the folder, one of this machine - and each keeps its own list of what complained. Nothing downstream cares which half a red came from, so the joining belongs here rather than being written again beside each reader.";
  arguments_assert(arguments, 2);
  let failed_copy = property_get(told, "failed");
  let failed = list_concat_property(failed_copy, here, "failed");
  return failed;
}
