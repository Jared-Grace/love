import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export function midi_chords_held(chosen) {
  "joins a run of neighbouring stretches that all chose the same chord into one chord held across the lot";
  "a chord is chosen under every bass move, so a bass that walks about underneath one unchanging chord produces the same name four times over, and reading it four times is reading three things that were never decisions";
  "a chord carried over a bar line is not joined to what it carried into, because a chord chart is read a bar at a time and a bar whose row began with a chord that started somewhere earlier would be read as starting on the chord after it";
  "the doubt is kept rather than averaged away: the joined chord carries the narrowest margin of the run and is unsure if any part of the run was unsure, because a person reviewing needs to see the weakest ground the chord ever stood on";
  let held = [];
  for (let one of chosen) {
    let last = held[subtract(held.length, 1)];
    let same =
      not_equal(last, undefined) &&
      equal(last.chord.name, one.chord.name) &&
      equal(last.segment.bar, one.segment.bar);
    if (same) {
      last.segment.end = one.segment.end;
      last.segment.beats = last.segment.beats + one.segment.beats;
      if (less_than(one.margin, last.margin)) {
        last.margin = one.margin;
        last.settled = one.settled;
        last.instead = one.instead;
      }
      continue;
    }
    held.push({
      segment: {
        start: one.segment.start,
        end: one.segment.end,
        bar: one.segment.bar,
        beat: one.segment.beat,
        downbeat: one.segment.downbeat,
        bass_pitch: one.segment.bass_pitch,
        beats: one.segment.beats,
        sounding: one.segment.sounding,
      },
      chord: one.chord,
      score: one.score,
      margin: one.margin,
      settled: one.settled,
      instead: one.instead,
    });
  }
  return held;
}
