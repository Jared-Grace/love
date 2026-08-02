import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { storage_function_folders_orphaned } from "./storage_function_folders_orphaned.mjs";
import { storage_function_folders_orphaned_baseline_path } from "./storage_function_folders_orphaned_baseline_path.mjs";
export async function storage_function_folders_orphaned_baseline_write() {
  "Rewrite the record of stored-data folders left behind by a rename, from what user storage holds right now. For shrinking it once a folder has been moved onto the live name or deleted on purpose - never for blessing a new one, which is the single thing the gate exists to refuse.";
  let known = await storage_function_folders_orphaned();
  let path = storage_function_folders_orphaned_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "stored data has just been left behind under a name nothing answers to - move the folder onto the live name, or delete it on purpose, rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
