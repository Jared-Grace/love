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
  for (let owner of owners) {
    let heard_from = list_includes(live, owner);
    if (heard_from) {
      continue;
    }
    let stale = path_join([folder, owner]);
    await folder_delete(stale);
    list_add(reaped, owner);
  }
  let report = {
    reaped,
    kept: owners.length - reaped.length,
  };
  return report;
}
