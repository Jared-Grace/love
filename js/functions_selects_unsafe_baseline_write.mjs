import { baseline_known_write } from "./baseline_known_write.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { functions_selects_unsafe_baseline_path } from "./functions_selects_unsafe_baseline_path.mjs";
import { functions_selects_unsafe_names } from "./functions_selects_unsafe_names.mjs";
export async function functions_selects_unsafe_baseline_write() {
  "Rewrite the written-code ratchet from what the repo carries right now. For shrinking it after a transform's parameter has been narrowed to a name - never for blessing a new one, which is the whole thing the gate exists to refuse.";
  "This ratchet had no writer at all, alone among them. The gate's own words sent whoever it stopped to edit the file by hand, which is exactly the act every other ratchet here makes deliberate - and this is the one guarding which transforms can be handed arbitrary text through a command already approved, so it is the worst one to be able to widen quietly. Refusing growth is what the other writers do, and it does it too.";
  let known = await functions_selects_unsafe_names();
  let path = functions_selects_unsafe_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these transforms can be handed written code now and could not before - narrow the parameter to a name, rather than widening the opening the record is here to hold shut",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
