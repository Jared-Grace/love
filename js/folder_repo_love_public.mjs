import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { folder_public } from "./folder_public.mjs";
import { path_join } from "./path_join.mjs";
export function folder_repo_love_public() {
  "The whole way to this repository's own served folder - the one that goes to the internet - spelled from the disk root rather than from wherever the asking happens to be standing.";
  "IT IS THIS REPOSITORY'S FOLDER AND NOT ANY OTHER ONE'S. The repositories beside this one serve out of folders of their own naming, and a reading that wants all of them has to ask each of them where it serves from. This is the answer to the narrower question, which is the one every deploy-side reading here is actually asking: what is waiting to be sent from HERE.";
  "IT IS ALSO THE RUNNING COPY'S OWN FOLDER, worked out from where this code sits on disk rather than looked up as the repository the person at the keyboard last chose. A gate is asked these questions at a commit, inside a frozen copy of the repository made for that one commit, and a copy like that carries no answer to which repository anybody is working in - so asking it that way failed on the lookup rather than on the folder, and a gate that cannot run at all reads as a fault in whatever app it was judging.";
  "Written whole rather than left as a bare folder name, because a bare name is only right while the asking is done from the repository root. Both spellings answer the same today, because the runner that asks a frozen copy its questions starts the program inside that copy on purpose - but that makes the answer depend on a decision taken in another function, and a bare name would quietly read the live folder while judging a frozen commit the moment anything asked from somewhere else.";
  "Said once here because three readings had worked it out for themselves, and each had written down its own share of the two reasons above - so the reasons were three copies that could disagree, which is worse than three copies of the joining.";
  arguments_assert(arguments, 0);
  let repo = folder_repo_love();
  let served = folder_public();
  let folder = path_join([repo, served]);
  return folder;
}
