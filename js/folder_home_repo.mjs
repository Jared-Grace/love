import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
export function folder_home_repo(name) {
  "Where a repo belongs on this machine, named from the root - the folder it should be checked out in, whether or not it is there yet.";
  "There is already a reading that answers where this repo's code sits, and it works that out from its own file's place on disk. That one is right for everything asked while the code is running, and it cannot be used to move anything: it answers where the folder is, so it agrees with the disk no matter where the disk has it, and a move needs the two answers to disagree.";
  "So this one is written down rather than worked out. Before the move it says the new place while the other says the old, which is the difference the move is driven by; afterwards the two say the same thing and the move is over. Nothing has to be edited between those two moments, which matters here because at the moment the move happens there is nobody running who could edit it.";
  "It takes the repo's name for the same reason the backup folder beside it does. A second repo on this machine has somewhere obvious to go, and the kind of thing sits at the top with the repo named inside it, so the home folder does not fill up with one folder per repo.";
  let home = folder_home();
  let joined = path_join([home, "a", "repos", name]);
  return joined;
}
