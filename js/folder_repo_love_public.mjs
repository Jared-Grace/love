import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { folder_public } from "./folder_public.mjs";
import { path_join } from "./path_join.mjs";
export function folder_repo_love_public() {
  "The whole way to this repository's own served folder - the one that goes to the internet - spelled from the disk root rather than from wherever the asking happens to be standing.";
  "IT IS THIS REPOSITORY'S FOLDER AND NOT ANY OTHER ONE'S. The repositories beside this one serve out of folders of their own naming, and a reading that wants all of them has to ask each of them where it serves from. This is the answer to the narrower question, which is the one every deploy-side reading here is actually asking: what is waiting to be sent from HERE.";
  "Written whole rather than left as a folder name, because a bare relative name is only right while the asking is done from the repository root, and the readings that want this are run from a worker, from a frozen copy, and from a dispatcher started elsewhere.";
  arguments_assert(arguments, 0);
  let repo = folder_repo_love();
  let served = folder_public();
  let folder = path_join([repo, served]);
  return folder;
}
