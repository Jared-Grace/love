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
  ("★ THIS IS HOW YOU TELL AN EDIT THAT EXISTS FROM AN EDIT SOMEBODY CAN HAVE. A session proves an edit was made; what it wrote out proves the edit was finished. Neither proves it reached the folder the giveaway is built from - that needs this list and that folder compared - but without this there is nothing to compare, and a session with nothing written out is already answered: whatever it replaced is still the only recording of that singing anybody can be given.");
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
