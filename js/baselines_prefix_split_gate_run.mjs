import { baselines_prefix_split } from "./baselines_prefix_split.mjs";
import { baselines_prefix_split_baseline_path } from "./baselines_prefix_split_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function baselines_prefix_split_gate_run() {
  "QA gate: what offends now must be what the baseline already held.";
  "Measured against the baseline rather than against nought, because the repo already carried some of these when this was written. What it holds is the thing worth holding - today's change is not allowed to add one more.";
  let offenders = await baselines_prefix_split();
  let path = baselines_prefix_split_baseline_path();
  let name_write = fn_name("baselines_prefix_split_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "a ratchet's record and its rewriter are filed under different names here, so somebody reading one cannot guess the other - rename the rewriter to share the record's prefix",
    name_write,
  );
  return r;
}
