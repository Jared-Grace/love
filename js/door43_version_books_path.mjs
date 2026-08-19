import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_download_path } from "./door43_version_download_path.mjs";
import { path_join } from "./path_join.mjs";
export function door43_version_books_path(door43_folder) {
  arguments_assert(arguments, 1);
  ("$plain door43_folder");
  ("Where the usfm files of one Door43 bible actually sit once it is unpacked.");
  ("A zip taken from a code shelf holds one folder named after the thing inside it, and unpacking puts that folder inside the one it was unpacked into. So the books are one step further down than where the fetching says it put them, and this is that step, written once rather than remembered at each place that reads a book.");
  let file_path = door43_version_download_path(door43_folder);
  let joined = path_join([file_path, door43_folder]);
  return joined;
}
