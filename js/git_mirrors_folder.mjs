import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
export function git_mirrors_folder() {
  "The folder on this machine's own disk where a bare copy of each repository is kept.";
  "It was on the removable drive until the drive stopped being used, and while it was there the copies quietly stopped being made: the reading answers a missing folder as an empty set, so every cycle of the pushing found nothing to bring up to date and said so by saying nothing. Moving it onto the disk is what makes the answer mean something again.";
  "A copy beside the thing it copies is no help against the disk failing, and it is not meant to be - the copies that leave this machine are the ones pushed away over the network. What this one is for is the other loss: a history rewritten wrongly, a reference forced over, a repo folder deleted. It is a whole object database standing apart from the one being worked in, and restoring from it needs nothing to be reachable.";
  "It sits under the same gathering folder as the backups, with the kind of thing at the top, so that what belongs to the repos is together rather than loose in the home folder.";
  let home = folder_home();
  let folder = path_join([home, "a", "mirrors"]);
  return folder;
}
