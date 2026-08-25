import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { fn_name } from "./fn_name.mjs";
import { public_chunks_orphaned_baseline_path } from "./public_chunks_orphaned_baseline_path.mjs";
import { public_chunks_orphaned_names } from "./public_chunks_orphaned_names.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function public_chunks_orphaned_baseline_write() {
  "Rewrite the leftover-script ratchet from what the folders hold right now. For seeding it once, and for shrinking it after leftovers have been cleared away - never for blessing a new one, which is the single thing the gate exists to refuse.";
  "The folders that are being served are the reason this is a ratchet rather than a zero. What to do about a leftover under a folder people are reading from is a question about what they have in front of them, so the ones already there are recorded and only what appears after today has to be answered for. The folder a build writes for development starts at none, and none cannot grow, so that half is held at zero without anything saying so.";
  arguments_assert(arguments, 0);
  let known = await public_chunks_orphaned_names();
  let path = public_chunks_orphaned_baseline_path();
  let f_name = fn_name("folder_chunks_orphaned_delete");
  let hint = text_combine_multiple([
    "a folder is carrying a script nothing sends for that it was not carrying before - clear it with ",
    f_name,
    " rather than recording it here",
  ]);
  await baseline_known_growth_assert(known, path, hint);
  let r = await baseline_known_write(known, path);
  return r;
}
