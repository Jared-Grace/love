import { midi_notes_events } from "./midi_notes_events.mjs";
export function midi_chords_events(chosen, channel, lowest_pitch) {
  "sounds every chosen chord as a block of notes lasting exactly as long as the stretch it was chosen for";
  "all the notes of a chord are put inside one octave above the given lowest pitch which keeps the block low enough to sit under a sung line";
  let notes = [];
  for (let one of chosen) {
    for (let step of one.chord.steps) {
      notes.push({
        pitch: lowest_pitch + step,
        velocity: 70,
        start: one.segment.start,
        end: one.segment.end,
      });
    }
  }
  return midi_notes_events(notes, channel);
}
