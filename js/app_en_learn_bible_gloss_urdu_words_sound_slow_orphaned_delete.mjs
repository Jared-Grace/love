import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_slow_orphaned } from "./app_en_learn_bible_gloss_urdu_words_sound_slow_orphaned.mjs";
import { property_get } from "./property_get.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_slow } from "./app_en_learn_bible_gloss_urdu_words_sound_slow.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_slow_upload_path } from "./app_en_learn_bible_gloss_urdu_words_sound_slow_upload_path.mjs";
import { firebase_storage_delete_absent_ok } from "./firebase_storage_delete_absent_ok.mjs";
import { path_join } from "./path_join.mjs";
import { file_delete } from "./file_delete.mjs";
import { list_map } from "./list_map.mjs";
import { list_wait } from "./list_wait.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
export async function app_en_learn_bible_gloss_urdu_words_sound_slow_orphaned_delete() {
  "Takes away every slower reading that no ordinary recording is left underneath, from storage and from this machine both.";
  "★ IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, WHICH IS THE ONLY SHAPE A REMOVAL LIKE THIS MAY HAVE. A list of names typed out somewhere is a list about the day it was typed, and a removal run from a stale list takes away readings that have since become wanted. Asking the question again at the moment of removing means the answer cannot have drifted in between.";
  "★ STORAGE GOES FIRST AND THIS MACHINE SECOND, WHICH IS THE ORDER THAT SURVIVES A FAILURE HALF WAY. The only thing that knows a file in storage is unwanted is the copy of it here, so removing this one first and then failing would leave the far copy with nothing left anywhere that could name it. Done the other way round, a run that stops leaves both copies standing and running it again picks up exactly where it stopped.";
  "★ IT BELONGS BEFORE PUBLISHING AND NOT AFTER. The step that sends the slower readings up finds its own set by reading this folder, so anything left here goes up - a junk reading removed only from storage comes straight back the next time somebody publishes.";
  "A file already gone from storage counts as removed, because a request that timed out may well have been carried out at the far end, and a second run must not turn its own earlier success into an error.";
  "The question is asked again afterwards and the answer travels out, because a removal that quietly did nothing and a removal that worked are otherwise the same silence.";
  arguments_assert(arguments, 0);
  let found = await app_en_learn_bible_gloss_urdu_words_sound_slow_orphaned();
  let orphaned = property_get(found, "orphaned");
  let slow_fn = app_en_learn_bible_gloss_urdu_words_sound_slow;
  let folder = local_function_folder(slow_fn);
  async function sound_each(relative) {
    let destination =
      app_en_learn_bible_gloss_urdu_words_sound_slow_upload_path(relative);
    await firebase_storage_delete_absent_ok(destination);
    let file_path = path_join([folder, relative]);
    await file_delete(file_path);
  }
  async function chunk_each(chunk) {
    let promises = list_map(chunk, sound_each);
    await list_wait(promises);
  }
  let at_once = 32;
  let chunks = list_chunk(orphaned, at_once);
  await each_async(chunks, chunk_each);
  let after = await app_en_learn_bible_gloss_urdu_words_sound_slow_orphaned();
  let left = property_get(after, "orphaned");
  let r = {
    deleted: list_size(orphaned),
    left: list_size(left),
  };
  return r;
}
