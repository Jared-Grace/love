import { bible_interlinear_parsings_ranked } from "./bible_interlinear_parsings_ranked.mjs";
import { gloss_parsing_sentence } from "./gloss_parsing_sentence.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
export async function gloss_parsing_sentences_ranked(testament_name) {
  "Every spelled-out parsing one testament uses, commonest first, each beside the number of words carrying it and the plain English sentence composed for it.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to read and nothing that runs.";
  "This is how a composed sentence is read before it is believed. Composing one sentence proves the composer runs; composing every sentence the testament will ever ask for, in the order they are asked for, is what shows whether the sentences are worth reading - and a parsing standing on eleven thousand words is worth more reading than one standing on four.";
  "A sentence that came back empty is kept in place rather than dropped, because the row is the only thing that says which parsing went unsaid. A list of the sentences alone would be a list with no gaps in it, however many words got none.";
  let ranked = await bible_interlinear_parsings_ranked(testament_name);
  let rows = [];
  for (let row of ranked) {
    let parsing = property_get(row, "value");
    let sentence = gloss_parsing_sentence(parsing);
    property_set(row, "sentence", sentence);
    list_add(rows, row);
  }
  return rows;
}
