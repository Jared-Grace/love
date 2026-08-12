import { permission_grants_flagged } from "./permission_grants_flagged.mjs";
import { permission_grants_baseline_read } from "./permission_grants_baseline_read.mjs";
import { permission_grants_baseline_file_write } from "./permission_grants_baseline_file_write.mjs";
import { list_find_property_try_or_null } from "./list_find_property_try_or_null.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function permission_grants_baseline_bless(unaliased) {
  "record one named standing grant in the baseline even though it fails the safety check — the way out when a grant was weighed and wanted anyway";
  "without this the gate has no clear path once a deliberate grant fails the check: the wholesale rewrite refuses to grow, so the only way to green would be deleting a rule somebody meant to write, and a gate whose only remedy is undoing the decision gets switched off instead of read";
  "growth is one name at a time and the name has to be typed, because a baseline that grows on its own stops being a record of decisions and becomes where failures go to be forgotten";
  "do NOT grant. Nothing about the code here reads as unsafe, so the check passes it - but this is the one command that writes the record of which unsafe grants were allowed to stand, and a standing approval on it would let that record grow without anybody typing a name, which is the single thing the paragraph above says it must never do.";
  let flagged = await permission_grants_flagged();
  let entry = list_find_property_try_or_null(flagged, "name", unaliased);
  let reasons = entry ? property_get(entry, "refusals") : [];
  list_empty_not_is_assert_json(reasons, {
    hint: "this grant passes the safety check already, so there is nothing to bless and a baseline entry for it would go stale immediately",
    unaliased,
  });
  let known = await permission_grants_baseline_read();
  let before = list_find_property_try_or_null(known, "name", unaliased);
  let count = reasons.length;
  if (before) {
    property_set(before, "refusals", count);
  } else {
    let one = {
      name: unaliased,
      refusals: count,
    };
    list_add(known, one);
  }
  await permission_grants_baseline_file_write(known);
  let r = {
    name: unaliased,
    refusals: count,
    reasons,
  };
  return r;
}
