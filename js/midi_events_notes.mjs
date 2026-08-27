import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
export function midi_events_notes(events) {
  "pairs every note on with the note off that ends it and answers whole notes carrying a start tick and an end tick";
  "a second note on for a pitch that is already sounding is passed over rather than remembered, because a player striking the same key again lets go of it first, so two opens standing at once means the same line was written into the file twice";
  "keeping a queue of them instead was tried against a real ardour export and it paired a note on from one copy of the line with a note off from the other, which invented notes over a hundred beats long in the middle of a vocal part and dragged every chord under them out of shape";
  let sounding_by_voice = new Map();
  let notes_found = [];
  for (let event_one of events) {
    let voice_key = multiply(event_one.channel, 128) + event_one.pitch;
    if (equal(event_one.kind, "note_on")) {
      let left2 = sounding_by_voice.has(voice_key);
      if (equal(left2, false)) {
        sounding_by_voice.set(voice_key, event_one);
      }
    }
    if (equal(event_one.kind, "note_off")) {
      let note_began = sounding_by_voice.get(voice_key);
      if (not_equal(note_began, undefined)) {
        sounding_by_voice.delete(voice_key);
        notes_found.push({
          channel: event_one.channel,
          pitch: event_one.pitch,
          velocity: note_began.velocity,
          start: note_began.tick,
          end: event_one.tick,
        });
      }
    }
  }
  function notes_earliest_then_lowest(left, right) {
    if (not_equal(left.start, right.start)) {
      let difference = subtract(left.start, right.start);
      return difference;
    }
    let difference2 = subtract(left.pitch, right.pitch);
    return difference2;
  }
  notes_found.sort(notes_earliest_then_lowest);
  return notes_found;
}
