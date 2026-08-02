import { processes_folder_within } from "./processes_folder_within.mjs";
import { list_add } from "./list_add.mjs";
import { process_end } from "./process_end.mjs";
export async function qa_tree_processes_end(folder) {
  "Ends whatever is still running inside a frozen copy that is about to be thrown away, and says what went.";
  "This is the other half of throwing the copy away, not a new thing done to it. Deleting the folder was always the violent act - a process reading a folder that has just been deleted underneath it cannot go on doing anything correct - and until now that process was simply left there. One was found four days after its copy went, still holding most of a core, working inside a folder the kernel could only describe as deleted. It had burned two days and twenty hours of processor time on nothing.";
  "It is done before the delete rather than after so that the folder still has its real name while the machine is asked who is inside it. Afterwards the answer still comes back, but wearing the mark the kernel adds, and the folder is the thing being matched against.";
  "Nothing here decides whether the copy is abandoned. That was decided already, twice over, by the caller.";
  let pids = await processes_folder_within(folder);
  let ended = [];
  for (let pid of pids) {
    let gone = process_end(pid);
    if (gone) {
      list_add(ended, pid);
    }
  }
  return ended;
}
