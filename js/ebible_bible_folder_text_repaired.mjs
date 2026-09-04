import { ebible_bible_folder_repaired_is } from "./ebible_bible_folder_repaired_is.mjs";
import { urdu_text_repaired } from "./urdu_text_repaired.mjs";
export function ebible_bible_folder_text_repaired(bible_folder, text) {
  "$plain bible_folder";
  "One piece of a bible's writing with everything this repo knows to be wrong with THAT bible put right in it, and every other bible handed back exactly as it came.";
  "Which bible the words are from is the whole of the question. A repair is a claim about one publisher's file, never about a language and never about a script, so it has to be asked for by name; a repair let loose on whatever it happens to match is rewriting somebody else's scripture.";
  "That is not a caution about something that might happen. The Urdu repairs put the Arabic spelling of the name of God into the Urdu word for God, which is right for the Urdu bible and wrong for the Arabic one - and the Arabic bible in this archive writes that name in six hundred and thirty-seven of its chapters. Run over everything, the repair would quietly replace the name of God in an Arabic bible with a word that is not Arabic, and nothing anywhere would say so.";
  "The two readings of a chapter both come through here, so neither can drift from the other about which bibles get repaired.";
  "Which bibles those are is asked next door rather than compared here, because the change notice a reader is shown had its own copy of the same comparison. Doing the repair and telling the reader about it are the two halves of what the licence asks for, and two halves that each decide for themselves which bible they are about can be widened one at a time.";
  let repaired_is = ebible_bible_folder_repaired_is(bible_folder);
  if (repaired_is) {
    let repaired = urdu_text_repaired(text);
    return repaired;
  }
  return text;
}
