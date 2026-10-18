import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_recording_video_notes_folder } from "./lyric_video_recording_video_notes_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_add } from "./list_add.mjs";
export async function lyric_video_recording_video_notes() {
  arguments_assert(arguments, 0);
  ("Every note saying which video was rendered from which recording, read whole, each one carrying the name of the file it was read from beside what it says.");
  ("★ THE FILE'S OWN NAME IS CARRIED BESIDE WHAT IS INSIDE IT, WHICH IS THE WHOLE REASON THIS EXISTS RATHER THAN A LOOKUP BY NAME. The store answers one question well - given this recording, which video - and it answers it by growing a file name from the recording, so a reader asking that question can never see a note whose file name and whose contents disagree. That disagreement is exactly the fault worth catching, and it is only visible from here, where the folder is read rather than addressed.");
  ("★ IT TAKES NO FOLDER OF RECORDINGS AND CANNOT SAY WHETHER ANY FILE NAMED HERE IS STILL ON THE DISK. The notes keep names and never paths, on purpose, because the folder the songs live in has already moved once; so whether a name still answers to a file is a question only the holder of that folder can ask. What comes back is what was written down, not what is true today.");
  ("Anything in the folder that is not a note is stepped over rather than read, so a stray file costs nothing.");
  let folder = lyric_video_recording_video_notes_folder();
  let names = await folder_read_files(folder);
  let notes = [];
  for (let name of names) {
    let note_is = text_ends_with(name, ".json");
    if (not(note_is)) {
      continue;
    }
    let path_note = path_join([folder, name]);
    let note = await file_read_json(path_note);
    list_add(notes, {
      name_note: name,
      recording: note.recording,
      video: note.video,
    });
  }
  return notes;
}
