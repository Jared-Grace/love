import { permission_grants_dispatch_unfenced } from "./permission_grants_dispatch_unfenced.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function permission_grants_dispatch_unfenced_names() {
  "The names of the granted functions that take arguments and reach a dispatcher along a chain that can carry one, with no fence in front of it - the doors, as a plain list, so a ratchet can refuse one more.";
  "The fenced ones are left out on purpose. Reaching a fence is a reason to read a function rather than proof it is safe, but the report already says so, and a gate that failed on them would fail on the very functions that did the right thing.";
  let report = await permission_grants_dispatch_unfenced();
  let unfenced = property_get(report, "unfenced");
  let names = list_map_property(unfenced, "name");
  return names;
}
