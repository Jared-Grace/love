import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { git_history_blob_bytes } from "./git_history_blob_bytes.mjs";
import { git_object_name_path } from "./git_object_name_path.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export async function git_history_blobs(folder) {
  "$plain folder";
  "Every file this repository's history holds anywhere in it, named once each, with the path it was first reached by and the packed bytes it takes up.";
  "The one walk everything asked about the weight of a history stands on. Git lists each object once, at the first path that reached it, so a file kept unchanged through a thousand commits is one entry here rather than a thousand - which is what makes these numbers add up to the size on disk instead of to something far larger.";
  "Only the files. The listing carries the commits and the folder records too, and those have no path against them, which is how they are told apart. They are small beside the files and belong to no folder, so counting them would put weight where nobody could act on it.";
  "The packed bytes rather than the length of the file. It is what the history actually costs, and the two are far apart for anything that compresses.";
  arguments_assert(arguments, 1);
  let bytes = await git_history_blob_bytes(folder);
  let printed = await git_folder_run(folder, ["rev-list", "--objects", "--all"]);
  let blobs = [];
  for (let line of text_split_newline(printed)) {
    let entry = git_object_name_path(line);
    let pathless = text_empty_is(entry.path);
    if (pathless) {
      continue;
    }
    let blob_bytes = bytes[entry.name];
    let other_kind = not(blob_bytes);
    if (other_kind) {
      continue;
    }
    let blob = {
      name: entry.name,
      path: entry.path,
      bytes: blob_bytes,
    };
    list_add(blobs, blob);
  }
  return blobs;
}
