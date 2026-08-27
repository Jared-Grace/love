import { math_max } from "./math_max.mjs";
import { floor } from "./floor.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { modulo } from "./modulo.mjs";
import { midi_song_bar_ticks } from "./midi_song_bar_ticks.mjs";
import { midi_notes_stepwise_marked } from "./midi_notes_stepwise_marked.mjs";
import { midi_notes_sounding_between } from "./midi_notes_sounding_between.mjs";
export function midi_notes_chord_segments(parts, song) {
  "cuts the song into one stretch per bass move because a hymn holds one chord for as long as its bass note holds";
  "each stretch carries the bass note under it and every melody note sounding over it which together are what a chord is chosen from";
  let bars = midi_song_bar_ticks(song);
  let lowest_at = new Map();
  let last_end = 0;
  for (let note_one of parts.bass.concat(parts.melody, parts.inner)) {
    last_end = math_max(last_end, note_one.end);
  }
  for (let note_one of parts.bass) {
    let held = lowest_at.get(note_one.start);
    if (equal(held, undefined) || less_than(note_one.pitch, held.pitch)) {
      lowest_at.set(note_one.start, note_one);
    }
  }
  let v = lowest_at.keys();
  let onsets = Array.from(v);
  function ticks_earliest_first(one, two) {
    let difference = subtract(one, two);
    return difference;
  }
  onsets.sort(ticks_earliest_first);
  let tune = midi_notes_stepwise_marked(parts.melody);
  let segments = [];
  for (let index = 0; less_than(index, onsets.length); index++) {
    let start = onsets[index];
    let end = less_than(index + 1, onsets.length)
      ? onsets[index + 1]
      : last_end;
    let sung = midi_notes_sounding_between(
      tune,
      start,
      end,
      bars.ticks_per_beat,
      1,
    );
    let held = midi_notes_sounding_between(
      parts.inner,
      start,
      end,
      bars.ticks_per_beat,
      0.6,
    );
    let p = divide(start, bars.ticks_per_bar);
    let bar = floor(p) + 1;
    let top = modulo(start, bars.ticks_per_bar);
    let beat = divide(top, bars.ticks_per_beat) + 1;
    let left = modulo(start, bars.ticks_per_bar);
    let downbeat = equal(left, 0);
    let bass_pitch = lowest_at.get(start).pitch;
    let top2 = subtract(end, start);
    let beats = divide(top2, bars.ticks_per_beat);
    segments.push({
      start,
      end,
      bar,
      beat,
      downbeat,
      bass_pitch,
      beats,
      sounding: sung.concat(held),
    });
  }
  return segments;
}
