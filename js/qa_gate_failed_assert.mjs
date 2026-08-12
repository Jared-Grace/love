import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat_property } from "./list_concat_property.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { qa_gate_here_again_ms } from "./qa_gate_here_again_ms.mjs";
import { qa_gate_parts_print } from "./qa_gate_parts_print.mjs";
export async function qa_gate_failed_assert(
  told,
  here,
  commit,
  asked_ms,
  blamed_ms,
) {
  arguments_assert(arguments, 5);
  ("Throws when anything went red, naming every gate that did, and returns quietly when nothing did.");
  ("The two halves are joined first. What the frozen copy complained about and what this machine complained about are one list here, so one thrown sentence covers both and neither half can go red without being said.");
  ("Before throwing, every red is asked once more out in the folder as it stands, and what that finds is printed and nothing else. The copy was taken while several of us were writing to it, so a gate may have been shown a file caught half-written - but a gate that goes quiet out here may only be quiet because somebody is mid-edit, so the verdict stays exactly what the frozen copy said. A clean answer from the whole run is supposed to mean the code is sound.");
  ("How long the parts took is printed on the way out as well as on the way through, because a run that throws is the run whose timings somebody actually wants.");
  let failed_copy = property_get(told, "failed");
  let failed = list_concat_property(failed_copy, here, "failed");
  if (greater_than(failed.length, 0)) {
    ("Whether that second ask happens at all is a question about which kind of copy was frozen, and it lives one name along. A copy standing on a commit holds no half written file, so there is nothing for the second ask to tell apart");
    let joined = list_join_comma(failed);
    let again_ms = await qa_gate_here_again_ms(joined, commit);
    qa_gate_parts_print(asked_ms, blamed_ms, again_ms);
    throw new Error("qa gate: " + failed.join(", ") + " failed");
  }
}
