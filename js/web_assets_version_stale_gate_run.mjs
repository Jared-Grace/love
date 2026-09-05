import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { web_assets_stamped_changed } from "./web_assets_stamped_changed.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export async function web_assets_version_stale_gate_run() {
  "The assets on the disk are the assets the version stamp was last set for, so that art cannot be sent up to storage without the stamp on its address being moved.";
  "THE FAILURE IT IS BUILT FOR IS SILENT AT EVERY OTHER PLACE SOMEBODY WOULD LOOK. Storage names a file by its path and nothing else, so a picture drawn again goes up at the address the old one had. Every phone that has been here before was told that address may be kept for a year, so it never asks again: the new art sits in storage and is served to nobody. Nothing throws, nothing logs, the pages build and deploy, and the only symptom is a person saying the picture did not change.";
  "IT WATCHES THE FILES AND NOT THE UPLOAD, because the upload leaves nothing behind to watch. Anything that changes an asset moves this - a redraw, a new picture, a deletion - and the only way to move it back is to set a new stamp and write the record, which is exactly the pair of steps that was being forgotten.";
  "It was written the day the second upload of one day went up, where the stamp had to grow a letter on the end because a date could not tell the two apart. That letter was remembered by hand twice and nearly forgotten twice, which is the whole argument for a gate rather than a paragraph.";
  arguments_assert(arguments, 0);
  let changed = await web_assets_stamped_changed();
  let added = property_get(changed, "added");
  let gone = property_get(changed, "gone");
  let moved = add(added.length, gone.length);
  let hint = text_combine_multiple([
    "the assets on the disk are not the ones the version stamp was last set for, so anything sent up now would sit in storage at an address every phone that has been here already holds as current - set a new stamp in ",
    fn_name("web_assets_version"),
    ", a letter on the end of the date for a second upload in one day, and then run web_assets_stamped_write",
  ]);
  equal_assert_json(moved, 0, {
    hint,
    added,
    gone,
    changed,
  });
  return changed;
}
