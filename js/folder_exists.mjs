import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
export async function folder_exists(path_folder) {
  "$plain path_folder";
  "Whether there is a folder at a given place.";
  "ASKED BECAUSE NOTHING THERE IS OFTEN A REAL ANSWER RATHER THAN A FAULT. Reading a folder that is not there throws, and that is right where the folder is expected - but a great deal of what this repo asks about is a gift some translations were given and others were not, and there the missing folder is the answer. Without a way to ask, the only way to find out was to read it and catch the throw, which is the same thing written again at every place that needs it.";
  "A FILE SITTING AT THAT PLACE IS NOT A FOLDER. Answering yes for one would send a reader on to list it, which throws in a different way and further from here, so the kind is checked rather than only the presence.";
  let fs = await import("fs");
  async function lambda() {
    let stat_read = await fs.promises.stat(path_folder);
    return stat_read;
  }
  let stat = await catch_null_async(lambda);
  let nothing = null_is(stat);
  if (nothing) {
    return false;
  }
  let folder = stat.isDirectory();
  return folder;
}
