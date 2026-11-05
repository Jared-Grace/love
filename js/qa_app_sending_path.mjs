import { arguments_assert } from "./arguments_assert.mjs";
import { folder_memory } from "./folder_memory.mjs";
import { path_join } from "./path_join.mjs";
export function qa_app_sending_path(app_name) {
  "Where the note saying this app is being sent lives";
  "In memory rather than in the repo, because a build runs inside a frozen copy as well as in the working folder, and a path relative to the running folder would be a different note in each. Both of them write into the same waiting folder, so both have to read the same note";
  arguments_assert(arguments, 1);
  let folder = folder_memory();
  let file_name = "qa_app_sending_" + app_name + ".json";
  let file_path = path_join([folder, file_name]);
  return file_path;
}
