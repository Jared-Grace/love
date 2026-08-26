import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates_repo_lookup_reaching } from "./qa_gates_repo_lookup_reaching.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gates_repo_lookup_reaching_baseline_path } from "./qa_gates_repo_lookup_reaching_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function qa_gates_repo_lookup_reaching_gate_run() {
  "Gate: no new gate may reach the question of which repo this machine is currently pointed at. Read-only.";
  "Every gate is judged inside a frozen copy of the repo, and only committed files are in that copy. The answer to that question lives in a setting nobody commits, so asked in there it comes back with no repo of that name and throws.";
  "A gate that throws is worse than a gate that fails. It writes down no offenders, and a gate naming nobody cannot be shown to be about somewhere else, so it counts against every app and holds the whole site out of every deployment. Measured 2026-08-26: two gates were doing this and between them made sixteen judged commits unshippable for every app. Both were found the same way, by spending a quarter of an hour judging a commit in order to be told the name of the next one. This is that quarter of an hour, spent once and in the open.";
  "Measured against what the repo already carried rather than against zero. The nineteen it starts with reach the question by importing and not by calling on a path that runs - the judging record was read afterwards and none of them threw - so failing on them today would be refusing something that is not going wrong. The list only shrinks, so a twentieth fails, and so does one left recorded after it has been put right.";
  arguments_assert(arguments, 0);
  let found = await qa_gates_repo_lookup_reaching();
  let walked = property_get(found, "walked");
  let offenders = property_get(found, "offenders");
  let path = qa_gates_repo_lookup_reaching_baseline_path();
  let hint =
    "this gate can reach the question of which repo this machine is pointed at, and that question throws inside the frozen copy every gate is judged in - work the folder out from where the code is standing instead";
  let name_write = fn_name("qa_gates_repo_lookup_reaching_baseline_write");
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    hint,
    name_write,
  );
  return r;
}
