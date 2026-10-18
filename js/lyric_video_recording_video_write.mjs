import { arguments_assert } from "./arguments_assert.mjs";
import { path_basename } from "./path_basename.mjs";
import { lyric_video_recording_video_note_path } from "./lyric_video_recording_video_note_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_recording_video_write(
  path_audio,
  path_video,
) {
  arguments_assert(arguments, 2);
  ("$plain path_audio");
  ("$plain path_video");
  ("Writes down that this video was rendered from this recording, so that nothing has to work the join out from a name afterwards.");
  ("★ ONLY THE TWO FILE NAMES ARE KEPT AND NOT THE PATHS THEY ARRIVED AS. The paths say where these files sat on one machine on one day, and the download folder has already moved; the names are what the giveaway hands out and what a person reads. A reader is walking a folder it was given and joins on the name inside it, so a path here would be a second answer to a question the reader has already answered and could disagree with it.");
  ("★ IT OVERWRITES RATHER THAN KEEPING A LIST, BECAUSE THE VIDEO FILE IT NAMES WAS OVERWRITTEN TOO. A video is re-rendered under the same name after its timing is corrected or its pictures are drawn, and sometimes from a different recording - a cut that became the plain take. There is one video file at that name afterwards and it came from one recording, so the newest note is the true one and an older note would name a render that no longer exists.");
  ("Writing the same pair twice changes nothing, so a render that is run again when nobody remembers whether it finished is safe.");
  let name_audio = await path_basename(path_audio);
  let name_video = await path_basename(path_video);
  let path_note = lyric_video_recording_video_note_path(name_audio);
  let note = {
    recording: name_audio,
    video: name_video,
  };
  await file_overwrite_json(path_note, note);
  let r = {
    path_note: path_note,
    recording: name_audio,
    video: name_video,
  };
  return r;
}
