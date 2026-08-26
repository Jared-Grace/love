import { qa_gates_repo_lookup_reaching } from "./qa_gates_repo_lookup_reaching.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gates_repo_lookup_reaching_baseline_path } from "./qa_gates_repo_lookup_reaching_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function qa_gates_repo_lookup_reaching_baseline_write() {
  "Rewrite the record of gates that can reach the which-repo question, from what the source says right now. For seeding it once, and for shrinking it after a gate has been given a folder it works out from where it is standing - never for blessing a new one, which is the single thing the gate exists to refuse.";
  "What it holds when first written is nineteen gates, and every one of them reaches the question by importing rather than by calling on a path that runs. That is not a guess: the judging of 2026-08-26 was read afterwards and not one of the nineteen threw, while the two that had been throwing all week were repaired the same afternoon and are not in the list at all. So the record is of a reach that is real and a throw that is not, which is the honest thing to write down and also the reason it is a record rather than a let-off.";
  "Recording them by name is what lets a twentieth one fail. A gate reaching that question is one uncommitted setting away from throwing inside the frozen copy, and a gate that throws there names nobody and holds every app out of every deployment.";
  let found = await qa_gates_repo_lookup_reaching();
  let known = property_get(found, "offenders");
  let path = qa_gates_repo_lookup_reaching_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "this gate can reach the question of which repo this machine is pointed at, which throws inside the frozen copy every gate is judged in - work the folder out from where the code is standing instead, rather than recording the gate as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
