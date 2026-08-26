import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_recursive_paths_async } from "./folder_read_recursive_paths_async.mjs";
import { file_size } from "./file_size.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function folder_files_empty_walked(folder) {
  "$plain folder";
  "Every file under a folder, however deep, that has no bytes in it - and alongside them how many files were looked at.";
  "A file with nothing in it is the one kind of broken that looks exactly like a file. It is there, it is named, it has the right ending, and everything that lists the folder lists it. Only its size says anything is wrong, and nothing asks.";
  "How much was walked travels out beside the answer because naming nobody is what this says on a good day and also what it says on a day the folder could not be read. The count is the only part of the answer that can tell those apart.";
  arguments_assert(arguments, 1);
  let paths = await folder_read_recursive_paths_async(folder);
  let offenders = [];
  for (let path of paths) {
    let size = await file_size(path);
    let nothing = equal(size, 0);
    if (nothing) {
      list_add(offenders, path);
    }
  }
  let r = {
    walked: paths.length,
    offenders,
  };
  return r;
}
