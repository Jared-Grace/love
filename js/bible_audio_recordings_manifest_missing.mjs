import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_recordings } from "./bible_audio_recordings.mjs";
import { bible_audio_recording_sound_is } from "./bible_audio_recording_sound_is.mjs";
import { not } from "./not.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_get } from "./property_get.mjs";
import { bible_audio_verses_manifest_path } from "./bible_audio_verses_manifest_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_map_async_filter_null_not_is } from "./list_map_async_filter_null_not_is.mjs";
export async function bible_audio_recordings_manifest_missing() {
  "Every folder of recordings on this disk holding sound that nothing has written a note about, so nothing knows which piece of it holds which verse.";
  "★ A RECORDING WITH NO NOTE IS LOST RATHER THAN BROKEN, WHICH IS WHY IT HAS TO BE ASKED FOR BY NAME. What decides whether a chapter still needs recording is whether its folder exists, so a folder with sound in it is never offered again - and the note is what says where each verse begins, so without one the sound cannot be played against a text. Nothing goes red. The chapter is simply finished and unusable, and stays that way.";
  "★ IT HAPPENS WHEN A RUN DIES BETWEEN THE SOUND AND THE NOTE, AND THAT WINDOW IS REAL. The pieces are written one at a time as they are spoken and the note is written afterwards for the whole chapter, so anything that ends the run in between - a crash, a kill, a full disk - leaves exactly this. One chapter landed here on 2026-08-29 when the reader of the engine's own report threw after the sound was already down.";
  "★ FOLDERS WITH NO SOUND ARE LEFT OUT, BECAUSE WRITING THEM A NOTE WOULD BE THE WRONG REMEDY. An empty folder has no note either, but what it needs is deleting rather than describing, and that already has its own name. Asking only about folders that have sound keeps this answer to the ones a note would actually rescue.";
  arguments_assert(arguments, 0);
  let recordings = await bible_audio_recordings();
  async function recording_each(recording) {
    let heard = await bible_audio_recording_sound_is(recording);
    if (not(heard)) {
      return null;
    }
    let property_name = bible_folder_key();
    let bible_folder = property_get(recording, property_name);
    let chapter_code = property_get(recording, "chapter_code");
    let p = bible_audio_verses_manifest_path(bible_folder, chapter_code);
    let noted = await file_exists(p);
    if (noted) {
      return null;
    }
    return recording;
  }
  let missing = await list_map_async_filter_null_not_is(
    recordings,
    recording_each,
  );
  return missing;
}
