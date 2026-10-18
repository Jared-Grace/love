import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { audio_envelopes_offset_best } from "./audio_envelopes_offset_best.mjs";
import { audio_envelope_windows_per_second } from "./audio_envelope_windows_per_second.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
export function audio_envelopes_fit(envelope_left, envelope_right) {
  arguments_assert(arguments, 2);
  ("$plain envelope_left");
  ("$plain envelope_right");
  ("How well two loudness shapes agree, said in seconds rather than in readings: how closely they match at their best, how far into the longer one that match begins, and how much longer the longer one is.");
  ("★ IT DOES NOT MATTER WHICH WAY ROUND THE TWO ARE HANDED OVER, which is what makes this the one to call from a walk. A walk comparing every recording against every video does not know in advance which of a pair is longer - usually the video is, having had its lead-in cut, but a recording that was itself trimmed after its video was made is not - and a caller forced to decide would have to measure both before it could ask.");
  ("★ ONLY THE CLOSENESS DECIDES A PAIR, AND THE OFFSET BESIDE IT CONFIRMS NOTHING THOUGH IT WAS BUILT AS A SECOND TEST. Measured over fifteen hundred pairs of psalm recordings against psalm videos, the offset landed on the length difference in thirty-one of the thirty-six pairs reported, including every wrong one - a recording and a video of it end on the same last note, so flush endings win almost any comparison and the offset confirms nothing. Whether a given pair of numbers counts as a match is a threshold, and a threshold belongs to whoever is answerable for what is done with the answer.");
  ("The offset is said in seconds because that is the unit the thing it measures is already known in: it is the lead-in that was cut off the front of the video, which was chosen in seconds by a person.");
  let left_shorter_is = less_than(envelope_left.length, envelope_right.length);
  let envelope_short = left_shorter_is ? envelope_left : envelope_right;
  let envelope_long = left_shorter_is ? envelope_right : envelope_left;
  let best = audio_envelopes_offset_best(envelope_short, envelope_long);
  let per_second = audio_envelope_windows_per_second();
  let offset_seconds = divide(best.offset, per_second);
  let readings_gap = subtract(envelope_long.length, envelope_short.length);
  let gap_seconds = divide(readings_gap, per_second);
  let r = {
    fit: best.fit,
    offset_seconds: offset_seconds,
    gap_seconds: gap_seconds,
  };
  return r;
}
