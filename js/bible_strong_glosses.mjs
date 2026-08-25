import { fn_name } from "./fn_name.mjs";
import { bible_interlinear_testament_words } from "./bible_interlinear_testament_words.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function bible_strong_glosses(testament_name) {
  "Every English wording the interlinear gives each Strong's number inside one testament, keyed by the number, commonest wording first and counted.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to read and nothing that runs.";
  "This is where a word's plain English name comes from without anybody asserting one. The interlinear says what each word means in the place it stands, so the same number gathers hundreds of those sayings across a testament, and the wording that keeps coming back is the word itself rather than one place's turn of phrase. It is measured from the text rather than taken from a dictionary, which means it can be pointed at.";
  "The counts stay because the commonest wording is not always the honest one. A number whose top wording covers nearly all its places has one plain meaning; a number split evenly between three wordings does not, and a sentence naming only the first would be hiding the split rather than reporting it.";
  "A word the interlinear leaves unglossed is passed over, and so is every filler the tables print where no English of the word itself can be pointed at. Counting one would put a wording in the running that says nothing.";
  ("WHICH WORDINGS THOSE ARE IS NOT DECIDED HERE AND USED TO BE HALF-DECIDED HERE. This walk knew two of the four - the blank row and the bare dash - and had never heard of the row of dots or of vvv, the mark the tables print where a word's English has been pulled into a neighbouring row. So vvv came back as the commonest meaning of out of, in, and he: a mark meaning the English is elsewhere, counted as though it were the English. ",
    fn_name("bible_glyph_gloss_placeholder_is"),
    " has held all four in one place since it was widened, and its own prose named this survey as one of the three readings the widening moves. It moves it now.");
  let words = await bible_interlinear_testament_words(testament_name);
  let collected = {};
  for (let word of words) {
    let strong = property_get(word, "strong");
    if (not(strong)) {
      continue;
    }
    let gloss = property_get(word, "gloss");
    if (not(gloss)) {
      continue;
    }
    let filler = bible_glyph_gloss_placeholder_is(gloss);
    if (filler) {
      continue;
    }
    let started = property_exists(collected, strong);
    if (not(started)) {
      property_set(collected, strong, []);
    }
    let gathered = property_get(collected, strong);
    list_add(gathered, gloss);
  }
  let ranked = {};
  for (let strong of object_property_names(collected)) {
    let gathered = property_get(collected, strong);
    let tally = list_tally_ranked(gathered);
    property_set(ranked, strong, tally);
  }
  return ranked;
}
