import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_common } from "./bible_words_common.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
export async function app_ceb_bible_gloss_vocabularies() {
  "The two vocabularies a Cebuano root is put to before anybody calls it foreign, read together and handed over as one thing: every word the Cebuano bible writes in small letters, as a set to ask membership of, and every word the dictionary on this disk has an entry for.";
  "Three readings each open with these same four lines in this same order, and each of them says in its own prose why there are two of them rather than one. The bible's own words are asked because a root that is a word of the language will normally stand somewhere in sixty-six books; the dictionary is asked because a bound root need never stand alone and the first test on its own would accuse it wrongly. An English pronoun is in neither, and that is the whole of what these two together can say.";
  ("★ THE PAIR IS HANDED OVER WHOLE AND THE TEST OVER IT IS ",
    fn_name("gloss_vocabularies_word_met_is"),
    ", WHICH IS WHERE THE TWO ARE PUT TOGETHER. A caller that pulls the halves out to ask them itself has taken the pair apart in order to rebuild the question, and the two readings that did that spelled the same four-line question in two different shapes - one as a pair of early returns, one as an or. Neither is wrong and their being different is the reason to name it once.");
  ("Reading is what happens here and nothing else. The dictionary is read off the disk and the bible is walked afresh, so this is not free and should be asked once at the top of a reading rather than inside a walk - which is what all three of the readings underneath it already did, for the plainer reason that a test inside a walk cannot ask a vocabulary that has not arrived yet.");
  ("Only the Cebuano bible is ever handed to this, and the name says so rather than taking a folder, because the dictionary half is Cebuano and could not be handed another language's words even if the bible half could. A second language would want its own pair, not an argument here.");
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_cebuano();
  let common = await bible_words_common(bible_folder);
  let written = list_unique_set(common);
  let known = await binisaya_words_known();
  let vocabularies = {
    written,
    known,
  };
  return vocabularies;
}
