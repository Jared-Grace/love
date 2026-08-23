import { arguments_assert } from "./arguments_assert.mjs";
import { bible_versions_english_choices_references } from "./bible_versions_english_choices_references.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { song_god_our_savior_references } from "./song_god_our_savior_references.mjs";
import { wordings_distinct } from "./wordings_distinct.mjs";
export async function song_god_our_savior_wordings() {
  arguments_assert(arguments, 0);
  ("Every passage this song rests on, each against the wordings that are really on offer for it - each set of words once, and the translations that use exactly those words.");
  ("IT IS THE READING LIST FOR CHOOSING WHICH TRANSLATION EACH LINE QUOTES. The page shows one translation per passage, and which one is a judgement somebody has to make by reading; this is what there is to read, gathered in one pass instead of a hundred lookups.");
  ("IT FINDS ITS OWN SET rather than being handed a list of passages. The song's passages are already written down beside its lines, so a list typed here could fall behind them - a line gaining a passage would leave that passage uncompared, with nothing anywhere saying so.");
  ("How many translations carried each passage is counted as well, because a passage with fewer options usually has a reason - two of the translations hold fifty-six books of the sixty-six, so anything in Isaiah, Jeremiah, Ezekiel, Daniel, Numbers, Chronicles, Amos or Zechariah is read without them. A count that has quietly dropped says so where a list of wordings alone would not.");
  let references = song_god_our_savior_references();
  let passages = await bible_versions_english_choices_references(references);
  function collapsed(passage) {
    let reference = property_get(passage, "reference");
    let wordings = property_get(passage, "wordings");
    let versions = list_size(wordings);
    let distinct = wordings_distinct(wordings);
    let v = {
      reference,
      versions,
      distinct,
    };
    return v;
  }
  let compared = list_map(passages, collapsed);
  return compared;
}
