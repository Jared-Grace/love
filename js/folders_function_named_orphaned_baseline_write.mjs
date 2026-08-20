import { folders_function_named_roots_present_assert } from "./folders_function_named_roots_present_assert.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { folders_function_named_orphaned } from "./folders_function_named_orphaned.mjs";
import { folders_function_named_orphaned_baseline_path } from "./folders_function_named_orphaned_baseline_path.mjs";
export async function folders_function_named_orphaned_baseline_write() {
  "Rewrite the record of stored-data folders left behind by a rename, from what user storage holds right now. For shrinking it once a folder has been moved onto the live name or deleted on purpose - never for blessing a new one, which is the single thing the gate exists to refuse.";
  "The folders have to be reachable before any of this counts. The finder answers nothing when the drive is out, which reads exactly like nothing being left behind, so a record rewritten from it would forget every folder it never looked at - and shrinking is the one direction this is allowed to move, so nothing downstream would ever say so.";
  await folders_function_named_roots_present_assert();
  let known = await folders_function_named_orphaned();
  let path = folders_function_named_orphaned_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "stored data has just been left behind under a name nothing answers to - move the folder onto the live name, or delete it on purpose, rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
