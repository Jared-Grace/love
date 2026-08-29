import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_recordings_manifest_missing } from "./bible_audio_recordings_manifest_missing.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_get } from "./property_get.mjs";
import { bible_audio_verses_manifest_chapter_write } from "./bible_audio_verses_manifest_chapter_write.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_audio_recordings_manifest_missing_write() {
  "Writes the note of which piece holds which verse for exactly the recordings that have sound and no note, and asks again afterwards to say whether any are left.";
  "★ IT FINDS ITS OWN SET RATHER THAN TAKING A LIST, BECAUSE A LIST OF THESE IS OUT OF DATE THE MOMENT A RUN IS INTERRUPTED. New ones appear whenever a recording run dies part way, and old ones go away when somebody writes the note by hand. Reading the disk each time costs one listing and cannot name a chapter that is already fixed.";
  "★ ASKING THE SAME QUESTION AGAIN AFTERWARDS IS THE ONLY HONEST WAY TO SAY IT WORKED. A run that wrote nothing looks exactly like a run that repaired everything, and the note underneath is written by a function that can fail on a chapter whose translation is not on this disk.";
  "★ A CHAPTER THAT THROWS DOES NOT STOP THE REST, AND IT IS NAMED. Recordings sit in folders that are not always named for a translation, so gathering one chapter's words can be refused while every other chapter on the disk is fine - and losing the whole run to one of those would leave the other repairs unwritten.";
  arguments_assert(arguments, 0);
  let missing = await bible_audio_recordings_manifest_missing();
  let written = [];
  let refused = [];
  for (let recording of missing) {
    let property_name = bible_folder_key();
    let bible_folder = property_get(recording, property_name);
    let chapter_code = property_get(recording, "chapter_code");
    async function write_one() {
      let one = await bible_audio_verses_manifest_chapter_write(
        bible_folder,
        chapter_code,
      );
      return one;
    }
    let manifest = await catch_null_async(write_one);
    if (manifest) {
      list_add(written, recording);
    } else {
      list_add(refused, recording);
    }
  }
  let left = await bible_audio_recordings_manifest_missing();
  let report = {
    written,
    refused,
    remaining: left,
  };
  return report;
}
