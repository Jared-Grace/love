import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
import { baseline_change_refuse } from "./baseline_change_refuse.mjs";
export async function baseline_names_gate_advice_generic(
  offenders,
  path,
  hint_get,
  name_write,
) {
  arguments_assert(arguments, 4);
  ("Run a ratchet gate over a flat list of offending names, the same as its sibling in every way but one: what it says about the names that newly offend is worked out from those names rather than written down beforehand.");
  ("A sentence written beforehand can only ever say what is true of the whole class, so it says the same thing about a name that wants renaming and a name that must on no account be renamed. Where the difference can be worked out, working it out is worth more than any sentence somebody could have written, and it is worth most at the moment a gate has just stopped somebody.");
  ("An offense here is a bare name, so the two lists come out of the comparison ready to refuse. Both teeth are then spoken of at once, and the reason that matters is written where the refusing is done.");
  let recorded = await baseline_known_read(path);
  let change = names_versus_baseline(offenders, recorded);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  let r = await baseline_change_refuse(added, stale, hint_get, name_write);
  return r;
}
