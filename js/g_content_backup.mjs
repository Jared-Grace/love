import { g_content_backup_namespaces } from "./g_content_backup_namespaces.mjs";
import { g_content_backup_namespace } from "./g_content_backup_namespace.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { g_content_backup_folder } from "./g_content_backup_folder.mjs";
import { git_acp_call_folder } from "./git_acp_call_folder.mjs";
export async function g_content_backup() {
  "Copies everything the game has written into storage down into its own git repo, then commits and sends it.";
  "Storage keeps one copy of a file and forgets what it said before, so an edit that turns out wrong has nothing to be restored from. A repo keeps every version of every sentence, which is the difference between a copy and a backup.";
  "Committing and sending together, rather than committing and waiting for something else to send, is what the memory notes already do - a backup that stays on the same disk as the thing it backs up is not one.";
  let namespaces = g_content_backup_namespaces();
  let per_namespace = await list_map_async(
    namespaces,
    g_content_backup_namespace,
  );
  let paths = list_concat_multiple(per_namespace);
  let folder = g_content_backup_folder();
  let f_name = g_content_backup.name;
  let args = [];
  let committed = await git_acp_call_folder(f_name, args, folder);
  let result = {
    paths,
    committed,
  };
  return result;
}
