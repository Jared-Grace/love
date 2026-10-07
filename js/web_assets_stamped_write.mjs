import { arguments_assert } from "./arguments_assert.mjs";
import { web_assets_stamped_changed } from "./web_assets_stamped_changed.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
import { web_assets_sizes } from "./web_assets_sizes.mjs";
import { web_assets_stamped_path } from "./web_assets_stamped_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function web_assets_stamped_write() {
  "Writes down the assets as they are now under the version stamp as it is now, which is what takes the gate green again after the art has changed.";
  "IT REFUSES WHILE THE STAMP IS STILL THE ONE ALREADY WRITTEN DOWN, and that refusal is the whole interlock. Accepting a replaced file under an unchanged stamp would record precisely the state the gate exists to forbid - new art at an address every reader holds as current - and would do it while looking like the repair.";
  "Nothing changed and the same stamp is not a refusal, because writing the same record again is what a caller who is not sure should be able to do.";
  "A FILE THAT IS MERELY NEW IS NOT A REASON TO REFUSE EITHER, and it asks only after what went for the same reason the gate does. A reader can only be holding a stale copy of an address a reader has already asked for, and nobody has ever asked for a path that did not exist until today - so a new path needs no new stamp, and demanding one would charge every returning phone a refetch of every picture there is to buy nothing. A replaced file always leaves its old line in what went, so this still cannot be walked past.";
  arguments_assert(arguments, 0);
  let changed = await web_assets_stamped_changed();
  let stamp = property_get(changed, "stamp");
  let stamped = property_get(changed, "stamped");
  let added = property_get(changed, "added");
  let gone = property_get(changed, "gone");
  let differs = greater_than(gone.length, 0);
  let held = equal(stamp, stamped);
  let refuse = and(differs, held);
  let hint = text_combine_multiple([
    "an asset has been replaced or taken away while the version stamp has not moved, so writing this record now would file the new art under the address the old art is being served at - set a new stamp in ",
    fn_name("web_assets_version"),
    " first, a letter on the end of the date for a second upload in one day",
  ]);
  let b = not(refuse);
  assert_json(b, {
    hint,
    stamp,
    stamped,
    added,
    gone,
  });
  let lines = await web_assets_sizes();
  let record = {
    stamp,
    lines,
  };
  let path = web_assets_stamped_path();
  await file_overwrite_json(path, record);
  let r = {
    stamp,
    path,
    files: lines.length,
  };
  return r;
}
