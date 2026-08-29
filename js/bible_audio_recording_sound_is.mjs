import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function bible_audio_recording_sound_is(recording) {
  "$plain recording";
  "Whether a folder of recordings has any sound in it at all.";
  "★ THE TEST IS FOR SOUND AND NOT FOR AN EMPTY FOLDER, BECAUSE THE FOLDERS THAT FAIL IT ARE NOT EMPTY. Each holds a note written about it by a sweep, and the words of the chapter beside each piece, so a folder that looks at its own file count sees files and keeps it. What makes a recording a recording is the sound, and these have none.";
  arguments_assert(arguments, 1);
  let bible_folder = property_get(recording, bible_folder_key());
  let chapter_code = property_get(recording, "chapter_code");
  let folder = bible_audio_folder(bible_folder, chapter_code);
  let files = await folder_read_files(folder);
  function sound_is(name) {
    let is = text_ends_with(name, ".mp3");
    return is;
  }
  let sounds = list_filter(files, sound_is);
  let heard = list_empty_not_is(sounds);
  return heard;
}
