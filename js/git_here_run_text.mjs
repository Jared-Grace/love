import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
export async function git_here_run_text(asked) {
  "$plain asked";
  "What one git command prints in the folder the caller is standing in, with the blank line git ends on taken off.";
  "★ EVERY QUESTION PUT TO THIS HISTORY STARTS THE SAME THREE WAYS - where am I, run it, take the trailing newline off - and none of those three is the question. Written out at each asking they are three lines of ceremony in front of one line of meaning, and three lines copied are three lines that can be mended in one place and left wrong in the others.";
  "★ THE FOLDER IS THE CURRENT ONE AND IS NOT A PARAMETER, which is the whole difference between this and the folder-taking run underneath it. A caller that has a folder in hand should say so and use that one; a caller asking about the repo it is already inside should not have to fetch its own address first, and every such caller was fetching it identically.";
  arguments_assert(arguments, 1);
  let here = folder_current_absolute();
  let printed = await git_folder_run(here, asked);
  let squeezed = text_trim(printed);
  return squeezed;
}
