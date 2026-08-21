import { ebible_readaloud_lines_bible_folders } from "./ebible_readaloud_lines_bible_folders.mjs";
import { ebible_bibles_measure_generic } from "./ebible_bibles_measure_generic.mjs";
import { ebible_readaloud_lines_differ } from "./ebible_readaloud_lines_differ.mjs";
export async function ebible_readaloud_lines_measure() {
  "Every bible whose verses eBible's read-aloud edition cuts apart, measured for whether its chapters are written for reading aloud in as many lines as its pages mark verses.";
  "Each verse of a bible is now read as the line the reading-aloud text gives it, numbered by the mark its page carries. That only holds while the two counts agree. Where the lines outnumber the marks the reading falls off the end and says so; where the marks outnumber the lines the last verses of the chapter are quietly dropped instead, and nothing anywhere says a chapter came back short.";
  "A bible whose pages are not on this machine is named apart rather than counted as agreeing. Answering nothing for it would leave the record reading as though every bible had been looked at.";
  "Which bibles get walked is asked next door rather than worked out here, because what checks this record afterwards refuses it unless it names that same set. Two spellings of one list is how the gap this closes was opened in the first place.";
  let bible_folders = await ebible_readaloud_lines_bible_folders();
  let r = await ebible_bibles_measure_generic(
    bible_folders,
    ebible_readaloud_lines_differ,
  );
  return r;
}
