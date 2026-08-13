import { file_to_commit_add_try } from "./file_to_commit_add_try.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { browser_is } from "./browser_is.mjs";
export async function file_delete(file_path) {
  "takes one file away, given where it is";
  "do NOT grant. What refuses it today is only that the parameter spells two of the words the check reads for, and that would fall the moment somebody declared the name ordinary data - which is a one-line edit made in good faith by anybody who has just met a bible identifier called bible_folder. So the refusal is written where it cannot be undone by accident. A standing approval here removes any file in the repo without being seen, and a removal is the one change that leaves nothing behind to read afterwards.";
  "the same argument was measured rather than assumed. Reading was granted with its refusal recorded, on the ground that the shell reads any file with no prompt at all, so refusing the named reader bought nothing but clicks. Removal is not in that position: rm is silent at the guard, which means the decision falls to the permission engine and not that it is already approved. The capability is genuinely withheld, so withholding it here withholds something.";
  if (browser_is()) {
    await file_overwrite(file_path, "");
    return;
  }
  let fs = await import("fs");
  await fs.promises.unlink(file_path);
  ("a file taken away is as much a change to commit as one written, and the note a commit reads is a note of changes rather than of writing — without this line the command that removed it could name everything it did except the removal");
  await file_to_commit_add_try(file_path);
}
