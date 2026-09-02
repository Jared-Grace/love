import { arguments_assert } from "./arguments_assert.mjs";
import { list_difference } from "./list_difference.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function exemption_entries_dead(entries, excused, live) {
  "The two faults every hand-written let-off list can carry whatever it is letting off: a name nothing answers to any more, and an entry that never said why.";
  "Both are the same defect wearing two faces. A let-off is a claim somebody typed once and nobody reads again, and it is the only part of a check that can go on being believed after it stops being true - the lists beside it are read off the files and cannot drift. A stale name is worse than idle rather than merely untidy: it is a standing let-off waiting on a name, so whatever is written under that name afterwards is excused from the moment it exists without anybody arguing for it.";
  "Whether a let-off still covers anything is not asked here, because that answer is different in every list - one asks whether a gate is wired, another whether a writer already refuses growth - and a shared reading that took a test to run would be the caller writing the check anyway.";
  "The names are handed over already extracted rather than dug out with a key, because the lists spell the property differently and a key parameter would be one more thing to get wrong. The entries come too, so a reason that was never written can be reported whole - the entry shows its own name, which a key would have been needed to print.";
  "The count comes back beside the faults because both faults are drawn from the same list, and either one drawn from nothing gives the same empty answer as a list in good order.";
  arguments_assert(arguments, 3);
  let stale = list_difference(excused, live);
  let unreasoned = [];
  for (let entry of entries) {
    let why = property_get(entry, "why");
    if (not(why)) {
      list_add(unreasoned, entry);
    }
  }
  let dead = {
    excused: list_size(excused),
    stale,
    unreasoned,
  };
  return dead;
}
