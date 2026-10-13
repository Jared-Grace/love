import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_recursive_paths_async } from "./folder_read_recursive_paths_async.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_add } from "./list_add.mjs";
export async function ardour_sessions_imports(folder_ardour) {
  arguments_assert(arguments, 1);
  ("$plain folder_ardour");
  ("Every piece of sound an editing session imported, one row each, saying which session holds it and where the stored copy is.");
  ("★ THIS IS THE ONLY RECORD OF WHAT A SESSION WAS MADE FROM THAT CANNOT HAVE DRIFTED. The session's own notes name the file it imported, and that name points back into a folder where names get reused: a source marked aside frees its name, a later download takes it, and the notes then name a recording the session never heard. The stored copy under the session cannot drift, because it is the sound itself and it was written once, when the import happened.");
  ("★ ONLY THE LEFT SIDE IS ANSWERED, AND THAT IS NOT AN OVERSIGHT. The session splits a two-sided recording into one file per side, so each import is two files here, and the sides are not the same signal. Whatever compares these against a download must take one side from the matching side; answering both would invite a caller to compare a side against the wrong side, which measures as a different recording.");
  ("The session is read off the path rather than from anything inside the file, because the folder the session lives in is the name the person typed and the only thing that names the session at all.");
  ("The whole tree is walked rather than a fixed depth, because a session folder holds working copies and backups at depths nobody promised, and the two words in the path are what tell an import from all of that.");
  let paths = await folder_read_recursive_paths_async(folder_ardour);
  let imports = [];
  for (let path_audio of paths) {
    let stored_is = text_includes(path_audio, "/interchange/");
    if (not(stored_is)) {
      continue;
    }
    let sound_is = text_includes(path_audio, "/audiofiles/");
    if (not(sound_is)) {
      continue;
    }
    let left_is = text_ends_with(path_audio, "L.wav");
    if (not(left_is)) {
      continue;
    }
    let after = path_audio.split(folder_ardour)[1];
    let parts = after.split("/");
    let session = parts[1];
    list_add(imports, {
      session,
      path_audio,
    });
  }
  return imports;
}
