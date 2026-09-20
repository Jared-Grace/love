import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_color_tone_baseline_path } from "./app_code_color_tone_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_code_color_tone_baseline_growth_assert(known) {
  arguments_assert(arguments, 1);
  ("Refuse to record a hue that is short of a tone, or holding a spare one, when the record did not already say so. The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops faults.");
  ("ITS TWO NEIGHBOURS OVER THE SAME PALETTES DELIBERATELY DO NOT REFUSE GROWTH, AND THE DIFFERENCE IS WHAT EACH RECORD HOLDS. Theirs hold readings, so a fourth colour honestly makes more of them and refusing that would refuse the very case those gates were built to notice. This one holds faults. There is no palette change that honestly adds one: a hue arrives with both its tones, or it arrives short and the shortage is the thing to fix rather than the thing to write down.");
  ("SO THE USUAL REASON THIS RATCHET MOVES IS A REPAIR, WHICH SHRINKS IT AND IS ALLOWED. The reason it would grow is a colour added without its twin, which is exactly the moment the rewrite gets reached for and exactly the moment the gate was doing its job.");
  let path = app_code_color_tone_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "a hue this app draws is short of a tone, or says one twice, and did not before - give the new colour the twin it is missing, or put it at a hue that is already carrying both, rather than recording the shortage as known",
  );
}
