import { fn_name } from "./fn_name.mjs";
import { permission_grants_flagged } from "./permission_grants_flagged.mjs";
import { permission_grants_counted } from "./permission_grants_counted.mjs";
import { permission_grants_baseline_read } from "./permission_grants_baseline_read.mjs";
import { permission_grants_versus_baseline } from "./permission_grants_versus_baseline.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export async function permission_grants_gate_run() {
  "gate: a function that already holds an allow rule must still deserve one. the safety check runs when a rule is written and never again, so a granted function that later takes a parameter naming a place to write, or reaches a command runner through an import added since, keeps an approval nobody would give it today.";
  "measured against the baseline rather than against zero, because the grants that fail today are ones a human weighed and wrote on purpose. a grant the baseline does not list fails, a listed grant that now passes fails so the list can only shrink, and a listed grant failing for more reasons than were recorded fails too.";
  let flagged = await permission_grants_flagged();
  let counted = permission_grants_counted(flagged);
  let known = await permission_grants_baseline_read();
  let change = permission_grants_versus_baseline(counted, known);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  let worsened = property_get(change, "worsened");
  let any_added = greater_than(added.length, 0);
  if (any_added) {
    let list = list_map_property(added, "name");
    let message_added =
      "permission grants gate: " +
      added.length +
      " standing grants fail the safety check and were not recorded as known — take the rule out, or narrow the function, or, if the grant was meant, name it to " +
      fn_name("permission_grants_baseline_bless") +
      " one at a time: " +
      list_join_comma(list);
    throw new Error(message_added);
  }
  let any_worsened = greater_than(worsened.length, 0);
  if (any_worsened) {
    let list2 = list_map_property(worsened, "name");
    let message_worsened =
      "permission grants gate: " +
      worsened.length +
      " standing grants fail for more reasons than the baseline holds, so a new hole opened under a grant already blessed — fix the new reason, or, if it was meant, name the grant to " +
      fn_name("permission_grants_baseline_bless") +
      ": " +
      list_join_comma(list2);
    throw new Error(message_worsened);
  }
  let any_stale = greater_than(stale.length, 0);
  if (any_stale) {
    let list3 = list_map_property(stale, "name");
    let message_stale =
      "permission grants gate: " +
      stale.length +
      " baseline entries pass the check now — rerun " +
      fn_name("permission_grants_baseline_write") +
      " to shrink the baseline: " +
      list_join_comma(list3);
    throw new Error(message_stale);
  }
  let r = {
    checked: known.length,
    added: 0,
    worsened: 0,
    stale: 0,
  };
  return r;
}
