import { qa_trees_processes_orphaned_end } from "./qa_trees_processes_orphaned_end.mjs";
import { qa_tree_processes_end } from "./qa_tree_processes_end.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { qa_tree_untouched_is } from "./qa_tree_untouched_is.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { claude_sessions_recent } from "./claude_sessions_recent.mjs";
import { folder_delete } from "./folder_delete.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map } from "./list_map.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
import { qa_snapshot_owner } from "./qa_snapshot_owner.mjs";
import { qa_tree_owners_folder } from "./qa_tree_owners_folder.mjs";
import { qa_tree_stale_minutes } from "./qa_tree_stale_minutes.mjs";
export async function qa_trees_reap() {
  "Throws away the frozen copies belonging to conversations that have ended, and says which ones went.";
  "A copy is made per asker so that no two of us rewrite files the other is reading, and it is kept for as long as the conversation lasts so the copies stay few. What was missing is the other end: a conversation that finishes leaves its copy behind, and the copies live in memory, so what accumulates is not disk but the machine's own room to work in. Nothing ever took them away, so they only went when the machine did.";
  "Whether a conversation is still going is asked of the conversations themselves rather than of a list kept here. One being written to is one still happening, and that answer survives a crash, which any list written down on the way out would not.";
  "Never your own, whatever the answer says - you are plainly still here, and the copy about to be made is yours.";
  "Two things must both say a copy is abandoned before it goes. The transcripts are read for one repo while the copies from every repo sit together in this one folder, so a neighbour working elsewhere is alive and cannot be seen here; the copy's own age is what covers that, and it needs to know nothing about who made it.";
  let folder = qa_tree_owners_folder();
  await folder_exists_ensure(folder);
  let owners = await folder_read(folder);
  let minutes = qa_tree_stale_minutes();
  let sessions = await claude_sessions_recent(minutes);
  function lambda_session_id(session) {
    let id = property_get(session, "id");
    return id;
  }
  let live = list_map(sessions, lambda_session_id);
  let mine = qa_snapshot_owner();
  list_add(live, mine);
  let reaped = [];
  let ended_all = [];
  for (let owner of owners) {
    let heard_from = list_includes(live, owner);
    if (heard_from) {
      continue;
    }
    let stale = path_join([folder, owner]);
    let untouched = await qa_tree_untouched_is(stale);
    if (not(untouched)) {
      continue;
    }
    ("Whatever is still running inside the copy is ended before the copy goes. Deleting it out from under a running process never stopped that process - it only left it working forever on a folder that no longer existed, and one of those was found holding most of a core after four days. Ending it is finishing this job, not a new one.");
    let ended = await qa_tree_processes_end(stale);
    await folder_delete(stale);
    list_add(reaped, owner);
    list_add_multiple(ended_all, ended);
  }
  ("The copies that are already gone are swept last, and they are the reason any of this had to be written. A process outliving its own copy is in no folder, so the loop above cannot reach it however often it runs - the folder was its only name in that list. Left to a command somebody has to remember, it would sit exactly as long as the one that sat four days. Here it costs one reading of the machine's own process list per reap, and nobody has to remember anything.");
  let orphaned = await qa_trees_processes_orphaned_end();
  let report = {
    reaped,
    ended: ended_all,
    orphaned,
    kept: subtract(owners.length, reaped.length),
  };
  return report;
}
