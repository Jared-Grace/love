import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_recordings } from "./bible_audio_recordings.mjs";
import { property_get } from "./property_get.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { list_map_async_filter_null_not_is } from "./list_map_async_filter_null_not_is.mjs";
export async function bible_audio_recordings_empty() {
  "Every folder of recordings on this disk that holds no sound at all.";
  "★ A FOLDER WITH NOTHING IN IT PASSES EVERY TEST A RECORDING HAS TO PASS, WHICH IS WHY IT HAS TO BE ASKED FOR BY NAME. No pieces against no verses is no differences, so an empty folder counts as one that lines up and one whose words still match. Sixteen of them were sitting inside a count of correct recordings, and that count was being read as evidence that recordings were correct.";
  "★ THE TEST IS FOR SOUND AND NOT FOR AN EMPTY FOLDER, BECAUSE THESE ARE NOT EMPTY. Each holds a note written about it by a sweep, so a folder that looks at its own file count sees a file and keeps it. What makes a recording a recording is the sound, and none of these has any.";
  "★ IT FINDS ITS OWN SET RATHER THAN TAKING A LIST. A list of stray folders written down today goes on naming folders somebody has since deleted and stays silent about ones an aborted run makes tomorrow, and both mistakes read as a clean answer.";
  arguments_assert(arguments, 0);
  let recordings = await bible_audio_recordings();
  async function recording_each(recording) {
    let bible_folder = property_get(recording, "bible_folder");
    let chapter_code = property_get(recording, "chapter_code");
    let folder = bible_audio_folder(bible_folder, chapter_code);
    let files = await folder_read_files(folder);
    function sound_is(name) {
      let is = text_ends_with(name, ".mp3");
      return is;
    }
    let sounds = list_filter(files, sound_is);
    let silent = list_empty_is(sounds);
    if (not(silent)) {
      return null;
    }
    return recording;
  }
  let empty = await list_map_async_filter_null_not_is(
    recordings,
    recording_each,
  );
  return empty;
}
