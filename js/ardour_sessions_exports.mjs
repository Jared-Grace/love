import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_recursive_paths_async } from "./folder_read_recursive_paths_async.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_add } from "./list_add.mjs";
export async function ardour_sessions_exports(folder_ardour) {
  arguments_assert(arguments, 1);
  ("$plain folder_ardour");
  ("Every finished recording an editing session has written out, one row each, saying which session wrote it and where it is.");
  ("★ WHAT THIS PROVES IS THAT AN EDIT WAS FINISHED, AND NOTHING ABOUT WHERE IT WENT. A session proves an edit was made; a file written out of it proves the edit was finished. Whether it then reached the folder a giveaway is built from is a separate question, and the obvious way to ask it does not work: measured over the real folders, a written-out edit and the copy of it that travelled are the same length to the byte and still differ, and differ in the sound alone once the wrapping is thrown away. They are two renderings minutes apart, not a file and its copy. So do not reach for this list to prove a hand-over by identity - nothing matches, on every session, which is the sort of answer that looks like a finding and is a dead test.");
  ("★ THE ONE THING IT DOES SETTLE IS THE EMPTY CASE. A session with nothing written out at all has produced no finished edit anywhere, so whatever recording it was made from is still the only recording of that singing anybody can be given, and nothing may be taken away on the strength of that session existing.");
  ("★ A SESSION CAN HAVE WRITTEN OUT MORE THAN ONE, AND ALL OF THEM COME BACK. Writing out again after a further change is ordinary, and the older one is not rubbish: it may be the copy that was handed over, while the newer one never left this folder. Keeping only the newest would hide exactly that case.");
  let paths = await folder_read_recursive_paths_async(folder_ardour);
  let exports = [];
  for (let path_audio of paths) {
    let written_is = text_includes(path_audio, "/export/");
    if (not(written_is)) {
      continue;
    }
    let sound_is = text_ends_with(path_audio, ".wav");
    if (not(sound_is)) {
      continue;
    }
    let after = path_audio.split(folder_ardour)[1];
    let parts = after.split("/");
    let session = parts[1];
    list_add(exports, {
      session,
      path_audio,
    });
  }
  return exports;
}
