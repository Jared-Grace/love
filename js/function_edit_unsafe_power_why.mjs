import { functions_flow_reads } from "./functions_flow_reads.mjs";
import { functions_edit_unsafe_from_reads } from "./functions_edit_unsafe_from_reads.mjs";
import { js_flow_power_names } from "./js_flow_power_names.mjs";
import { js_flow_alias_slice } from "./js_flow_alias_slice.mjs";
import { js_flow_read_power } from "./js_flow_read_power.mjs";
export async function function_edit_unsafe_power_why(f_name) {
  "Why the edit check thinks this function may hand back or use a power: whether it counts as handing one back, which of the functions it hands back from count as handing one back, and which powers it may call or change.";
  "The chain names only the first reason each step was marked, so a step blamed on a power does not say where that power came from. This answers that one step, so a power can be traced back to the function that first handed it out.";
  let reads = await functions_flow_reads();
  let world = functions_edit_unsafe_from_reads(reads);
  let read = reads.get(f_name);
  let powers = js_flow_power_names();
  function lambda(r_inner) {
    let r2 = r_inner.alias;
    return r2;
  }
  let starts = read.returns.map(lambda);
  let returned = js_flow_alias_slice(
    read,
    starts,
    world.returns_alias,
    world.mutating,
  ).callees;
  function lambda2(c) {
    let r3 = powers.includes(c) || world.capable.has(c);
    return r3;
  }
  let returned_capable = returned.filter(lambda2);
  let power = js_flow_read_power(
    read,
    world.mutating,
    world.returns_alias,
    world.capable,
    world.ppower,
  );
  let r = {
    capable: world.capable.has(f_name),
    machine: read.machine,
    reflect: read.reflect,
    returned_capable,
    used: power.used,
    unsafe: world.unsafe.get(f_name) ?? null,
  };
  return r;
}
