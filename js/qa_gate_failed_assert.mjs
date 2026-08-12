import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat_property } from "./list_concat_property.mjs";
import { greater_than } from "./greater_than.mjs";
import { qa_gate_parts_print } from "./qa_gate_parts_print.mjs";
export function qa_gate_failed_assert(told, here, asked_ms, blamed_ms) {
  arguments_assert(arguments, 4);
  ("Throws when anything went red, naming every gate that did, and returns quietly when nothing did.");
  ("The two halves are joined first. What the frozen copy complained about and what this machine complained about are one list here, so one thrown sentence covers both and neither half can go red without being said.");
  ("How long the parts took is printed on the way out as well as on the way through, because a run that throws is the run whose timings somebody actually wants.");
  ("Every red used to be asked once more out in the living folder before throwing. That was there for one fault - the copier catching a file half written while several of us were writing to it - and the run no longer copies the living folder, so the fault cannot happen and the second ask had nothing left to tell apart. It also had to be told which commit was frozen, purely to know whether to bother, and that is why nothing here is told about a commit any more.");
  let failed_copy = property_get(told, "failed");
  let failed = list_concat_property(failed_copy, here, "failed");
  if (greater_than(failed.length, 0)) {
    qa_gate_parts_print(asked_ms, blamed_ms);
    throw new Error("qa gate: " + failed.join(", ") + " failed");
  }
}
