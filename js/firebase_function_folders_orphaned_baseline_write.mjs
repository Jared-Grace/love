import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { firebase_function_folders_orphaned } from "./firebase_function_folders_orphaned.mjs";
import { firebase_function_folders_orphaned_baseline_path } from "./firebase_function_folders_orphaned_baseline_path.mjs";
export async function firebase_function_folders_orphaned_baseline_write() {
  "Rewrite the record of shared-bucket folders named after nothing, from what the bucket holds right now. For shrinking it once a folder has been read onto a live name or is gone - never for blessing a new one, which is the single thing the gate exists to refuse.";
  "There is no undo behind this one. The bucket belongs to everybody and nothing written here can move a file on it, so a name recorded as known is a name somebody has to go and deal with by hand.";
  let known = await firebase_function_folders_orphaned();
  let path = firebase_function_folders_orphaned_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "content in the shared bucket has just been left under a name nothing answers to - point the live code back at the word already up there, or move what is up there, rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
