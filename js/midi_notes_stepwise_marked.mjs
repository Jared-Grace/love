import { abs } from "./abs.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function midi_notes_stepwise_marked(notes) {
  "puts a run of notes in time order and marks each one that is reached by a step and left by a step";
  "a note marked that way is passing through rather than being leant on, so a scorer may take it as saying little about which chord is underneath";
  "a note that repeats the one before it is not marked, even though nothing moved: a note held over from the chord before is the one thing a suspension is made of, so counting it as passing would forgive the very note that names the chord";
  "the first note and the last note are marked by what stands beside them alone, since there is nothing on the other side to be reached from or left for";
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
    let came = abs(n);
    let n2 = subtract(after, note_one.pitch);
    let went = abs(n2);
    let reached = greater_than(came, 0) && less_than_equal(came, 2);
    let left = greater_than(went, 0) && less_than_equal(went, 2);
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
