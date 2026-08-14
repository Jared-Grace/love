import { bible_interlinear_testament_words } from "./bible_interlinear_testament_words.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function bible_interlinear_parsings_list(testament_name) {
  "The spelled-out parsing of every word inside one testament, one entry per word and repeats kept, in the order the text runs.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to read and nothing that runs.";
  "The repeats are the whole value here. Anything asking what parsings there are wants to know which of them are worth handling as much as it wants to know that they exist, and only a list that kept its duplicates can answer both by being counted.";
  "One testament at a time, because the two are parsed in different languages by different hands: the Greek says Verb - Aorist Indicative Active and the Hebrew says something far longer, and one list would interleave two vocabularies that nothing will ever handle together.";
  "A word the table gives no parsing is left out rather than entered blank. It is a real gap in the source, and a blank counted alongside the rest would read as a parsing that says nothing.";
  let words = await bible_interlinear_testament_words(testament_name);
  let parsings = [];
  for (let word of words) {
    let parsing = property_get(word, "parsing_long");
    if (not(parsing)) {
      continue;
    }
    list_add(parsings, parsing);
  }
  return parsings;
}
