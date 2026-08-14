import { bible_interlinear_parsings_list } from "./bible_interlinear_parsings_list.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function bible_interlinear_parsing_words_ranked(testament_name) {
  "Every separate word the interlinear's spelled-out parsings are built out of inside one testament, commonest first, each beside the number of words carrying it.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to count and nothing that runs.";
  "The parsings themselves run to hundreds, and writing a sentence for each of those hundreds would be writing the same phrase out over and over: the Greek ones are built by composition, a kind followed by the features it carries, so Noun - Genitive Masculine Singular shares three of its four parts with dozens of others. The parts are the real vocabulary, and there are few enough of them to be handled one at a time by a person.";
  "This is the list that says a table is finished. A phrase for every word here, and every parsing in the testament can be composed - because a parsing is nothing but these words in an order. A table written against the parsings instead would be finished only when someone had read all of them.";
  let parsings = await bible_interlinear_parsings_list(testament_name);
  let words = [];
  for (let parsing of parsings) {
    let parts = text_split_space(parsing);
    list_add_multiple(words, parts);
  }
  let ranked = list_tally_ranked(words);
  return ranked;
}
