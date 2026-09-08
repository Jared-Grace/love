import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { app_ceb_bible_gloss_passages_respell_refused_each } from "./app_ceb_bible_gloss_passages_respell_refused_each.mjs";
import { property_get } from "./property_get.mjs";
export async function app_ceb_bible_gloss_passages_respell_refused() {
  "The passages in the Cebuano gloss store that the respell walks past without correcting anything, because the words its explanations name do not come to the same number as the words in the passage.";
  "★ THE REFUSAL IS SILENT AND IS MEANT TO BE, WHICH IS WHY IT HAS TO BE COUNTED FROM OUTSIDE. The respell answers with the spellings it changed, so a passage it declines and a passage that needed nothing look identical from the outside - both contribute nothing to the list. Its own prose gives the reason and it is a good one: where a word was never explained at all, every explanation after it is about a different word, and writing the passage's spellings over them would paint the fault over rather than mend it. What nobody could see until now is how much of the store that leaves untouched.";
  "This changes nothing. The chapters are read and the counts compared exactly as the respell compares them, and no file is written.";
  "A high number here is not by itself a fault in the store. It says that many passages have a gap between what the passage says and what was explained, and the respell is right to leave those alone; it is the size of the set that a person has to decide about.";
  "The walk is the shared one, and this is the shorter of the two readings standing on it: it takes the sizes of the two lists it is handed and keeps nothing else, where the reading beside it takes the words.";
  arguments_assert(arguments, 0);
  let refused = [];
  function refused_read(chapter_code, explained, written) {
    let row = {
      chapter_code: chapter_code,
      named: list_size(explained),
      written: list_size(written),
    };
    list_add(refused, row);
  }
  let walked =
    await app_ceb_bible_gloss_passages_respell_refused_each(refused_read);
  let r = {
    chapters: property_get(walked, "chapters"),
    passages: property_get(walked, "passages"),
    refused: list_size(refused),
    rows: refused,
  };
  return r;
}
