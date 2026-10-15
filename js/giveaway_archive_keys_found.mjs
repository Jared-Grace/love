import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function giveaway_archive_keys_found() {
  arguments_assert(arguments, 0);
  ("Whether this machine holds the two archive.org upload keys, and which file they are in - never what they say.");
  ("★ THIS ANSWERS THE READINESS QUESTION WITHOUT PUTTING A SECRET ANYWHERE IT COULD BE READ LATER. Every answer a function gives from the seam Claude runs is printed, and a long one is also written out to a file under gitignore that nobody deletes. A key handed back as an answer would therefore be copied into at least two places nobody is watching, and into the conversation that asked for it. So the only thing said here is yes or no and where to look, which is the whole of what anybody needs before an upload - the keys themselves are read, used and dropped inside the one function that sends.");
  ("★ BOTH PLACES ARE LOOKED IN, BECAUSE THE TOOL THAT WRITES THE FILE HAS USED TWO AND THE HUMAN MAY ALSO HAVE TYPED IT BY HAND. Older versions of the internetarchive tool write the settings straight into the config folder; newer ones put them in a folder of their own named after the tool. A reader that knew only one of those would say the keys are missing while they sit on the disk, and the repair somebody would reach for is to write them a second time - which is a secret in two files and only one of them remembered.");
  ("The folder is written out rather than worked out from the machine, the same way the user's own root folder is. A path derived at run time would follow a frozen copy of this tree when a gate runs it, and point at a config folder that does not exist rather than at the one that does.");
  let folder = "/home/j/.config";
  let r = path_join([folder, "ia.ini"]);
  let r2 = path_join([folder, "internetarchive", "ia.ini"]);
  let places = [r, r2];
  let path_found = null;
  for (let place of places) {
    let there = await file_exists(place);
    if (there) {
      path_found = place;
      break;
    }
  }
  let found = null_not_is(path_found);
  let answer = {
    found: found,
    path: path_found,
    places: places,
  };
  return answer;
}
