import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
export function folder_private_storage_path(path) {
  "$plain path";
  "Where a file brought down out of the bucket sits on this machine, said as the address it has in the bucket - so what is on disk reads back as the same tree storage holds, one folder per part of the name.";
  "Mirroring rather than flattening the names is what lets the copy be read without this repo at all. A folder somebody opens says who wrote what and when by its own shape, and a file put back where it came from goes back under the name it is already under.";
  "The whole mirror sits one step inside the private folder rather than at the top of it, because the bucket is one kind of private thing and not the only kind there will be. A tree that started at the top would own the folder: the first other kind of thing to arrive would have to land beside a bucket's own opening and be told apart from it by knowing which words the bucket uses. One named step makes the answer to that structural instead - anything else private gets a step of its own, and neither has to know the other exists.";
  arguments_assert(arguments, 1);
  let joined = path_join(["storage", path]);
  let p = folder_private_path(joined);
  return p;
}
