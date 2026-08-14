import { bible_sentence_end_sample_chapter } from "./bible_sentence_end_sample_chapter.mjs";
export function bible_sentence_gaps_sample_chapters() {
  "Which chapters to read when measuring how far a passage gets carried on past where the counting stopped.";
  "The list is deliberately half narrative and half letter, because sentence length is a matter of who was writing. A gospel is mostly a sentence to a verse; Paul opens a letter with a single sentence that runs the length of a paragraph, and Ephesians 1 is the extreme case of it. A sample of narrative alone would say the carrying is almost never more than a verse, and the readers who most need the warning are exactly the ones it would have been measured away from.";
  "Genesis and a psalm are here for the two other shapes a bible comes in - a chapter of plain narrative and one of poetry cut line by line.";
  let c = [
    "GEN01",
    "PSA119",
    "MAT05",
    bible_sentence_end_sample_chapter(),
    "JHN01",
    "ROM01",
    "EPH01",
    "COL01",
    "HEB01",
    "1PE01",
  ];
  return c;
}
