import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { permission_grants_flagged } from "./permission_grants_flagged.mjs";
import { permission_grants_counted } from "./permission_grants_counted.mjs";
import { permission_grants_baseline_read } from "./permission_grants_baseline_read.mjs";
import { permission_grants_versus_baseline } from "./permission_grants_versus_baseline.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
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
  ("each of the three faults is thrown as a record rather than as a sentence with the names read into it, because whoever reads a failure next reads it for names and cannot tell a grant being accused from a command being recommended. the commands named here are among the most reachable in the repo, and naming them beside the offenders held every app that ships them.");
  let list = list_map_property(added, "name");
  let remove = fn_name("permission_grant_remove");
  let dead_remove = fn_name("permission_grants_dead_remove");
  let bless = fn_name("permission_grants_baseline_bless");
  let hint_added = text_combine_multiple([
    "these standing grants fail the safety check and were not recorded as known - take the rule out with ",
    remove,
    ", or, where the function has been deleted and the rule is left naming nothing, take back every such rule at once with ",
    dead_remove,
    ", or narrow the function, or, if the grant was meant, name it to ",
    bless,
    " one at a time",
  ]);
  list_empty_is_assert_json(list, {
    hint: hint_added,
  });
  let list2 = list_map_property(worsened, "name");
  let hint_worsened = text_combine_multiple([
    "these standing grants fail for more reasons than the baseline holds, so a new hole opened under a grant already blessed - fix the new reason, or, if it was meant, name the grant to ",
    bless,
  ]);
  list_empty_is_assert_json(list2, {
    hint: hint_worsened,
  });
  let list3 = list_map_property(stale, "name");
  let baseline_write = fn_name("permission_grants_baseline_write");
  let hint_stale = text_combine_multiple([
    "these baseline entries pass the check now - rerun ",
    baseline_write,
    " to shrink the baseline",
  ]);
  list_empty_is_assert_json(list3, {
    hint: hint_stale,
  });
  let r = {
    checked: known.length,
    added: 0,
    worsened: 0,
    stale: 0,
  };
  return r;
}
