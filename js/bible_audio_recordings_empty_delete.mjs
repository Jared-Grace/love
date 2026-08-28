import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_recordings_empty } from "./bible_audio_recordings_empty.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { folder_delete } from "./folder_delete.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_audio_recordings_empty_delete() {
  "Deletes every folder of recordings that holds no sound, then asks again so the answer says whether they are gone rather than that a delete was attempted.";
  "★ IT FINDS ITS OWN SET AND CHECKS ITS OWN WORK, WHICH IS WHY IT IS ONE COMMAND RATHER THAN SEVENTEEN. Handed a list, it would go on deleting whatever the list said long after the disk had moved on, and it would report success from having run rather than from anything being true. Asking before and asking again after means the second answer is the evidence.";
  "★ NOTHING WITH SOUND IN IT CAN BE REACHED FROM HERE, BECAUSE THE SET IS DEFINED BY THE ABSENCE OF SOUND. That is the whole safety of it: there is no argument to get wrong and no folder it could be pointed at. A recording that has anything recorded in it is not in the set and never becomes reachable.";
  "★ WHAT IS THROWN AWAY IS A NOTE ABOUT NOTHING. Each of these holds one file, written by a sweep, saying that no pieces were found and no verses were expected. It was never read from a recording and re-running the sweep would write it again, so the deletion loses nothing that could not be made again in a second.";
  arguments_assert(arguments, 0);
  let before = await bible_audio_recordings_empty();
  function named(recording) {
    let bible_folder = property_get(recording, "bible_folder");
    let chapter_code = property_get(recording, "chapter_code");
    let left = add(bible_folder, "/");
    let name = add(left, chapter_code);
    return name;
  }
  let deleted = list_map(before, named);
  async function recording_each(recording) {
    let bible_folder = property_get(recording, "bible_folder");
    let chapter_code = property_get(recording, "chapter_code");
    let folder = bible_audio_folder(bible_folder, chapter_code);
    await folder_delete(folder);
  }
  await each_async(before, recording_each);
  let after = await bible_audio_recordings_empty();
  let remaining = list_map(after, named);
  let r = {
    deleted,
    remaining,
  };
  return r;
}
