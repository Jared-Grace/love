import { g_content_originals_folders } from "./g_content_originals_folders.mjs";
import { g_content_originals_folder } from "./g_content_originals_folder.mjs";
import { folder_user_storage_function_path_function } from "./folder_user_storage_function_path_function.mjs";
import { path_join } from "./path_join.mjs";
import { folder_copy_fresh } from "./folder_copy_fresh.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function g_content_backup_originals() {
  "Copies the game's own folders off the drive into the backup repo, alongside what storage holds.";
  "The drive keeps what was first written and never hears about an edit made in a browser, so for a chapter somebody has since rewritten it is the only place the first wording still exists. Losing the machine would lose it, and no one would notice, because the newer wording is safe in storage and looks like the whole story.";
  "Nearly all of these files say exactly what storage says. A repo keeps one copy of anything it has already seen however many addresses point at it, so holding all of them costs close to nothing and spares anybody the job of working out which ones are worth holding.";
  let names = g_content_originals_folders();
  let root = folder_user_storage_function_path_function();
  let originals = g_content_originals_folder();
  async function lambda(name) {
    let source = path_join([root, name]);
    let target = path_join([originals, name]);
    let skipped = [];
    await folder_copy_fresh(source, target, skipped);
    return target;
  }
  let targets = await list_map_async(names, lambda);
  return targets;
}
