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
  Error,
) {
  arguments_assert(arguments, 6);
  let failed_copy = property_get(told, "failed");
  let failed = list_concat_property(failed_copy, here, "failed");
  if (greater_than(failed.length, 0)) {
    ("Every red is asked once more out here, in the folder as it stands, because the copy was taken while several of us were writing to it and a file caught half-copied answers the same way however many times it is asked in there. What that ask finds is printed and nothing else: the verdict below stays exactly what the frozen copy said, since a gate quiet out here may only be quiet because somebody is mid-edit, and a clean answer from this gate is supposed to mean the code is sound");
    ("Whether that second ask happens at all is a question about which kind of copy was frozen, and it lives one name along. A copy standing on a commit holds no half written file, so there is nothing for the second ask to tell apart");
    let joined = list_join_comma(failed);
    let again_ms = await qa_gate_here_again_ms(joined, commit);
    qa_gate_parts_print(asked_ms, blamed_ms, again_ms);
    throw new Error("qa gate: " + failed.join(", ") + " failed");
  }
}
