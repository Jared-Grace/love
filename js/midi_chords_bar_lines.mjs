import { not_equal } from "./not_equal.mjs";
export function midi_chords_bar_lines(chosen) {
  "writes the chosen chords out as one line per bar the way a chord chart is read";
  "a chord the chooser was not sure of is followed by the chord it nearly picked instead so the eye lands on what needs deciding";
  let lines = [];
  let bar_now = 0;
  let row = "";
  for (let one of chosen) {
    if (not_equal(one.segment.bar, bar_now)) {
      if (not_equal(row, "")) {
        lines.push(row);
      }
      bar_now = one.segment.bar;
      row = "bar " + bar_now + " |";
    }
    let doubt = one.settled ? "" : " (or " + one.instead + "?)";
    row = row + " " + one.name + doubt;
  }
  if (not_equal(row, "")) {
    lines.push(row);
  }
  return lines;
}
