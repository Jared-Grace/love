import { ebible_readaloud_lines_bible_folders } from "./ebible_readaloud_lines_bible_folders.mjs";
import { ebible_bibles_measure_generic } from "./ebible_bibles_measure_generic.mjs";
import { ebible_verse_marks_displaced_bible } from "./ebible_verse_marks_displaced_bible.mjs";
export async function ebible_verse_marks_displaced_measure() {
  "Every bible whose pages are on this machine, measured for chapters carrying a verse mark whose id names a different verse from the one it prints.";
  "Swept whole rather than a language at a time, for the same reason the sweep for repeats is: nothing here has to be judged by somebody who can read the language. A mark disagreeing with its own id is wrong wherever it appears, so every answer this gives is already a finding, where a gap is only a candidate until it has been held against how many translations share it.";
  "This is the one of the three worth running first. A repeat and a gap are each what this fault leaves behind when it happens to collide or happens to skip, so both are subsets of it, and the marks it finds that do neither are invisible to both.";
  let bible_folders = await ebible_readaloud_lines_bible_folders();
  let r = await ebible_bibles_measure_generic(
    bible_folders,
    ebible_verse_marks_displaced_bible,
  );
  return r;
}
