import { file_exists } from "./file_exists.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function qa_snapshot_clean(folder) {
  "Puts every tracked file in a frozen copy back the way its commit had it, and says whether there was a copy there to do it to";
  "A build inside a copy leaves it changed, and moving a copy to another commit refuses while the files it would overwrite are still changed. So without this the second build of a copy fails on what the first one left - which looks like the copy being broken rather than like it being used";
  "A copy that is not there yet is left alone and answered no rather than complained about, so this can be asked first every time without anybody having to know whether this is the first run";
  "Only tracked files are put back. What was never committed - the installed packages, the settings for this machine - is what makes the copy usable at all, and clearing that out would take the copy apart to tidy it";
  let made = await file_exists(folder);
  if (made) {
    let words = ["reset", "--hard"];
    await git_folder_run(folder, words);
    return true;
  }
  return false;
}
