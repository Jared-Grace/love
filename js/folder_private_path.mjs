import { arguments_assert } from "./arguments_assert.mjs";
import { folder_private_root } from "./folder_private_root.mjs";
import { path_join } from "./path_join.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { assert_json } from "./assert_json.mjs";
export function folder_private_path(path) {
  "$plain path";
  "Where a file kept away from the repos sits, said as the address it has inside storage - so what is on disk reads back as the same tree the bucket holds, one folder per part of the name.";
  "Mirroring the bucket rather than flattening the names is what lets the copy be read without this repo at all. A folder somebody opens says who wrote what and when by its own shape, and a file put back where it came from is put back by the name it is already under.";
  "The joined address is held against the folder it was built from, because the name of a stored file comes off the wire and a step up written into one would climb out of the folder before anything was written. Two dots in an object's name cost nothing to allow and everything to have allowed: what is refused here is a file arriving with somebody else's address on it and being written wherever that address led.";
  arguments_assert(arguments, 1);
  let root = folder_private_root();
  let joined = path_join([root, path]);
  let opening = text_combine(root, "/");
  let inside = text_starts_with(joined, opening);
  assert_json(inside, {
    hint: "the address this file would be written to climbs out of the folder that keeps other people's words away from the repos - a stored name holding a step up is the way that happens, and the file is refused rather than written",
    path,
    joined,
    root,
  });
  return joined;
}
