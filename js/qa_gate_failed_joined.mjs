import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat_property } from "./list_concat_property.mjs";
export function qa_gate_failed_joined(told, here) {
  "Every gate that went red, from both halves of a run, as one list of names";
  "A run asks two sets of questions - one of a frozen copy of the folder, one of this machine - and each keeps its own list of what complained. What is thrown and what is shown want the whole of it either way, so the joining belongs here rather than being written again beside each reader.";
  "Which half a red came from is not lost by this - it is simply not this list's business. The half is what says whether a red is about a named commit or about the folder this minute, and the run says so in its own words just before it throws.";
  arguments_assert(arguments, 2);
  let failed_copy = property_get(told, "failed");
  let failed = list_concat_property(failed_copy, here, "failed");
  return failed;
}
