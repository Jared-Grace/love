import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_republish_generic(
  chapters_uploaded,
  chapter_upload_stored,
) {
  "Carry every chapter of one explained Bible that a reader can already reach up again, so that what is in front of them is what the store says today.";
  "Publishing a chapter that has never been published is a different question and is asked elsewhere. This one exists because the command that finds its own set asks which chapters are missing from the bucket, and a chapter that is up there but out of date is not missing - so a repair made in the store after publishing reaches nobody, and nothing anywhere says so.";
  "★ A STORE THAT IS PUT RIGHT AFTER PUBLISHING IS A SILENT DIVERGENCE, AND EVERY CHECK OVER IT READS GREEN. The gates that ask whether a chapter is sound read the store under the human's own folder, and the gate that asks whether anything is waiting to go up reads which chapters are missing from the bucket. A chapter that is in both places, sound in one and stale in the other, satisfies all of them. So nothing anywhere complains, and the reader keeps the old wording for as long as nobody thinks of it.";
  "★ THE SHARED BODY IS WHAT MAKES THE SECOND AND THIRD STORE GET THIS AT ALL. Measured 2026-10-01: one of three explained Bibles had a command to do this, and the other two did not, which is the ordinary way a fix lands - it is written where the fault was noticed. The fault is in the shape of publishing, not in any one alphabet, so writing it once and handing in the two halves is what stops the next two stores being found the same way.";
  "The set is the published chapters rather than every chapter in the store, which is what keeps this from being a way of publishing something by accident. Every chapter it touches is one somebody already decided a reader should have; all that changes is which version of it they get.";
  "They go one at a time rather than together, so a chapter that fails to arrive is one chapter and the rest still go.";
  "WHAT GOES UP IS THE STORE AS IT STANDS, SO THIS CARRIES NO REPAIR OF ITS OWN. Whatever command puts the store right has to be run first, and which command that is depends on the store, so each caller says it rather than this. Run this one on its own after a repair that was never applied to the store and every chapter goes up again carrying exactly what the repair was meant to remove - and the sweep reports every chapter republished, because uploading the store faithfully is the whole of what this does.";
  arguments_assert(arguments, 2);
  let chapter_codes = await chapters_uploaded();
  await list_map_async(chapter_codes, chapter_upload_stored);
  let r = {
    republished: list_size(chapter_codes),
    chapter_codes,
  };
  return r;
}
