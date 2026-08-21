import { ebible_readaloud_lines_bible_folders } from "./ebible_readaloud_lines_bible_folders.mjs";
import { ebible_bibles_measure_generic } from "./ebible_bibles_measure_generic.mjs";
import { ebible_verse_marks_gaps_bible } from "./ebible_verse_marks_gaps_bible.mjs";
export async function ebible_verse_marks_gaps_measure() {
  "Every bible whose pages are on this machine, measured for chapters whose pages skip a verse number between the first mark and the last.";
  "The English twin beside this one is for gaps somebody here can read and judge one at a time. This one is for the rest, and almost all of the rest, because the reading that judges a gap turns out not to need the language: a gap the same in five translations is their shared tradition rather than anybody's mistake, and a gap one translation makes alone is usually explained by a note the page carries at the very place it happens. Both of those are read off the structure of the file.";
  "Counted as a whole so that the sharing can be seen at all. A gap means almost nothing on its own and a great deal held against the same gap in every other translation, so measuring one bible and stopping tells you the least useful version of the answer.";
  let bible_folders = await ebible_readaloud_lines_bible_folders();
  let r = await ebible_bibles_measure_generic(
    bible_folders,
    ebible_verse_marks_gaps_bible,
  );
  return r;
}
