import { g_content_backup_originals } from "./g_content_backup_originals.mjs";
import { g_content_backup_namespaces } from "./g_content_backup_namespaces.mjs";
import { g_content_backup_namespace } from "./g_content_backup_namespace.mjs";
import { g_content_backup_generations } from "./g_content_backup_generations.mjs";
import { g_content_backup_generations_write } from "./g_content_backup_generations_write.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { g_content_backup_folder } from "./g_content_backup_folder.mjs";
import { git_acp_call_folder } from "./git_acp_call_folder.mjs";
export async function g_content_backup() {
  "Copies everything the game has written into storage down into its own git repo, then commits and sends it.";
  "Storage keeps one copy of a file and forgets what it said before, so an edit that turns out wrong has nothing to be restored from. A repo keeps every version of every sentence, which is the difference between a copy and a backup.";
  "Committing and sending together, rather than committing and waiting for something else to send, is what the memory notes already do - a backup that stays on the same disk as the thing it backs up is not one.";
  "The record of what is already held is read once at the start and written once at the end, so a pass that changes nothing does no work beyond asking, and a pass that dies partway leaves the old record standing and simply repeats itself.";
  let namespaces = g_content_backup_namespaces();
  let generations = await g_content_backup_generations();
  async function lambda(namespace) {
    let namespace_paths = await g_content_backup_namespace(
      namespace,
      generations,
    );
    return namespace_paths;
  }
  let per_namespace = await list_map_async(namespaces, lambda);
  let paths = list_concat_multiple(per_namespace);
  await g_content_backup_generations_write(generations);
  ("the drive's copies come along in the same pass so that both wordings of an edited chapter are committed together, rather than one of them waiting on somebody remembering to fetch it");
  await g_content_backup_originals();
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
