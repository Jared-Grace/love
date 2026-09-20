import { audio_master_compressor_ratio } from "./audio_master_compressor_ratio.mjs";
import { equal } from "./equal.mjs";
import { audio_master_compressor_threshold_decibels } from "./audio_master_compressor_threshold_decibels.mjs";
import { divide } from "./divide.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function audio_master_compressor_text(decibels_peak, decibels_gain) {
  "$plain decibels_peak";
  "$plain decibels_gain";
  "write the stretch of the chain that squeezes the loud part of a recording into the room under the ceiling, so the loudest instants give way gradually instead of being held flat";
  "★ IT SQUEEZES SO THAT THE STEP AFTER IT HAS NOTHING LEFT TO DO. A limiter on its own holds every instant above the ceiling to one level, so the very top of the recording arrives flat and the order between one loud instant and a louder one is gone. Squeezing first maps that whole span onto the room below the ceiling instead, so a louder instant still comes out louder, only by less. The holding step stays after it as a catch for what the attack lets through, and on a recording squeezed correctly it does almost nothing.";
  "★ A DECIBEL SCALE IS ALREADY LOGARITHMIC, SO A RATIO IS A STRAIGHT LINE. What sounds like it needs a curve drawn by hand - take everything from here up to the loudest and fit it into the space that is left - is exactly what a threshold and a ratio say, because the mapping is a straight line in decibels and the ratio is its slope. Nothing needs drawing point by point.";
  "THE KNEE IS AS HARD AS IT GOES, because a soft knee rounds the corner where the squeezing starts and the mapping is then no longer the straight line the ratio describes. The corner is five decibels below the ceiling rather than at it, which is already far enough down not to be heard as a corner.";
  "A recording that needs no squeezing gets no squeezing, and the answer is then nothing at all rather than a ratio of one written out. A step that does nothing still costs a pass over every sample, and a chain that names it invites the reader to look for an effect that is not there.";
  let ratio = audio_master_compressor_ratio(decibels_peak, decibels_gain);
  if (equal(ratio, 1)) {
    let r2 = "";
    return r2;
  }
  let threshold = audio_master_compressor_threshold_decibels(decibels_gain);
  let divided = divide(threshold, 20);
  let level = Math.pow(10, divided);
  let level_text = level.toFixed(6);
  let ratio_text = ratio.toFixed(4);
  let r = text_combine_multiple([
    "acompressor=threshold=",
    level_text,
    ":ratio=",
    ratio_text,
    ":attack=5:release=50:makeup=1:knee=1,",
  ]);
  return r;
}
