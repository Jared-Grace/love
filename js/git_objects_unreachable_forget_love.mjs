import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { folder_home_backup } from "./folder_home_backup.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_objects_store_love } from "./git_objects_store_love.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function git_objects_unreachable_forget_love() {
  "Lets go of the record of where this repository's branch has been, and then throws away the old commits that record was the last thing still holding on to, saying what the object store weighed on either side of it.";
  "★ THIS IS THE ONE STEP THAT MAKES A PAST REWRITE FINAL ON THIS MACHINE. Packing away leftovers changes nothing and can be run without a thought; this cannot be taken back from inside the repository at all. Everything it forgets is a history somebody already decided to remove, and the copies of those histories that were written before each removal are the way back - they sit outside every repository, in the backup folder this asks about below, and this refuses to run when that folder holds none of them.";
  "Measured here on 2026-09-23, and the measurement is the whole reason this exists: four hundred and eighty-six thousand objects are reachable from the branch, and eight hundred and eighty-four thousand sit in the pack. The difference is a hundred and twenty-five mebibytes of commits that were purged and are still on the disk. Asking the store what it can reach and asking it what it is carrying give the same answer once the record of where the branch has been is out of the way, and different answers until then - which is how the hundred and twenty-five was found rather than guessed.";
  "★ ONLY THE ENTRIES NOTHING CAN REACH ANY MORE, NEVER THE WHOLE RECORD. Asked to forget everything, git also drops the entries pointing at commits that are perfectly alive - the record of yesterday's work, which is what somebody reaches for when they undo one thing too many. The entries worth dropping are exactly the ones naming a commit no branch leads to, and those are what a finished purge leaves behind. The narrower question costs nothing and keeps the undo for ordinary mistakes intact.";
  "★ AN HOUR OF GRACE ON THE THROWING AWAY, NEVER NONE, BECAUSE ABOUT TEN OF US SHARE THIS ONE WORKING FOLDER. An object is written before the commit that names it, so a peer halfway through a commit has objects on the disk that nothing points at yet, and no grace at all would take them. The length is spelled here rather than asked for, and that is what makes this safe to approve once: a standing approval covers every argument a function is ever handed, so a length asked for at the call would let a later call say none.";
  "It asks which repository it is for rather than being handed one, for the same reason. A folder named at the call would let a standing approval reach any repository on the machine, and this is not a command anybody should be able to point somewhere new.";
  "What the store weighed is read on both sides and both readings travel out, because the work here is invisible otherwise - git says nothing at all when it finds nothing to do, and a run that did nothing reads exactly like a run that did everything.";
  arguments_assert(arguments, 0);
  let name = repo_love_name();
  let backups = folder_home_backup(name);
  let files = await folder_read_files(backups);
  function bundle_is(file_name) {
    let is = text_ends_with(file_name, ".bundle");
    return is;
  }
  let bundles = list_filter(files, bundle_is);
  list_empty_not_is_assert_json(bundles, {
    hint: "the backup folder holds no copy of a history taken before a rewrite, so there would be nothing to go back to — nothing has been touched, and writing one is the way on",
    backups,
  });
  let folder = await git_folder_love();
  let before = await git_objects_store_love();
  await git_folder_run(folder, [
    "reflog",
    "expire",
    "--expire-unreachable=now",
    "--all",
  ]);
  await git_folder_run(folder, ["gc", "--prune=1.hour.ago"]);
  let after = await git_objects_store_love();
  let r = {
    folder,
    bundles,
    before,
    after,
  };
  return r;
}
