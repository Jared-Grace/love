import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { baseline_names_change } from "./baseline_names_change.mjs";
import { property_get } from "./property_get.mjs";
import { list_difference } from "./list_difference.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function baseline_known_shrink_write(offenders, path) {
  arguments_assert(arguments, 2);
  ("Rewrite a ratchet's record so it holds exactly the names it already held that still offend, answering with the ones it dropped and, separately, with the ones that have started offending and were not recorded.");
  ("★ IT CANNOT GROW THE RECORD, BECAUSE THE ONLY THING IT EVER WRITES IS A SUBSET OF WHAT THE RECORD ALREADY HELD. That is a stronger promise than the assert its neighbours make and it needs nothing to have run first: growth is unrepresentable here rather than refused.");
  ("The assert is called anyway, on the subset. It is no longer a policy about the repo - it is a proof that the subset was taken correctly, and the one thing that could still put an unrecorded name on disk is a fault in these few lines.");
  ("WHY THAT MATTERS RATHER THAN BEING A TIDY-UP. A writer that refuses the whole rewrite whenever anything unrelated has started offending cannot shrink at all in a folder several people are cutting in at once, which is the ordinary state of this one. Measured 2026-09-01: three of the four functions standing over the work-size ceiling had been touched by a peer within the hour, one of them seventy-one seconds earlier, and the record's single stale entry could not be dropped by anybody for that reason and no other. A record that can only shrink, and never can, is a record that only grows.");
  ("The refusal is not lost, it is put where somebody reads it. The gate beside the record already refuses a name that offends and is not recorded, and the gate is the thing that goes red; a writer refusing as well was refusing twice and shrinking never. What has started offending is handed back rather than thrown, so a person running this still sees it and the drop still happens.");
  ("A record with no file yet is seeded with everything offending. There is nothing to take a subset of, and the first seeding is the one write allowed to record anything.");
  ("Emptying is still refused, next door. A reading that reached nothing hands over an empty list, the subset is then empty too, and the collapse assert every write goes through is what catches it - so nothing here has to know which readings can come back empty-handed.");
  ("THE COMPARISON IS MADE ONE NAME ALONG, shared with the gate that refuses on it, and it hands the record back rather than leaving this one to open the file a second time. Two copies of the comparison would be two answers about what has newly started offending, and the whole arrangement rests on the gate refusing exactly what this one declines to bless.");
  let exists = await file_exists(path);
  let first = not(exists);
  if (first) {
    let seeded = await baseline_known_write(offenders, path);
    let r = {
      written: seeded,
      dropped: [],
      added: [],
    };
    return r;
  }
  let change = await baseline_names_change(offenders, path);
  let recorded = property_get(change, "recorded");
  let dropped = property_get(change, "stale");
  let added = property_get(change, "added");
  let kept = list_difference(recorded, dropped);
  await baseline_known_growth_assert(
    kept,
    path,
    "what is about to be written holds a name the record did not, which cannot happen when the subset is taken correctly - so this is a fault in the shrink itself rather than anything about the repo",
  );
  let written = await baseline_known_write(kept, path);
  let r2 = {
    written,
    dropped,
    added,
  };
  return r2;
}
