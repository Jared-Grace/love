import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { text_size } from "./text_size.mjs";
export async function file_text_replace_once(f_path, from, to) {
  "Changes one run of text in one file, having first made sure that run appears there exactly once";
  "do NOT grant. Nothing here reads as unsafe to the check, because no parameter is named for a command and nothing downstream runs one - but the third argument is written into a file, and some of the files in this repo are executed. A standing approval would let any text at all be placed in any file without anybody seeing it, and unlike a command that is gone when it finishes, what this writes stays.";
  "This is what a hand edit was doing, said as a command instead. The point is not that it is safer to type - it is that it leaves a name and two arguments behind, so what happened can be read back, argued with, and done again. A hand edit leaves only the difference between two versions of a file and no record of what was being asked for.";
  "It is the one route the strongest setting of the commands-only switch left open in principle and nothing filled in: the transforms reach a tree, and prose has no tree. Without this, finding a word in a note ended in a hand edit, which is exactly the thing the switch exists to remove.";
  "How big the file was before and after comes back, because a replacement that changed nothing is otherwise indistinguishable from one that worked. The count is already promised to be one, so it is the sizes rather than the count that carry news.";
  arguments_assert(arguments, 3);
  let before = await file_read(f_path);
  let after = text_replace_once(before, from, to);
  await file_overwrite(f_path, after);
  let size_before = text_size(before);
  let size_after = text_size(after);
  let r = {
    f_path,
    size_before,
    size_after,
  };
  return r;
}
