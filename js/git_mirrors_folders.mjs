import { catch_null_async } from "./catch_null_async.mjs";
import { folder_read } from "./folder_read.mjs";
import { git_mirrors_folder } from "./git_mirrors_folder.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { path_join } from "./path_join.mjs";
export async function git_mirrors_folders() {
  "Answers the full path of every bare copy sitting on the drive, and an empty list when the drive is not mounted.";
  "The set is read off the drive rather than typed here. A typed list is right on the day it is written and wrong from the next copy onwards, and the copy it forgets is the one nobody notices has stopped being updated.";
  "A missing drive answers an empty list rather than throwing. Not being able to reach a backup is an ordinary state for a drive that unplugs, and it must not be able to stop the work that was happening beside it.";
  let folder = git_mirrors_folder();
  async function lambda() {
    let read = await folder_read(folder);
    return read;
  }
  let names = await catch_null_async(lambda);
  let absent = not(names);
  if (absent) {
    let r = [];
    return r;
  }
  let bare = list_filter_ends_with(names, ".git");
  function lambda2(name) {
    let joined = path_join([folder, name]);
    return joined;
  }
  let paths = list_map(bare, lambda2);
  return paths;
}
