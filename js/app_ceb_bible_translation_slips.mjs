import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { ebible_words_sightings } from "./ebible_words_sightings.mjs";
import { bible_words_slips_all } from "./bible_words_slips_all.mjs";
export async function app_ceb_bible_translation_slips() {
  "Every word in the whole Cebuano translation that looks like a misprint, not only the ones the gloss queue happened to ask about.";
  "The queue reading answers a question about the queue: of the words waiting for an explanation, which are not words. This answers the question underneath it - the translation itself has misprints in it, and most of them were never queued because nobody has glossed those verses yet. Of twenty thousand words about a thousand come back, and they are not a fringe: kinahanglan alone is misspelled six different ways, and miingon, kaugalingon, atubangan, kalibotan and sulugoon each have several.";
  "★ THIS PROPOSES AND NEVER RULES, AND ABOUT A SEVENTH OF WHAT IT NAMES IS GOOD CEBUANO. The language builds words by putting letters on, so kinahanglang stands one letter from kinahanglan and is perfectly correct, as are katawhang, atubangon and the spelling variant kalibutan. Whether telling those apart could be done from the spelling was measured and it cannot; what comes back is where to look, with the verse each word was first met in, for somebody who reads Cebuano to rule on.";
  "Ten times commoner, and eight letters at least. Both are a starting place rather than a finding: ten is what the queue reading uses, and eight is where one edit stops being a large share of the word. Asked from one letter up the same reading names three thousand seven hundred words headed by ka, na and pa, all of them ordinary and all of them standing beside sa. Ask the reading underneath for different numbers when these read wrong.";
  "A word the translation never writes cannot appear here however plainly it is a slip, because this walks the translation's own vocabulary. Words that reached the gloss store and not the text are the queue reading's business.";
  arguments_assert(arguments, 0);
  let folder = ebible_folder_cebuano();
  let sightings = await ebible_words_sightings(folder);
  let times = 10;
  let letters = 8;
  let r = bible_words_slips_all(sightings, times, letters);
  return r;
}
