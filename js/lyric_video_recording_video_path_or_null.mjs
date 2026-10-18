import { arguments_assert } from "./arguments_assert.mjs";
import { path_basename } from "./path_basename.mjs";
import { lyric_video_recording_video_name_or_null } from "./lyric_video_recording_video_name_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
export async function lyric_video_recording_video_path_or_null(path_audio) {
  arguments_assert(arguments, 1);
  ("$plain path_audio");
  ("Where the video rendered from one recording is, read off the note the render left rather than worked out from a name - or nothing, when no note was left or the file the note names is not there any more.");
  ("★ THE FILE IS LOOKED FOR BEFORE THE ANSWER IS GIVEN, BECAUSE A NOTE IS A RECORD OF THE PAST AND THE DISK IS THE PRESENT. A recording gets renamed, a video gets moved or deleted, a download folder gets cleared and filled again - and a note naming a file that is gone is worse than no note, because a caller handed a path that does not exist will either fail opening it or hand it to somebody as a thing to download. Checked here, the note simply stops answering, which is the state every caller already knows how to read.");
  ("★ THE VIDEO IS LOOKED FOR BESIDE THE RECORDING, WHICH IS THE ONE THING THE NOTE DELIBERATELY DOES NOT SAY. A note keeps the two file names and no folder, because the folder is where these files sat on one machine on one day and has already moved once. The recording handed in here says where to look, so the answer follows the recording wherever it goes and the note never has to be rewritten.");
  ("It is the door for a caller holding a recording and wanting its video, which is every caller there is. A caller that only has a name has no folder to look in and cannot do the check above, so it asks the note itself and does the looking.");
  let name_audio = await path_basename(path_audio);
  let name_video = await lyric_video_recording_video_name_or_null(name_audio);
  let noted_is = null_is(name_video);
  if (noted_is) {
    return null;
  }
  let folder_song = await path_dirname(path_audio);
  let path_video = path_join([folder_song, name_video]);
  let there_is = await file_exists(path_video);
  if (not(there_is)) {
    return null;
  }
  return path_video;
}
