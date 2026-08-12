import { bible_interlinear_verses_upload_folder } from "./bible_interlinear_verses_upload_folder.mjs";
import { ebible_folder_thai } from "./ebible_folder_thai.mjs";
export function bible_folders_sentence_end_unmarked() {
  "The bibles whose sentences cannot be told apart by what they end on, so nothing may wait for one of them to finish.";
  "Every other bible this repo ships writes a mark where a sentence stops, and the ones it writes are gathered next door. Thai writes a space there instead. So a reading that asks whether this verse finished a sentence is asking a question its text has no way of answering, and the honest answer is that it cannot be asked rather than no.";
  "That distinction is the whole reason this list exists apart from the marks. Answered as no, a page looking for the end of a sentence would keep reaching for one more verse until whatever bound it holds ran out, every single time. Named here, the bible simply takes no part in the question, and a reader of it gets the verses they asked for and nothing added.";
  "The interlinear is here for a different reason and by the same rule. It is not a translation into a language that lost its punctuation; it is the Greek and Hebrew as they were written, and they were written without any. So a verse of it ends on a letter, always, and a page waiting for it to finish a sentence would wait until whatever bound it holds ran out.";
  "Measured rather than assumed, and by a command rather than by hand: what each of these ends on is written down beside them, and a bible added to the list without being measured turns a gate red. The first hand measurement got this wrong in both directions - it read Urdu under a folder name that does not exist and so filed a language that does mark its sentences as one that does not, and it never read the interlinear at all.";
  let thai = ebible_folder_thai();
  let original = bible_interlinear_verses_upload_folder();
  let bible_folders = [thai, original];
  return bible_folders;
}
