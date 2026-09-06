import { path_dirname } from "./path_dirname.mjs";
import { path_basename } from "./path_basename.mjs";
import { path_join } from "./path_join.mjs";
export async function file_delivered_path(path) {
  "where the untouched copy of a file lives - a folder named delivered beside it, holding the same name";
  "IT IS A FOLDER AND NOT A SECOND NAME IN THE SAME ONE, because the folders these sit in are counted by their filenames: a picture kept beside its original as 14.delivered.png ends with the extension the counting looks for, and Number of what is left of the name is not a number, so the tally would gain an attempt nobody drew. A folder is passed over by every reader that asks for files, so nothing that counts has to learn about this.";
  "the name is kept rather than decorated, so the copy and the picture it was taken from are the same word in two places and neither has to be worked back from the other";
  let folder = await path_dirname(path);
  let name = await path_basename(path);
  let folder_delivered = path_join([folder, "delivered"]);
  let path_delivered = path_join([folder_delivered, name]);
  return path_delivered;
}
