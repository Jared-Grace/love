export function ebible_readaloud_lines_path() {
  "Where the record of the reading-aloud measurement is kept.";
  "The measuring walks every chapter of every bible on this machine's disk and parses each one, which takes the better part of an hour and cannot be done by a gate. So the answer is written down once and the gate reads the writing.";
  let p = "data/ebible_readaloud_lines.json";
  return p;
}
