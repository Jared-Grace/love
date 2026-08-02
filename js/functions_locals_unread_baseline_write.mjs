import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { functions_locals_unread_baseline_path } from "./functions_locals_unread_baseline_path.mjs";
import { functions_locals_unread_names } from "./functions_locals_unread_names.mjs";
export async function functions_locals_unread_baseline_write() {
  "Record which names are already bound and never read, so the gate can refuse the next one without refusing the ones already here.";
  "Run this after reading a dropped answer back into the code, to shrink the record - never to make a new one green, which is the one thing it must not be used for.";
  let path = functions_locals_unread_baseline_path();
  let names = await functions_locals_unread_names();
  await baseline_known_growth_assert(
    names,
    path,
    "these names are bound and never read and were not before - either read the answer back into the code or take the binding off, rather than recording it as known",
  );
  let r = await baseline_known_write(names, path);
  return r;
}
