import { colors_palette_outside_files } from "./colors_palette_outside_files.mjs";
import { color_palette_outside_baseline_path } from "./color_palette_outside_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function color_palette_outside_baseline_write() {
  "rewrite the palette ratchet from the files that spell their own screen colours right now. For seeding it once, and for shrinking it after a file has moved onto the palette — it refuses to add a file, because a new colour belongs in the palette, not in the list.";
  let known = await colors_palette_outside_files();
  let path = color_palette_outside_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these files spell a screen colour of their own — ask an app_shared_color_ function for it, adding one to the palette if none fits",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
