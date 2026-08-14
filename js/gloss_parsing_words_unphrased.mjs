import { bible_interlinear_parsing_words_ranked } from "./bible_interlinear_parsing_words_ranked.mjs";
import { gloss_parsing_phrases } from "./gloss_parsing_phrases.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function gloss_parsing_words_unphrased(testament_name) {
  "Every word the interlinear's parsings are built out of, inside one testament, that the phrase table has no entry for - commonest first, and nothing when the table covers them all.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to count and nothing that runs.";
  "The table it checks is a hand-written list and the text is not, so the two drift in exactly one direction: a word appears in the text that nobody wrote a phrase for. Nothing about composing a sentence would fail loudly when that happens - the word would simply go unsaid, and the sentence would read as though the parsing had never carried it.";
  "It comes back commonest first because that is the order the holes are worth filling in, and with the counts because a word standing once is a different decision from a word standing eleven thousand times.";
  let ranked = await bible_interlinear_parsing_words_ranked(testament_name);
  let phrases = gloss_parsing_phrases();
  let unphrased = [];
  for (let row of ranked) {
    let word = property_get(row, "value");
    let found = list_find_property(phrases, "word", word);
    if (not(found)) {
      list_add(unphrased, row);
    }
  }
  return unphrased;
}
