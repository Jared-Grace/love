import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { permission_grants_dispatch_unfenced_names } from "./permission_grants_dispatch_unfenced_names.mjs";
import { permission_grants_dispatch_unfenced_baseline_path } from "./permission_grants_dispatch_unfenced_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function permission_grants_dispatch_unfenced_gate_run() {
  "QA gate: what offends now must be what the baseline already held.";
  "Measured against the baseline rather than against nought, because the repo already carried some of these when this was written. What it holds is the thing worth holding - today's change is not allowed to add one more.";
  let offenders = await permission_grants_dispatch_unfenced_names();
  let path = permission_grants_dispatch_unfenced_baseline_path();
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    text_combine_multiple([
      "a granted function takes arguments and reaches a dispatcher with no fence in front - so one standing approval lets an argument choose which repo function runs - take the grant away with ",
      fn_name("permission_grant_remove"),
      " or fix the name inside the function; only if you read the chain and the name is fixed after all run the baseline writer",
    ]),
    fn_name("permission_grants_dispatch_unfenced_baseline_write"),
  );
  return r;
}
