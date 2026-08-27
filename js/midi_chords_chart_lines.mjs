import { midi_chords_bar_lines } from "./midi_chords_bar_lines.mjs";
import { midi_chords_review_lines } from "./midi_chords_review_lines.mjs";
export function midi_chords_chart_lines(chosen, key, parts) {
  "writes the whole chord chart a person reads which is what the key was taken to be how the voices were told apart the bars and then what to review";
  "how the voices were told apart is said out loud because everything after it is wrong if the bass line was not the line the tool took for the bass";
  let head = [
    "key: " + key.name,
    "the melody is " +
      parts.melody_label +
      " and the bass is " +
      parts.bass_label +
      ", told apart " +
      parts.split,
    "",
  ];
  let lines = midi_chords_bar_lines(chosen);
  let lines2 = midi_chords_review_lines(chosen);
  let r = head.concat(lines, [""], lines2);
  return r;
}
