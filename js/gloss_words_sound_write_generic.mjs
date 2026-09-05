import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { gloss_word_sound_key } from "./gloss_word_sound_key.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { path_join } from "./path_join.mjs";
import { text_to_speech } from "./text_to_speech.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { file_read } from "./file_read.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_move } from "./file_move.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { folder_delete } from "./folder_delete.mjs";
export async function gloss_words_sound_write_generic(words, sound_fn) {
  "$plain words";
  "Speaks every word that has no recording yet into the folder that function names, one sound file per word, filed under the word rather than under its turn in the queue.";
  "★ ONLY THE WORDS WITH NO RECORDING ARE SPOKEN, WHICH IS WHAT MAKES THIS SAFE TO RUN AGAIN. A chapter authored next month adds a few dozen words to a list of thousands, and the engine takes about two and a half seconds of this machine for every second of sound it makes. Re-speaking the whole list to add forty words would be most of an afternoon for a few minutes of work, and a run that stopped halfway would have to start over rather than carry on.";
  "★ THE WHOLE BATCH GOES OVER IN ONE CALL BECAUSE THE ENGINE IS LOADED ONCE PER CALL. It is handed the words joined by line breaks, which is the seam it cuts on, so one line is one word is one sound file. Calling it once for each word would pay the model load - measured at eight and a half seconds - a thousand times over, and that alone would take longer than the speaking.";
  "★ A RECORDING IS FILED UNDER WHAT THE ENGINE SAYS IT SPOKE, NOT UNDER WHAT IT WAS ASKED TO SPEAK. The engine writes the words of each piece beside the sound of it, so the pairing is read back off the disk instead of being worked out from the order the words went in. Worked out from the order, one piece more or fewer than expected does not fail - it shifts every word after it onto the wrong sound, silently, in an app whose one job is telling a person how a word sounds.";
  "The engine's own report travels out with the counts, because a run it refused to start and a run that found nothing to do print the same number otherwise.";
  arguments_assert(arguments, 2);
  let folder = local_function_folder(sound_fn);
  let present = await folder_read_files_exists_ensure(folder);
  function wanted_is(word) {
    let key = gloss_word_sound_key(word);
    let name = text_combine_multiple([key, ".mp3"]);
    let absent = list_includes_not(present, name);
    return absent;
  }
  let missing = list_filter(words, wanted_is);
  let none = list_empty_is(missing);
  if (none) {
    let nothing = {
      words: list_size(words),
      missing: 0,
      spoken: 0,
    };
    return nothing;
  }
  let pending = path_join([folder, "pending"]);
  let text = missing.join("\n");
  let engine = await text_to_speech({
    text: text,
    path_output: pending,
  });
  let written = await folder_read_files_exists_ensure(pending);
  function said_is(name) {
    let is = text_ends_with(name, ".txt");
    return is;
  }
  let notes = list_filter(written, said_is);
  let filed = [];
  async function note_each(name) {
    let note_path = path_join([pending, name]);
    let said = await file_read(note_path);
    let word = text_trim(said);
    let key = gloss_word_sound_key(word);
    let number = text_replace_once(name, ".txt", "");
    let sound_name = text_combine_multiple([number, ".mp3"]);
    let sound_from = path_join([pending, sound_name]);
    let there = await file_exists(sound_from);
    let gone = not(there);
    if (gone) {
      return;
    }
    let key_name = text_combine_multiple([key, ".mp3"]);
    let sound_to = path_join([folder, key_name]);
    let already = await file_exists(sound_to);
    if (already) {
      return;
    }
    await file_move(sound_from, sound_to);
    list_add(filed, key);
  }
  await list_map_async(notes, note_each);
  await folder_delete(pending);
  let r = {
    words: list_size(words),
    missing: list_size(missing),
    spoken: list_size(filed),
    engine,
  };
  return r;
}
