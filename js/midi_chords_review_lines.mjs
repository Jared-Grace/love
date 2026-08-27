import { equal } from "./equal.mjs";
export function midi_chords_review_lines(chosen) {
  "lists only the chords the chooser was not sure of so reviewing the whole song means reading these few lines";
  "the margin is how far ahead the chosen chord scored and a small margin is exactly what being unsure means here";
  let lines = [];
  let unsure = [];
  for (let one of chosen) {
    if (equal(one.settled, false)) {
      unsure.push(one);
    }
  }
  lines.push(
    unsure.length + " of " + chosen.length + " chords are worth a look:",
  );
  for (let one of unsure) {
    let place = "bar " + one.segment.bar + " beat " + one.segment.beat;
    let ahead = " ahead by " + one.margin.toFixed(2);
    lines.push(
      "  " +
        place +
        ": chose " +
        one.chord.name +
        " over " +
        one.instead +
        ahead,
    );
  }
  return lines;
}
