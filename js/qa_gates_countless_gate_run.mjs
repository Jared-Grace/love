import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gates_countless } from "./qa_gates_countless.mjs";
import { qa_gates_countless_baseline_path } from "./qa_gates_countless_baseline_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function qa_gates_countless_gate_run() {
  "QA gate: a gate that passes has to say how much it reached, so that finding nothing can be told apart from looking at nothing.";
  "Every gate here is green by finding no offenders. That is also what a gate says when its sweep has been pointed at an index built a new way, at a name that has moved, or at a folder that is no longer there - the verdict is the same word, and the thing it was watching is unwatched from that day on with nobody told. A count of what was walked is the only thing that has ever separated the two, because it falls to nothing while the verdict stays green.";
  "This was found the ordinary way rather than reasoned about in advance: a gate over the words a browser database is opened with reported how much it had checked, and the amount it reported was the number of things wrong with it, so a clean run answered nothing checked. Nobody could have read that as a warning. It was noticed only because somebody happened to be editing the file.";
  "Measured against the baseline rather than against zero, because ninety-four gates already answered this way on the day it was written and rewriting all ninety-four at once is a worse trade than stopping the ninety-fifth. What it holds is the thing worth holding: the gate written today may not be the ninety-fifth.";
  "How many gates were asked travels out with the verdict, which is the rule this gate is about and would be an odd thing to break here of all places.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let walked = await qa_gates_countless();
  let gates = property_get(walked, "gates");
  let countless = property_get(walked, "countless");
  let path = qa_gates_countless_baseline_path();
  let name_write = fn_name("qa_gates_countless_baseline_write");
  let hint =
    "these gates say nothing a reader could tell a clean run from a blind one by - hand back how much was reached alongside the verdict, a count of what the sweep walked rather than a length worked out from the offenders, which is nothing on every run that passes anyway";
  let told = await baseline_names_gate_generic(
    countless,
    path,
    hint,
    name_write,
  );
  let added = property_get(told, "added");
  let stale = property_get(told, "stale");
  let r = {
    gates,
    added,
    stale,
  };
  return r;
}
