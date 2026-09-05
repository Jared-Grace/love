import { arguments_assert } from "./arguments_assert.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function lyric_video_hand_times_path() {
  arguments_assert(arguments, 0);
  ("Where a copy is kept of the moments a person put into a timing document by ear.");
  ("★ IT EXISTS SO THAT LETTING A MACHINE TIME A SONG IS A CHANGE AND NEVER A LOSS. Everything else about these documents can be worked out again from the recording and the psalm; the one thing that cannot is somebody sitting with a song and tapping. Held apart from the document itself, that work survives being written over, and the decision about who may write over what stops being a decision about whether an evening is destroyed.");
  ("It sits with the findings rather than with the data, because nothing running reads it and because the given half is swept by passes that rewrite names and values - a backup that gets tidied up is not a backup.");
  let folder = findings_folder();
  let path = path_join([folder, "lyric_video_hand_times.json"]);
  return path;
}
