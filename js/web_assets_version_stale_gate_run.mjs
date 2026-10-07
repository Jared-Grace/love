import { arguments_assert } from "./arguments_assert.mjs";
import { web_assets_stamped_changed } from "./web_assets_stamped_changed.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export async function web_assets_version_stale_gate_run() {
  "No asset has been replaced or taken away since the version stamp was last set, so art cannot be sent up over an address readers are already holding without the stamp on it being moved.";
  "THE FAILURE IT IS BUILT FOR IS SILENT AT EVERY OTHER PLACE SOMEBODY WOULD LOOK. Storage names a file by its path and nothing else, so a picture drawn again goes up at the address the old one had. Every phone that has been here before was told that address may be kept for a year, so it never asks again: the new art sits in storage and is served to nobody. Nothing throws, nothing logs, the pages build and deploy, and the only symptom is a person saying the picture did not change.";
  "IT WATCHES THE FILES AND NOT THE UPLOAD, because the upload leaves nothing behind to watch. Anything that replaces or removes an asset moves this, and the only way to move it back is to set a new stamp and write the record, which is exactly the pair of steps that was being forgotten.";
  "A PICTURE THAT IS MERELY NEW DOES NOT COUNT, AND COUNTING IT WAS A REAL FAULT RATHER THAN AN EXCESS OF CARE. This asked for the total of what appeared and what went, so thirteen new glyphs - with nothing replaced and nothing removed - read exactly like thirteen redraws. It names no function, so it cannot be placed against any one app and stops all thirty-three at once: on the sixth of October it held every app in the repo, and on the third it had already done it once. The reason written above is the proof it was wrong to: a reader can only be left holding an old copy of an address a reader has already asked for, and nobody has ever asked for a path that did not exist until today. A new path is already a new address, and the stamp buys it nothing while costing every returning phone a refetch of every picture there is.";
  "SO IT ASKS WHETHER ANYTHING WENT, AND A REDRAW IS THE REASON THAT IS ENOUGH. The record is one line per file holding its path and its length, so a picture drawn again is in both lists at once - at its old length in what went, at its new length in what appeared. Asking after what went therefore catches every redraw, and lets a pure addition through.";
  "IT IS STILL STRICTER THAN IT HAS TO BE IN ONE PLACE, ON PURPOSE. An asset merely deleted, or renamed, also shows up in what went, and neither can strand a reader - the copy already in storage is untouched and still served. Telling those apart from a redraw means cutting each line at its last space to compare paths rather than lines, which buys only the rarest of the three cases and asks what a path containing a space should mean. Stopping on a deletion is safe, and a deletion is worth a look anyway.";
  "ONE HOLE REMAINS AND IS NOT CLOSED BY ANY OF THIS: a picture redrawn to exactly the same number of bytes appears in neither list. The record stores lengths rather than a hash of the bytes, deliberately and for reasons written where it is built, so that case is invisible here and always was.";
  "It was written the day the second upload of one day went up, where the stamp had to grow a letter on the end because a date could not tell the two apart. That letter was remembered by hand twice and nearly forgotten twice, which is the whole argument for a gate rather than a paragraph.";
  arguments_assert(arguments, 0);
  let changed = await web_assets_stamped_changed();
  let added = property_get(changed, "added");
  let gone = property_get(changed, "gone");
  let combined = text_combine_multiple([
    ", a letter on the end of the date for a second upload in one day, and then run ",
    fn_name("web_assets_stamped_write"),
  ]);
  let hint = text_combine_multiple([
    "an asset has been replaced or taken away since the version stamp was last set, so a redrawn picture sent up now would sit in storage at the address the old one is being served from and no phone that has been here before would ever ask again - set a new stamp in ",
    fn_name("web_assets_version"),
    combined,
  ]);
  equal_assert_json(gone.length, 0, {
    hint,
    added,
    gone,
    changed,
  });
  return changed;
}
