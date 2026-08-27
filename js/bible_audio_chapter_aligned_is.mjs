import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_verses_manifest_path } from "./bible_audio_verses_manifest_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_audio_chapter_aligned_is(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Whether the recording of one chapter on this disk is cut so that each piece of sound holds exactly one verse.";
  "★ A MISSING NOTE ANSWERS NO, AND THAT IS A READING RATHER THAN A GUESS. The note is written by the generator every time it records a chapter, so a folder without one was filled before the cutting was made to follow verses. There is no third state to be careful about: either the recording says where its verses are, or it cannot say, and a recording that cannot say is not one anything may index.";
  "★ IT ANSWERS ABOUT ONE RECORDING AND NEVER ABOUT THE CHAPTER. Two recordings of the same chapter cut it in different places, so the question only means anything beside the sound files it is asked about. That is why the note lives in the audio folder and why this reads it from there rather than working it out from the text.";
  arguments_assert(arguments, 2);
  let p = bible_audio_verses_manifest_path(bible_folder, chapter_code);
  let present = await file_exists(p);
  if (not(present)) {
    return false;
  }
  let manifest = await file_read_json(p);
  let aligned = property_get(manifest, "aligned");
  return aligned;
}
