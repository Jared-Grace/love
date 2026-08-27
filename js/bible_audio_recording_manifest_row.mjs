import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bible_audio_verses_manifest_chapter_write } from "./bible_audio_verses_manifest_chapter_write.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { equal } from "./equal.mjs";
export async function bible_audio_recording_manifest_row(recording) {
  "$plain recording";
  "One recording re-noted against the current cutting rule, answered as a single row saying whether it could be judged at all and whether it lines up.";
  "★ EVERY ROW HAS THE SAME SHAPE, INCLUDING THE ONES THAT COULD NOT BE JUDGED. A recording whose translation is not on this disk cannot be compared to anything, and returning nothing for it would let it be counted as though it had passed. Saying so in a field keeps the three answers - lines up, does not line up, could not be asked - apart, which is the difference between a count that sums to the total and one that quietly loses a third of its subjects.";
  "★ THE COUNTS COME BACK AND THE ROWS DO NOT. A note may hold hundreds of pieces of text and a sweep over five hundred recordings would then answer with the whole of every recording, which nobody can read. How many pieces, how many units, how many did not match: that is enough to decide which chapter to open, and the note itself is on the disk beside the sound for whoever opens it.";
  arguments_assert(arguments, 1);
  let bible_folder = property_get(recording, "bible_folder");
  let chapter_code = property_get(recording, "chapter_code");
  async function lambda() {
    let m = await bible_audio_verses_manifest_chapter_write(
      bible_folder,
      chapter_code,
    );
    return m;
  }
  let manifest = await catch_null_async(lambda);
  let missing = equal(manifest, null);
  if (missing) {
    let unjudged = {
      bible_folder,
      chapter_code,
      judged: false,
      aligned: false,
      chunks: 0,
      units: 0,
      unmatched: 0,
    };
    return unjudged;
  }
  let unmatched = property_get(manifest, "unmatched");
  let row = {
    bible_folder,
    chapter_code,
    judged: true,
    aligned: property_get(manifest, "aligned"),
    chunks: property_get(manifest, "chunks"),
    units: property_get(manifest, "units"),
    unmatched: unmatched.length,
  };
  return row;
}
