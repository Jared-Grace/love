import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
export function midi_events_notes(events) {
  "pairs every note on with the note off that ends it and answers whole notes carrying a start tick and an end tick";
  "a pitch struck again before the first one lets go is normal so each pitch keeps a queue and the oldest one is closed first";
  let sounding_by_voice = new Map();
  let notes_found = [];
  for (let event_one of events) {
    let voice_key = multiply(event_one.channel, 128) + event_one.pitch;
    if (equal(event_one.kind, "note_on")) {
      let left2 = sounding_by_voice.has(voice_key);
      if (equal(left2, false)) {
        sounding_by_voice.set(voice_key, []);
      }
      sounding_by_voice.get(voice_key).push(event_one);
    }
    if (equal(event_one.kind, "note_off")) {
      let waiting_list = sounding_by_voice.get(voice_key);
      if (
        not_equal(waiting_list, undefined) &&
        greater_than(waiting_list.length, 0)
      ) {
        let note_began = waiting_list.shift();
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
  function lambda(left, right) {
    if (not_equal(left.start, right.start)) {
      let difference = subtract(left.start, right.start);
      return difference;
    }
    let difference2 = subtract(left.pitch, right.pitch);
    return difference2;
  }
  notes_found.sort(lambda);
  return notes_found;
}
