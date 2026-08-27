import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
export function midi_line_notes(pitches, channel, ticks_each) {
  "turns a plain run of pitches into notes each lasting the same time and each starting where the one before it ended";
  "this is how a written out line becomes something the chord work can read without a midi file being involved at all";
  let notes = [];
  for (let index = 0; less_than(index, pitches.length); index++) {
    notes.push({
      channel,
      pitch: pitches[index],
      velocity: 80,
      start: multiply(index, ticks_each),
      end: multiply(index + 1, ticks_each),
    });
  }
  return notes;
}
