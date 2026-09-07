import { app_ceb_bible_gloss_repairs_priced } from "./app_ceb_bible_gloss_repairs_priced.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { ebible_words_sightings } from "./ebible_words_sightings.mjs";
import { bible_words_slips } from "./bible_words_slips.mjs";
export async function app_ceb_bible_gloss_queue_slips() {
  "Which words in the Cebuano gloss queue are probably misprints in the translation rather than words needing an explanation.";
  "A repair is written against the word as the translation spells it, so a repair aimed at a misprint writes a settled explanation for something nobody meant to say - and settles it, which is worse than leaving it blank. These rows are the queue entries to take out rather than work through.";
  "Ten times commoner is what counts as a commoner neighbour here. That number is a starting place rather than a finding; ask the reading underneath for a different one when the shortlist reads wrong.";
  "Nothing is written and nothing is ruled. Each row carries the verse the word was first met in, because whether a spelling is a slip is a question about the sentence it stands in.";
  let priced = await app_ceb_bible_gloss_repairs_priced();
  let rows = property_get(priced, "priced");
  function row_word(row) {
    let word = property_get(row, "word");
    return word;
  }
  let words = list_map(rows, row_word);
  let folder = ebible_folder_cebuano();
  let sightings = await ebible_words_sightings(folder);
  let times = 10;
  let r = bible_words_slips(sightings, words, times);
  return r;
}
