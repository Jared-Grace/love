import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_republish_wanted_generic } from "./gloss_chapters_republish_wanted_generic.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_republish_generic(
  fn,
  chapters_uploaded,
  chapter_upload_stored,
) {
  "Carry up again every chapter of one explained Bible that a reader can already reach and that has been changed since it was last sent, so that what is in front of them is what the store says today.";
  "Publishing a chapter that has never been published is a different question and is asked elsewhere. This one exists because the command that finds its own set asks which chapters are missing from the bucket, and a chapter that is up there but out of date is not missing - so a repair made in the store after publishing reaches nobody, and nothing anywhere says so.";
  "★ A STORE THAT IS PUT RIGHT AFTER PUBLISHING IS A SILENT DIVERGENCE, AND EVERY CHECK OVER IT READS GREEN. The gates that ask whether a chapter is sound read the store under the human's own folder, and the gate that asks whether anything is waiting to go up reads which chapters are missing from the bucket. A chapter that is in both places, sound in one and stale in the other, satisfies all of them. So nothing anywhere complains, and the reader keeps the old wording for as long as nobody thinks of it.";
  "★ THE SHARED BODY IS WHAT MAKES THE SECOND AND THIRD STORE GET THIS AT ALL. Measured 2026-10-01: one of three explained Bibles had a command to do this, and the other two did not, which is the ordinary way a fix lands - it is written where the fault was noticed. The fault is in the shape of publishing, not in any one alphabet, so writing it once and handing in the two halves is what stops the next two stores being found the same way.";
  "★ THE DECIDING IS NOT DONE HERE, AND THAT IS WHAT MAKES IT CHECKABLE. The sending half cannot be tried out - a chapter cannot be sent a little - so the choosing stands under its own name and can be asked on its own, in under a second, without anything leaving the machine. This is the half that does the irreversible thing and it holds no judgment of its own.";
  "★ THE NARROWING IS SAFE ONLY BECAUSE NOT KNOWING COUNTS AS CHANGED. A chapter the record cannot account for is sent, exactly as a chapter known to differ is. So before any records exist every published chapter is unaccounted for and the set is the whole of what it used to be - the narrowing can make this do less work and can never make it do less than it promises.";
  "★ IT NOW ANSWERS HONESTLY WHEN THE REPAIR WAS FORGOTTEN, WHICH IT USED TO HIDE. Run before the repair that was meant to come first, the old body sent every chapter and reported every chapter republished, which reads as the fault having been carried up when it was the fault that was carried up. This one finds nothing changed and says nothing republished, which is the truth and is a question rather than a reassurance.";
  "They go one at a time rather than together, so a chapter that fails to arrive is one chapter and the rest still go.";
  "WHAT GOES UP IS THE STORE AS IT STANDS, SO THIS CARRIES NO REPAIR OF ITS OWN. Whatever command puts the store right has to be run first, and which command that is depends on the store, so each caller says it rather than this.";
  arguments_assert(arguments, 3);
  let r2 = await gloss_chapters_republish_wanted_generic(fn, chapters_uploaded);
  let wanted = property_get(r2, "wanted");
  await list_map_async(wanted, chapter_upload_stored);
  let r = {
    republished: list_size(wanted),
    published: property_get(r2, "published"),
    drifted: property_get(r2, "drifted"),
    unaccounted: property_get(r2, "unaccounted"),
    chapter_codes: wanted,
  };
  return r;
}
