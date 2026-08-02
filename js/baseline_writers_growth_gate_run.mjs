import { baseline_writers_growth_unguarded } from "./baseline_writers_growth_unguarded.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function baseline_writers_growth_gate_run() {
  "Gate: every ratchet writer must refuse to record what its file did not already hold, or be named as one of the few allowed to. Throws so the dispatcher seam exits nonzero.";
  "The four writers this was built for each said in their own prose that they must never bless a new offense, and each then wrote whatever it was handed. Prose is not a check, and the family kept growing around the gap - a new writer landed from a peer while this was being written.";
  "So the check is on the shape of the family rather than on the four names: a writer added tomorrow is asked the same question without anybody remembering to add it here.";
  let offenders = await baseline_writers_growth_unguarded();
  console.log("ratchet writers that cannot refuse growth: " + offenders.length);
  list_empty_is_assert_json(offenders, {
    hint: "each of these can record something its file did not already hold, so the ratchet turns both ways and the rewrite gets reached for at exactly the moment the gate goes red - call a growth assert before writing, or, if growing really is honest here, say so beside the reason in the exempt list",
    offenders,
  });
  let r = {
    unguarded: 0,
  };
  return r;
}
