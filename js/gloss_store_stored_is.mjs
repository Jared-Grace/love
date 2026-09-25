import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { file_exists } from "./file_exists.mjs";
export async function gloss_store_stored_is(fn) {
  "Whether one gloss store is on the disk to be read at all.";
  "THESE STORES SIT ON A DRIVE THAT IS NOT ALWAYS MOUNTED. A sweep over a folder that is not there finds no chapters, and so finds nothing wrong inside them - which is the same answer it gives for a store somebody has finished repairing. Never looked at and nothing wrong must not share one answer, and a ratchet handed the second where the first was true would drop every offence it was holding and call that a repair.";
  "The question was written out three times before it was written down once: a store keeps its chapters in the folder named after the function that writes them, so asking is the same two steps whichever store is asked about.";
  arguments_assert(arguments, 1);
  let folder = local_function_folder(fn);
  let stored = await file_exists(folder);
  return stored;
}
