import { arguments_assert } from "./arguments_assert.mjs";
import { git_head_tracked } from "./git_head_tracked.mjs";
import { git_history_blobs } from "./git_history_blobs.mjs";
import { list_add } from "./list_add.mjs";
export async function git_history_blobs_marked(folder) {
  "$plain folder";
  "Every blob this repository's history holds, each carrying whether the present still tracks it - said twice over, once of the blob itself and once of the path it was reached at.";
  "Both answers are wanted because they say different things and each is right for a different question. A blob still tracked somewhere survives whatever becomes of the dead path it also sits at, so it is safe wherever it is named; a path still tracked is a live name whose contents have been replaced over and over, so the name is wanted while almost everything ever stored under it is not.";
  "Reading the present and reading the whole history are the two calls every such question opens with, and both walk the object store. They are made once here so that the readings a rewrite is argued from begin with getting the blobs rather than with getting hold of what to ask.";
  arguments_assert(arguments, 1);
  let tracked = await git_head_tracked(folder);
  let blobs = await git_history_blobs(folder);
  let marked = [];
  for (let blob of blobs) {
    let row = {
      name: blob.name,
      path: blob.path,
      bytes: blob.bytes,
      alive_blob: tracked.blob_names[blob.name],
      alive_path: tracked.paths[blob.path],
    };
    list_add(marked, row);
  }
  return marked;
}
