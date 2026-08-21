import { ebible_readaloud_lines_bible_folders } from "./ebible_readaloud_lines_bible_folders.mjs";
import { ebible_bibles_measure_generic } from "./ebible_bibles_measure_generic.mjs";
import { ebible_verse_marks_displaced_bible } from "./ebible_verse_marks_displaced_bible.mjs";
export async function ebible_verse_marks_displaced_measure() {
  "Every bible whose pages are on this machine, measured for chapters carrying a verse mark whose id names a different verse from the one it prints.";
  "Swept whole rather than a language at a time, for the same reason the sweep for repeats is: nothing here has to be judged by somebody who can read the language. A mark disagreeing with its own id is wrong wherever it appears, so every answer this gives is already a finding, where a gap is only a candidate until it has been held against how many translations share it.";
  "This is the one of the three worth running first, and the marks it finds that neither collide nor skip are invisible to the other two.";
  "Every repeated id is one of these, because a repeat is what this fault leaves behind when the id it invents lands on one already used, and the colliding mark is by definition one printing something other than a plain number. So a sweep for repeats after this one has nothing of its own to say.";
  "A gap is not, and it was written here for a while that it was. Measured across the corpus, 1109 of the 1215 chapters missing a number carry no displaced id at all - the number is absent because the translation's editors left the verse out, or because the Greek it follows numbers differently, or for a reason nobody has looked at yet. A gap overlaps this fault, it is not contained by it.";
  let bible_folders = await ebible_readaloud_lines_bible_folders();
  let r = await ebible_bibles_measure_generic(
    bible_folders,
    ebible_verse_marks_displaced_bible,
  );
  return r;
}
