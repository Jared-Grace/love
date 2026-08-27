import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
export function midi_notes_parts_by_pitch(notes) {
  "splits one run of notes into a melody and a bass by asking of each note whether anything sounding at the same time lies below it or above it";
  "this is the fallback for a file that put both lines in one track and it is named as a guess in what it answers back";
  let melody = [];
  let bass = [];
  let inner = [];
  for (let note_one of notes) {
    let lowest = true;
    let highest = true;
    for (let other of notes) {
      let overlaps =
        less_than(other.start, note_one.end) &&
        greater_than(other.end, note_one.start);
      if (not_equal(other, note_one) && overlaps) {
        if (less_than(other.pitch, note_one.pitch)) {
          lowest = false;
        }
        if (greater_than(other.pitch, note_one.pitch)) {
          highest = false;
        }
      }
    }
    if (lowest && equal(highest, false)) {
      bass.push(note_one);
    } else if (highest) {
      melody.push(note_one);
    } else {
      inner.push(note_one);
    }
  }
  let r = {
    melody,
    bass,
    inner,
    split: "by pitch within one voice",
    melody_label: "upper notes",
    bass_label: "lower notes",
  };
  return r;
}
