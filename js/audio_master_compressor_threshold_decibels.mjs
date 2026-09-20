import { audio_master_ceiling_decibels } from "./audio_master_ceiling_decibels.mjs";
import { audio_master_compressor_range_decibels } from "./audio_master_compressor_range_decibels.mjs";
import { subtract } from "./subtract.mjs";
export function audio_master_compressor_threshold_decibels(decibels_gain) {
  "$plain decibels_gain";
  "answer the level at which the squeezing starts, for a recording that is about to be turned up by the gain given";
  "★ IT IS WORKED BACK FROM THE CEILING AND NOT SET ON ITS OWN. The squeezing wants to start a fixed distance below where the ceiling will be, and the ceiling is a place in the finished recording rather than in the one handed over. So the answer is the ceiling, less the range that is being squeezed, less the gain that has not been applied yet.";
  "★ SUBTRACTING THE GAIN IS WHAT LETS ONE SETTING SERVE A QUIET SONG AND A LOUD ONE. A threshold written as a plain number is a claim about how loud the recording already is, and a quiet recording needing a lot of gain would pass under it untouched and then be turned up straight through the ceiling, where only the holding step could catch it and only by flattening. Moving the threshold down by the gain puts the squeezing in the same place relative to the finished sound whatever was handed in.";
  let ceiling = audio_master_ceiling_decibels();
  let range = audio_master_compressor_range_decibels();
  let below_ceiling = subtract(ceiling, range);
  let r = subtract(below_ceiling, decibels_gain);
  return r;
}
