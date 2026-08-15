import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { number_from_text } from "./number_from_text.mjs";
export async function git_history_blob_bytes(folder) {
  "Every blob this repository's object store holds, as an object from the blob's name to the bytes it takes up packed.";
  "Packed bytes rather than the size the file reads as, because the question this is asked in order to answer is what a repository would stop carrying if an object went away. A file that barely changes across a thousand commits is stored about once, so its read size counted a thousand times would promise a saving that is not there.";
  "Blobs only, and the other two kinds are dropped rather than attributed anywhere. A tree and a commit are the shape of the history itself rather than anything a path names, so charging them to a path would say that removing the path gives back more than it can.";
  arguments_assert(arguments, 1);
  let printed = await git_folder_run(folder, [
    "cat-file",
    "--batch-all-objects",
    "--batch-check=%(objectname) %(objecttype) %(objectsize:disk)",
  ]);
  let bytes = {};
  for (let line of text_split_newline(printed)) {
    let words = text_split_space(line);
    let blob_is = equal(words[1], "blob");
    if (not(blob_is)) {
      continue;
    }
    bytes[words[0]] = number_from_text(words[2]);
  }
  return bytes;
}
