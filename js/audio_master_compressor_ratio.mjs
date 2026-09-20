import { audio_master_compressor_threshold_decibels } from "./audio_master_compressor_threshold_decibels.mjs";
import { audio_master_compressor_range_decibels } from "./audio_master_compressor_range_decibels.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { greater_than } from "./greater_than.mjs";
export function audio_master_compressor_ratio(decibels_peak, decibels_gain) {
  "$plain decibels_peak";
  "$plain decibels_gain";
  "answer how hard to squeeze a recording whose loudest instant is the peak given, so that after the gain that instant lands exactly on the ceiling";
  "★ THE RATIO IS MEASURED OFF THE RECORDING RATHER THAN CHOSEN, which is what lets the same setting serve a song with gentle peaks and a song with violent ones. A ratio written as a plain number is right for whatever recording it was picked on: too little and the loudest instants still run into the holding step and are flattened after all, too much and the song is squeezed harder than it ever needed. The distance from the threshold up to the peak is the only thing that says which.";
  "★ THE ROOM BELOW THE CEILING IS EXACTLY THE RANGE, WHICH IS WHY THE SUM IS THIS SHORT. The threshold is placed the range below the finished ceiling, so the space the squeezed sound has to land in is that same range and nothing else. Dividing the distance up to the peak by that room gives the ratio directly, with no reference to the gain, because the gain has already been taken out of the threshold.";
  "A recording whose loudest instant already sits under the ceiling gets a ratio of one, which is to say no squeezing at all. Nothing needs holding down, and a ratio below one would turn the quiet parts up rather than the loud parts down, which is the opposite of what was asked for.";
  let threshold = audio_master_compressor_threshold_decibels(decibels_gain);
  let range = audio_master_compressor_range_decibels();
  let above_threshold = subtract(decibels_peak, threshold);
  let wanted = divide(above_threshold, range);
  if (greater_than(1, wanted)) {
    let r2 = 1;
    return r2;
  }
  let r = wanted;
  return r;
}
