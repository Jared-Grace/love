import { qa_trees_processes_orphaned } from "./qa_trees_processes_orphaned.mjs";
import { process_end } from "./process_end.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_trees_processes_orphaned_end() {
  "Ends everything still running inside a frozen copy that no longer exists, and says what went.";
  "Which ones those are is somebody else's question, asked next door, so that the list can be read before this is run. All that happens here is the ending.";
  "It is its own question rather than part of the reaping because the two look in opposite directions: reaping starts from a folder and finds the processes, and this starts from the processes and finds no folder.";
  let pids = await qa_trees_processes_orphaned();
  let ended = [];
  for (let pid of pids) {
    let gone = process_end(pid);
    if (gone) {
      list_add(ended, pid);
    }
  }
  return ended;
}
