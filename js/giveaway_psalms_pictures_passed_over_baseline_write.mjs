import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_paintings_rows } from "./giveaway_psalms_paintings_rows.mjs";
import { property_get } from "./property_get.mjs";
import { giveaway_psalms_pictures_passed_over_baseline_path } from "./giveaway_psalms_pictures_passed_over_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function giveaway_psalms_pictures_passed_over_baseline_write() {
  arguments_assert(arguments, 0);
  ("Rewrite the record of crops passed over for a published name another crop already holds, from what the walk finds right now. For seeding it once, and for shrinking it after a pair has been dealt with - never for blessing a new one, which is the single thing the gate exists to refuse.");
  ("A pair is dealt with in one of two ways, and which one is the owner's to decide by looking at the two files. The same picture sitting in two folders needs nothing done to it at all, and the entry comes out of here once the folder it came from is gone. Two different pictures under one name need one of them renamed on this disk, so that it has an address of its own to be given away under.");
  let told = await giveaway_psalms_paintings_rows();
  let known = property_get(told, "passed_over");
  let path = giveaway_psalms_pictures_passed_over_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "this crop is now passed over for a published name another crop already holds and was not before - open both files: if they are the same picture, nothing is lost and the duplicate folder is what to remove; if they are different pictures, rename one of them so it has an address of its own",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
