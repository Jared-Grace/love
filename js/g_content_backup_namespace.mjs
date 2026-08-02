import { g_content_backup_prefix } from "./g_content_backup_prefix.mjs";
import { firebase_storage_list_jg } from "./firebase_storage_list_jg.mjs";
import { g_content_backup_at_once } from "./g_content_backup_at_once.mjs";
import { g_content_backup_file } from "./g_content_backup_file.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
export async function g_content_backup_namespace(namespace) {
  "Copies every file one namespace holds in storage into the backup repo.";
  "What to copy is asked of the bucket rather than of this disk. A file written from somebody's browser was never on this disk, and a list built from what is here would leave exactly those out - the edited ones, which are the ones worth keeping.";
  let prefix = g_content_backup_prefix(namespace);
  let storage_paths = await firebase_storage_list_jg(prefix);
  let at_once = g_content_backup_at_once();
  let paths = await list_map_limited_async(
    storage_paths,
    g_content_backup_file,
    at_once,
  );
  return paths;
}
