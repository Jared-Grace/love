import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function git_objects_tidy_love() {
  "Packs away the loose objects this repository has accumulated and lets go of the ones nothing can reach any more, and says what the store weighed on either side of it.";
  "★ IT CHANGES NO HISTORY AND SENDS NOTHING ANYWHERE. Every commit that any branch, tag or reflog can still reach is exactly where it was afterwards; what goes is the litter around them. That is the whole reason this is worth having as its own named thing: the repository was measured at eight hundred and fifty-four mebibytes on the disk and four hundred and five in a fresh copy of it, and the difference was leftovers from purges already accepted. Getting that back is not a rewrite and must not be filed alongside one.";
  "★ AN HOUR OF GRACE, NEVER NONE, BECAUSE ABOUT TEN OF US SHARE THIS ONE WORKING FOLDER. An object is written before the commit that names it, so a peer halfway through committing owns objects nothing can reach yet, and letting go of everything unreachable this instant would take them. An hour is longer than any commit takes and far shorter than the age of the litter, so it keeps the whole saving and none of the hazard. The length is spelled here rather than asked for, and that is what makes this safe to approve once: a standing approval covers every argument a function is ever handed, so a grace window handed in at the call would be approving the one that has the hazard in it.";
  "It asks which repository it is for rather than being handed one, for the same reason. A folder named at the call would let a standing approval reach any repository on the machine.";
  "What the store weighed is read on both sides and both readings travel out, because the work here is invisible otherwise - git says nothing at all when it finds nothing to do, and a run that did nothing reads exactly like a run that did everything.";
  arguments_assert(arguments, 0);
  let folder = await git_folder_love();
  let before = await git_folder_run(folder, ["count-objects", "-vH"]);
  let tidied = await git_folder_run(folder, ["gc", "--prune=1.hour.ago"]);
  let after = await git_folder_run(folder, ["count-objects", "-vH"]);
  let r = {
    folder,
    before,
    tidied,
    after,
  };
  return r;
}
