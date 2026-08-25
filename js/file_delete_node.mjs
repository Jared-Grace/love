import { folder_public_root_blocked_assert } from "./folder_public_root_blocked_assert.mjs";
import { file_to_commit_add_try } from "./file_to_commit_add_try.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function file_delete_node(file_path) {
  "$plain file_path";
  "Taking one file off a real disk: the half of a removal that only a build machine can do.";
  "★ IT IS SEPARATE FOR WEIGHT, NOT FOR CLARITY. The check that chooses between this and emptying a browser's own copy decides which machine RUNS this and settles nothing about which machine DOWNLOADS it - a bundler follows a plain import whether the branch is walked or not, so a page offering to delete a function was carrying the public-folder guard, the note-what-to-commit machinery, and through it an npm install, in order never to run a line of any of it. Asked for by name at the moment it is wanted, none of it is in the page.";
  "Do NOT grant this either, for the same reason its caller may not be granted: a standing approval removes any file in the repo without being seen, and a removal is the one change that leaves nothing behind to read afterwards. A split made for weight must not become a second name for a withheld capability.";
  "Taking a file away from the top of the folder that goes out is as much a change to it as writing one, so the block over that folder is asked about here on the same terms.";
  "A file taken away is as much a change to commit as one written, and the note a commit reads is a note of changes rather than of writing - without that line the command that removed it could name everything it did except the removal.";
  arguments_assert(arguments, 1);
  await folder_public_root_blocked_assert(file_path);
  let fs = await import("fs");
  await fs.promises.unlink(file_path);
  await file_to_commit_add_try(file_path);
}
