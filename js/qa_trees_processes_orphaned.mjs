import { equal } from "./equal.mjs";
import { processes_folder_within } from "./processes_folder_within.mjs";
import { process_folder_or_null } from "./process_folder_or_null.mjs";
import { qa_tree_owners_folder } from "./qa_tree_owners_folder.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function qa_trees_processes_orphaned() {
  "Which processes are still running inside a frozen copy that no longer exists.";
  "Reaping a copy could only ever reach the copies it could still see. A process that outlived its own folder is in none of them - the folder was its only name in that list - so it was invisible to the one thing whose job was to take it away, and it stayed that way for as long as the machine was up. Four such were found together, from a conversation that had ended four days earlier, holding between them most of a core and nearly three days of processor time.";
  "What makes one of these dead is not a guess about how long it has been there. The folder it is working in has been deleted. Every file it could read is gone, the copy existed only to be read, and nothing it goes on to do can be right.";
  "Asking is kept apart from ending so that the answer can be looked at before anything is done about it. What this hands back is a list of processes about to be killed, and that is worth being able to read first.";
  let folder = qa_tree_owners_folder();
  let pids = await processes_folder_within(folder);
  let orphaned = [];
  for (let pid of pids) {
    let working = process_folder_or_null(pid);
    ("Nothing known about a process is a reason to leave it alone, never a reason to end it. It reads as nothing when the process went away between the list being made and this line, and equally when it is somebody else's to look at - and a missing folder and an unreadable one are the same word here, so without this the second case would be answered as though the folder were gone.");
    let unknown = equal(working, null);
    if (unknown) {
      continue;
    }
    let there = await file_exists(working);
    let gone = not(there);
    if (gone) {
      list_add(orphaned, pid);
    }
  }
  return orphaned;
}
