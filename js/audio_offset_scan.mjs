import { add } from "./add.mjs";
import { audio_difference_level } from "./audio_difference_level.mjs";
import { property_get } from "./property_get.mjs";
export async function audio_offset_scan({
  path_a,
  seconds_a,
  path_b,
  seconds_b,
  seconds_length,
  decibels_gain,
  seconds_offsets_comma,
}) {
  "$plain path_a";
  "$plain seconds_a";
  "$plain path_b";
  "$plain seconds_b";
  "$plain seconds_length";
  "$plain decibels_gain";
  "$plain seconds_offsets_comma";
  "slide one recording past another by each of several small distances, and answer how much was left over at each of them";
  "THIS IS THE ONE READING THAT PROVES A JOIN IS SAFE TO MAKE. Two takes of one performance can be laid on top of each other and still be a fraction of a second apart, and a fraction of a second is enough to turn a crossfade into a flam - two attacks heard where one was played, which no measurement of either take on its own can predict. Slid past each other, the distance where the leftover is smallest is where they truly line up.";
  "THE SHAPE OF THE ANSWER MATTERS AS MUCH AS ITS LOWEST POINT. A leftover that drops sharply at one distance and rises steeply either side means the two agree sample for sample, so they may be blended and the blend will be solid. A leftover that stays much the same across every distance tried means they never really agreed anywhere, and the lowest reading in that list is noise rather than an alignment.";
  "THE DISTANCES ARE TAKEN APART ON COMMAS ALONE AND DELIBERATELY NOT ON FULL STOPS. This repo's usual splitter forgives a full stop as a mistyped comma, which is right where the words are names - and fatal here, where every single value is a fraction written with a full stop in the middle of it. Split that way, three hundredths of a second arrives as a zero and an oh-three, and the scan is then run over numbers nobody asked for.";
  "The distance is added to the second recording's start rather than the first's, so the answer reads as how far the second one has to move.";
  let offsets_written = seconds_offsets_comma.split(",");
  let scanned = [];
  for (let offset_written of offsets_written) {
    let seconds_offset = Number.parseFloat(offset_written);
    let seconds_b_tried = add(seconds_b, seconds_offset);
    let measured = await audio_difference_level(
      path_a,
      seconds_a,
      path_b,
      seconds_b_tried,
      seconds_length,
      decibels_gain,
    );
    let decibels_rms = property_get(measured, "decibels_rms");
    scanned.push({
      seconds_offset,
      decibels_rms,
    });
  }
  return scanned;
}
