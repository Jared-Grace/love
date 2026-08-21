import { ebible_readaloud_lines_bible_folders } from "./ebible_readaloud_lines_bible_folders.mjs";
import { ebible_bibles_measure_generic } from "./ebible_bibles_measure_generic.mjs";
import { ebible_verse_marks_repeated_bible } from "./ebible_verse_marks_repeated_bible.mjs";
export async function ebible_verse_marks_repeated_measure() {
  "Every bible whose pages are on this machine, measured for chapters whose pages mark a verse number more than once.";
  "Swept whole rather than a language at a time, and the twin for gaps is not: a gap needs holding against every other translation before it means anything, so its English sweep exists to be judged one chapter at a time by somebody who can read them. A repeat needs no such judging. Two marks wearing one address is wrong in every language, so the whole corpus can be asked at once and every answer it gives is already a finding.";
  let bible_folders = await ebible_readaloud_lines_bible_folders();
  let r = await ebible_bibles_measure_generic(
    bible_folders,
    ebible_verse_marks_repeated_bible,
  );
  return r;
}
