import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_color_tone_faults } from "./app_code_color_tone_faults.mjs";
import { app_code_color_tone_baseline_path } from "./app_code_color_tone_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_code_color_tone_baseline_write() {
  arguments_assert(arguments, 0);
  ("write down which hues are short of a tone or holding a spare one right now, so that the gate can tell afterwards whether that has changed. For seeding it once, and for banking a change somebody has decided on.");
  ("THIS IS THE ONE OF THE THREE COLOUR BASELINES THAT SHOULD ONLY EVER GET SHORTER, and that is worth saying because its two neighbours are the opposite. The records over the chip and pointing palettes hold readings, so a fourth colour honestly makes more of them and growth there is not a fault. This holds faults. Every entry is a hue that is either said twice or missing a tone, and there is no palette change that honestly adds one - a new hue arrives with both its tones or it arrives short.");
  ("SO RUNNING THIS AFTER A CHANGE THAT GREW THE LIST IS THE WRONG MOVE, and nothing here can stop it, which is why it is written down instead. The gate points at this name when it goes red because the usual reason is a fault that was repaired, where banking is exactly right. Read which way the list moved before reaching for it.");
  let known = app_code_color_tone_faults();
  let path = app_code_color_tone_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
