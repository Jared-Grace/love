import { fn_name } from "./fn_name.mjs";
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
import { folder_delete } from "./folder_delete.mjs";
import { gloss_word_sound_speed } from "./gloss_word_sound_speed.mjs";
import { gloss_word_sound_compression_level } from "./gloss_word_sound_compression_level.mjs";
import { text_to_speech } from "./text_to_speech.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { gloss_word_sound_spoken_move } from "./gloss_word_sound_spoken_move.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function gloss_words_sound_write_generic(words, sound_fn) {
  "$plain words";
  "Speaks every word that has no recording yet into the folder that function names, one sound file per word, filed under the word rather than under its turn in the queue.";
  "★ ONLY THE WORDS WITH NO RECORDING ARE SPOKEN, WHICH IS WHAT MAKES THIS SAFE TO RUN AGAIN. A chapter authored next month adds a few dozen words to a list of thousands, and the engine takes about four seconds of this machine for every word it says - measured over a run of 1,634 words that took an hour and three quarters. Re-speaking the whole list to add forty words would be most of an afternoon for a few minutes of work, and a run that stopped halfway would have to start over rather than carry on.";
  "★ THE WHOLE BATCH GOES OVER IN ONE CALL BECAUSE THE ENGINE IS LOADED ONCE PER CALL. It is handed the words joined by line breaks, which is the seam it cuts on, so one line is one word is one sound file. Calling it once for each word would pay the model load - measured at eight and a half seconds - a thousand times over, and that alone would take longer than the speaking.";
  ("★ EVERY WAY A LONE WORD DIFFERS FROM A CHAPTER IS ASKED FOR HERE, RATHER THAN LEFT TO THE ENGINE'S OWN SETTINGS, because the engine is asked for both jobs and only the caller knows which one it is. There are three, and each keeps its reasoning next to its value: the speed in ",
    fn_name("gloss_word_sound_speed"),
    ", how hard the file is squeezed in ",
    fn_name("gloss_word_sound_compression_level"),
    ", and the said-alone form below.");
  ("★ A WORD ON A BUTTON IS ASKED FOR IN ITS SAID-ALONE FORM, WHICH IS NOT THE FORM THE PHONEMISER ANSWERS WITH BY DEFAULT. Left alone it answers with the form the word takes inside a sentence, where the words English leans on are unstressed and their vowel collapses - so \"the\" comes back as a bare schwa and is heard, correctly, as a mumble. Measured over the app's list, 32 words of 1,674 came back that way. The rule that mends them, the two words whose citation form a rule cannot derive, and why it is done in phonemes rather than here, are all in the speech engine's own said-alone step; a chapter is a sentence and asks for none of it.");
  ("★ A RECORDING IS FILED UNDER WHAT THE ENGINE SAYS IT SPOKE, NOT UNDER WHAT IT WAS ASKED TO SPEAK, which is the judgement next door in ",
    fn_name("gloss_word_sound_spoken_move"),
    " rather than here.");
  ("★ THE WORKING FOLDER IS EMPTIED BEFORE ANYTHING IS SPOKEN, BECAUSE THE ENGINE NUMBERS ITS PIECES FROM THE BEGINNING EVERY TIME. A run that died part way through - the machine ran out of room, somebody stopped it - leaves its pieces there under numbers that the next run will write over one by one, and a sound left from the old run under a number the new run never reached would be filed against whatever word the new run's note of that number happens to name. Everything worth keeping has already been moved out of here, so there is nothing in it to lose.");
  ("The engine's own report travels out with the counts, because a run it refused to start and a run that found nothing to do print the same number otherwise.");
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
      engine: null,
    };
    return nothing;
  }
  let pending = path_join([folder, "pending"]);
  await folder_delete(pending);
  let text = missing.join("\n");
  let speed = gloss_word_sound_speed();
  let level = gloss_word_sound_compression_level();
  let engine = await text_to_speech({
    text: text,
    path_output: pending,
    speed: speed,
    compression_level: level,
    citation: true,
  });
  let written = await folder_read_files_exists_ensure(pending);
  function said_is(name) {
    let is = text_ends_with(name, ".txt");
    return is;
  }
  let notes = list_filter(written, said_is);
  let filed = [];
  async function note_each(name) {
    let r2 = await gloss_word_sound_spoken_move(name, pending, folder, filed);
    return r2;
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
