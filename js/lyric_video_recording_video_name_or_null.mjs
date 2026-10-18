import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_recording_video_note_path } from "./lyric_video_recording_video_note_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function lyric_video_recording_video_name_or_null(name_audio) {
  arguments_assert(arguments, 1);
  ("$plain name_audio");
  ("What the video rendered from one named recording is called, or nothing when no render ever wrote that down.");
  ("★ NOTHING IS THE ORDINARY ANSWER AND NOT A FAULT, BECAUSE EVERY VIDEO ON THE DISK TODAY WAS RENDERED BEFORE ANYTHING WROTE THESE NOTES. So a caller has to keep whatever it did before and read this as something that may be there rather than as the join it now relies on, and the notes fill in one render at a time. A caller written the other way round would report the whole folder as unrendered the day it was added.");
  ("★ IT ANSWERS A NAME AND NOT A PATH, AND THE CALLER IS THE ONE THAT KNOWS WHICH FOLDER TO LOOK IN. A recording and the video of it sit in the same folder, so the caller already holds that folder and can both build the path and check the file is there. Answering a path here would mean keeping the folder of the day the render ran, which is the thing that goes stale.");
  ("A name that comes back for a file that is not on the disk means the recording was renamed after its video was made, or the video was moved or deleted. That is why the answer is a name to be checked rather than a promise.");
  let path_note = lyric_video_recording_video_note_path(name_audio);
  let written_is = await file_exists(path_note);
  if (not(written_is)) {
    return null;
  }
  let note = await file_read_json(path_note);
  let name_video = note.video;
  return name_video;
}
