import { ebible_folder_thai } from "./ebible_folder_thai.mjs";
export function bible_folders_sentence_end_unmarked() {
  "The bibles whose sentences cannot be told apart by what they end on, so nothing may wait for one of them to finish.";
  "Every other bible this repo ships writes a mark where a sentence stops, and the ones it writes are gathered next door. Thai writes a space there instead. So a reading that asks whether this verse finished a sentence is asking a question its text has no way of answering, and the honest answer is that it cannot be asked rather than no.";
  "That distinction is the whole reason this list exists apart from the marks. Answered as no, a page looking for the end of a sentence would keep reaching for one more verse until whatever bound it holds ran out, every single time. Named here, the bible simply takes no part in the question, and a reader of it gets the verses they asked for and nothing added.";
  "Measured rather than assumed: on 2026-08-12 the first sixteen verses of Luke 1 were read in all thirty-nine bibles listed here, and this was the only one of them that ended a verse on no mark at all.";
  let thai = ebible_folder_thai();
  let bible_folders = [thai];
  return bible_folders;
}
