import { qa_snapshot_uncommitted_names } from "./qa_snapshot_uncommitted_names.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { file_exists } from "./file_exists.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function qa_snapshot_clean(folder) {
  "Puts a frozen copy back the way its commit had it - every tracked file restored and everything left behind since cleared out - and says whether there was a copy there to do it to";
  "A build inside a copy leaves it changed, and moving a copy to another commit refuses while the files it would overwrite are still changed. So without this the second build of a copy fails on what the first one left - which looks like the copy being broken rather than like it being used";
  "A copy that is not there yet is left alone and answered no rather than complained about, so this can be asked first every time without anybody having to know whether this is the first run";
  "What was never committed is taken out as well, and this is the half that putting the tracked files back cannot do. A build cuts one app's script into extra pieces and names them with numbers of its own choosing, so those pieces belong to no commit and stand there afterwards untouched. Moving the copy to a commit that carries pieces of the very same names then refuses outright, because it will not write over something nobody kept a record of - and what that looks like from outside is a copy that has broken, at a commit where nothing is wrong";
  "The few things deliberately put there and never committed - the installed packages, the settings for this machine - are spared, because they are what makes the copy usable at all and clearing them out would take the copy apart to tidy it. They are spared by name, read from the one place their names are written down, so what is linked in and what is kept back here cannot fall out of step";
  let made = await file_exists(folder);
  if (made) {
    let words = ["reset", "--hard"];
    await git_folder_run(folder, words);
    let names = qa_snapshot_uncommitted_names();
    function exclude_lambda(name) {
      let word = text_combine_multiple(["--exclude=", name]);
      return word;
    }
    let excludes = list_map(names, exclude_lambda);
    let clearing = ["clean", "-f", "-d"];
    list_add_multiple(clearing, excludes);
    await git_folder_run(folder, clearing);
    return true;
  }
  return false;
}
