import { round } from "./round.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { midi_bytes_header } from "./midi_bytes_header.mjs";
import { midi_bytes_track_events } from "./midi_bytes_track_events.mjs";
import { midi_events_notes } from "./midi_events_notes.mjs";
export function midi_bytes_notes(bytes) {
  "reads a whole midi file and answers its timing plus one entry per track holding that track's name and its notes";
  "tempo and time signature are taken from wherever they are first said because a hymn states them once at the top";
  let header = midi_bytes_header(bytes);
  let at = 14;
  let tracks = [];
  let quarter_microseconds = 500000;
  let beats_per_bar = 4;
  let beat_unit = 4;
  let track_index = 0;
  while (less_than(track_index, header.tracks_count)) {
    let read = midi_bytes_track_events(bytes, at);
    at = read.offset_next;
    let track_name = "";
    for (let event_one of read.events) {
      if (not_equal(event_one.kind, "meta")) {
        continue;
      }
      if (equal(event_one.meta_type, 3) && equal(track_name, "")) {
        track_name = String.fromCharCode.apply(null, event_one.numbers);
      }
      if (equal(event_one.meta_type, 81)) {
        quarter_microseconds =
          multiply(event_one.numbers[0], 65536) +
          multiply(event_one.numbers[1], 256) +
          event_one.numbers[2];
      }
      if (equal(event_one.meta_type, 88)) {
        beats_per_bar = event_one.numbers[0];
        beat_unit = Math.pow(2, event_one.numbers[1]);
      }
    }
    tracks.push({
      index: track_index,
      name: track_name,
      notes: midi_events_notes(read.events),
    });
    track_index = track_index + 1;
  }
  let n = divide(60000000, quarter_microseconds);
  let beats_per_minute = round(n);
  let r = {
    division: header.division,
    beats_per_minute,
    beats_per_bar,
    beat_unit,
    tracks,
  };
  return r;
}
