import { arguments_assert } from "./arguments_assert.mjs";
import { audio_file_duration_or_null } from "./audio_file_duration_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function audio_paths_durations_readable(paths_audio) {
  arguments_assert(arguments, 1);
  ("$plain paths_audio");
  ("How many seconds long each of a list of sound files is, for the ones that can be read right now, together with the paths that could not be read at all.");
  ("★ THIS EXISTS BECAUSE A SHARED FOLDER IS BEING WRITTEN TO WHILE IT IS BEING WALKED, AND THE STRICT WALK IS RIGHT TO REFUSE THAT. Asked for a list of lengths, a walk that swallows a failure hands back a shorter list than it was asked about with no sign of which row went missing, so the strict one throws - and over a folder several people render into, that means one half-written mp4 ends the whole run and takes every other answer with it. Measured on 2026-10-19 a join over five hundred and sixty-five songs died on a sixty-four megabyte video a peer was mid-render on. So the unreadable paths are handed back by name instead of being dropped, which is the thing swallowing them would have hidden.");
  ("★ AN UNREADABLE FILE IS AN ORDINARY STATE HERE RATHER THAN A FAULT, AND THAT IS WHY IT IS NOT AN ERROR. An mp4 keeps the table saying where everything is at the end of the file, so a render in progress is a perfectly healthy file with no length yet; ask again in a minute and it answers. A caller is told which paths those were so it can say so, or ask again, rather than quietly reporting a folder as smaller than it is.");
  let rows = [];
  let unreadable = [];
  for (let path_audio of paths_audio) {
    let seconds = await audio_file_duration_or_null(path_audio);
    let unreadable_is = null_is(seconds);
    if (unreadable_is) {
      list_add(unreadable, path_audio);
      continue;
    }
    list_add(rows, {
      path_audio,
      seconds,
    });
  }
  let answer = {
    rows: rows,
    unreadable: unreadable,
  };
  return answer;
}
