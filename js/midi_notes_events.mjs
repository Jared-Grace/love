import { equal } from "./equal.mjs";
export function midi_notes_events(notes, channel) {
  "turns notes back into the pair of midi events that start them and stop them";
  "an ending carries a lower order number than a start so a note that ends where the next begins is written ending first";
  let events = [];
  for (let note_one of notes) {
    let velocity = equal(note_one.velocity, undefined) ? 80 : note_one.velocity;
    events.push({
      tick: note_one.start,
      order: 1,
      bytes: [144 + channel, note_one.pitch, velocity],
    });
    events.push({
      tick: note_one.end,
      order: 0,
      bytes: [128 + channel, note_one.pitch, 0],
    });
  }
  return events;
}
