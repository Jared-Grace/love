import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_word_sound_spoken_move } from "./gloss_word_sound_spoken_move.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function gloss_words_sound_pending_file(pending, folder, voice) {
  "$plain pending";
  "$plain folder";
  "$plain voice";
  "Files every recording sitting in a working folder under the word the engine says it spoke, and answers with the names it filed.";
  "★ IT IS A STEP OF ITS OWN SO THAT A RUN THAT DIED HALF WAY THROUGH CAN STILL BE FILED, which is the difference between losing two hours of a machine and losing none. The engine speaks a whole batch in one call and its pieces land under numbers, so until they are filed under their words they are worth nothing and are the first thing the next run deletes. A run of 1,674 words takes over two hours; one was stopped at 1,367 with every one of them already spoken and none of them filed.";
  "★ A NOTE IS ONLY EVER WRITTEN AFTER THE RECORDING IT NAMES, WHICH IS WHAT MAKES THIS SAFE ON A RUN THAT WAS KILLED MID-WRITE. The last thing such a run leaves is at worst half a recording with no note beside it, and a recording with no note is not filed - so the set this walks is the set that finished, whatever moment the run was stopped at. Nothing has to be checked for damage, because a damaged one cannot be reached.";
  "★ THE WORKING FOLDER HOLDS ONE VOICE, WHICH IS WHY THE VOICE CAN BE ONE ARGUMENT FOR THE WHOLE BATCH. The engine is asked for a voice per call and a call fills one working folder, so every piece in front of this was spoken by the same person. A cast is recorded by running the whole thing again for the next voice, not by mixing them in here.";
  arguments_assert(arguments, 3);
  let written = await folder_read_files_exists_ensure(pending);
  function said_is(name) {
    let is = text_ends_with(name, ".txt");
    return is;
  }
  let notes = list_filter(written, said_is);
  let filed = [];
  async function note_each(name) {
    let r = await gloss_word_sound_spoken_move(
      name,
      pending,
      folder,
      filed,
      voice,
    );
    return r;
  }
  await list_map_async(notes, note_each);
  return filed;
}
