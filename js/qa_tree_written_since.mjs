import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_recursive_skipped_paths_async } from "./folder_read_recursive_skipped_paths_async.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export async function qa_tree_written_since(folder, skipped, since) {
  arguments_assert(arguments, 3);
  ("Which files under a folder were written at or after a given moment.");
  ("Asked of the living folder either side of a copy, this is the list of files");
  ("that were moving while the copy was being taken - and a file moving while it is");
  ("read is the one thing a copy cannot be trusted about, because what lands is");
  ("neither the version before nor the version after but a piece of each.");
  ("A file that has gone missing since the walk is left out rather than reported.");
  ("It cannot have been caught half-written into the copy by a deletion, and there");
  ("is nothing left to read to find out.");
  let paths = await folder_read_recursive_skipped_paths_async(folder, skipped);
  let moving = [];
  for (let p of paths) {
    let modified = await path_modified_ms(p);
    let gone = equal(modified, null);
    if (gone) {
      continue;
    }
    let after = greater_than_equal(modified, since);
    if (after) {
      list_add(moving, p);
    }
  }
  return moving;
}
