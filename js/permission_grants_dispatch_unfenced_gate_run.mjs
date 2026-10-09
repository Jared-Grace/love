import { permission_grants_dispatch_unfenced } from "./permission_grants_dispatch_unfenced.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { permission_grants_dispatch_unfenced_baseline_path } from "./permission_grants_dispatch_unfenced_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export async function permission_grants_dispatch_unfenced_gate_run() {
  "QA gate: what offends now must be what the baseline already held.";
  "Measured against the baseline rather than against nought, because the repo already carried some of these when this was written. What it holds is the thing worth holding - today's change is not allowed to add one more.";
  "How many granted functions were asked travels out with the verdict, so a sweep that has stopped reaching the grant list reads as nought checked rather than as clean.";
  let report = await permission_grants_dispatch_unfenced();
  let checked = property_get(report, "checked");
  let unfenced = property_get(report, "unfenced");
  let offenders = list_map_property(unfenced, "name");
  let path = permission_grants_dispatch_unfenced_baseline_path();
  let hint = text_combine_multiple([
    "a granted function takes arguments and reaches a dispatcher with no fence in front - so one standing approval lets an argument choose which repo function runs - take the grant away with ",
    fn_name("permission_grant_remove"),
    " or fix the name inside the function; only if you read the chain and the name is fixed after all run the baseline writer",
  ]);
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    hint,
    fn_name("permission_grants_dispatch_unfenced_baseline_write"),
  );
  let r2 = {
    ...r,
    checked,
  };
  return r2;
}
