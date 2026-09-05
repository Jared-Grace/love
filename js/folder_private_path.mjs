import { arguments_assert } from "./arguments_assert.mjs";
import { folder_private_root } from "./folder_private_root.mjs";
import { path_join } from "./path_join.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { assert_json } from "./assert_json.mjs";
export function folder_private_path(path) {
  "$plain path";
  "Where something kept away from the repos and out of every backup sits, said as its own address inside that folder. The one door in: every kind of private thing is joined on here, so the check below is asked once for all of them.";
  "The joined address is held against the folder it was built from, because the addresses that arrive here are not written by hand - they come off the wire, out of a bucket, named by whoever uploaded them. A step up written into one would climb out of the folder before a single byte was written, and what was written would land outside the one place these rules are about. Two dots in a name cost nothing to allow and everything to have allowed.";
  "The check has to sit here rather than in each kind of private thing, because the kinds are what will multiply. A guard copied into each of them is a guard the next one forgets, and the way it fails is silence - a file written somewhere else entirely, by a run that reports success.";
  arguments_assert(arguments, 1);
  let root = folder_private_root();
  let joined = path_join([root, path]);
  let opening = text_combine(root, "/");
  let inside = text_starts_with(joined, opening);
  assert_json(inside, {
    hint: "the address this file would be written to climbs out of the folder that keeps other people's words away from the repos and out of the backups - a stored name holding a step up is the way that happens, and the file is refused rather than written",
    path,
    joined,
    root,
  });
  return joined;
}
