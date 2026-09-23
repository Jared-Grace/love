import { arguments_assert } from "./arguments_assert.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
export function purge_words_allowed_path() {
  "Where the list of words a purge took out of this repository's past is kept, together with the places each one is still allowed to appear - outside every repo, in the folder whose whole promise is that nothing under it is copied anywhere or backed up.";
  "★ THE LIST CAN NEVER LIVE IN THIS REPOSITORY, AND THAT IS NOT A PREFERENCE. This repository is public. A file here naming the words a purge went to the trouble of removing would republish every one of them, in a far more readable form than the history they came out of - the purge would have gathered them from scattered old commits into one tidy list with a heading. A gate whose subject cannot be written down where the gate lives is unusual, and this is one of them.";
  "It is a file rather than something handed in at the call for the same reason. A word given on a command line is a word in a shell history, in a process list, and in whatever recorded the run - three more public places than the one being guarded.";
  "The allowed places sit beside each word rather than in a second list, because the pair is the whole judgement. A name that identified somebody did so by sitting alone in a short list beside other details, and the same name as one of eighty-eight ordinary entries in a vocabulary identifies nobody. Which places are which is the part no rule works out.";
  arguments_assert(arguments, 0);
  let path = folder_private_path("purge/words.json");
  return path;
}
