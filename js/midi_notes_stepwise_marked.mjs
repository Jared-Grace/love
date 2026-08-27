import { abs } from "./abs.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function midi_notes_stepwise_marked(notes) {
  "puts a run of notes in time order and marks each one that is reached by a step and left by a step";
  "a note marked that way is passing through rather than being leant on so a scorer may forgive it for not belonging to the chord";
  let ordered = notes.slice();
  function notes_earliest_first(one, two) {
    let difference = subtract(one.start, two.start);
    return difference;
  }
  ordered.sort(notes_earliest_first);
  let marked = [];
  for (let index = 0; less_than(index, ordered.length); index++) {
    let note_one = ordered[index];
    let before = greater_than(index, 0)
      ? ordered[subtract(index, 1)].pitch
      : note_one.pitch;
    let after = less_than(index + 1, ordered.length)
      ? ordered[index + 1].pitch
      : note_one.pitch;
    let n = subtract(note_one.pitch, before);
    let a = abs(n);
    let reached = less_than_equal(a, 2);
    let n2 = subtract(after, note_one.pitch);
    let a2 = abs(n2);
    let left = less_than_equal(a2, 2);
    let stepwise = reached && left;
    marked.push({
      pitch: note_one.pitch,
      start: note_one.start,
      end: note_one.end,
      stepwise,
    });
  }
  return marked;
}
