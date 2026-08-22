import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_write } from "./g_arc_write.mjs";
import { folder_user_storage_function_path } from "./folder_user_storage_function_path.mjs";
import { folder_exists } from "./folder_exists.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { not } from "./not.mjs";

export async function g_arc_written_files_or_null() {
  "The file of every chapter that has written arcs in it, or nothing at all when the store has never been written to.";
  "IT ANSWERS NOTHING RATHER THAN AN EMPTY LIST, and the two are different questions. A store that was never written to and a store holding a chapter with no arcs in it both walk to zero, so a reader handed an empty list cannot tell a fresh machine from a real finding - and every caller here has to tell them apart, because one is right and the other is the thing worth looking at.";
  "THE STORE IS FOUND FROM THE WRITER'S OWN NAME rather than from a path spelled here. The folder is wherever the function that writes it puts things, so asking the writer means the two cannot drift apart; a path typed here would go on reading an old folder after a move, and read nothing, and nothing is what a fresh machine looks like.";
  "It exists because three readers over this store opened with the same five lines - find the writer, ask where it writes, check the folder is there, answer early if it is not, read the paths. Each one then wants its own shape of nothing, so the shape stays with the caller and only the looking is shared.";
  arguments_assert(arguments, 0);
  let f = g_arc_write;
  let path = folder_user_storage_function_path(f);
  let exists = await folder_exists(path);
  let none = not(exists);
  if (none) {
    return null;
  }
  let files = await folder_read_paths_async(path);
  return files;
}
