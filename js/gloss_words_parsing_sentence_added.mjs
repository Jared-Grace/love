import { gloss_parsing_sentence } from "./gloss_parsing_sentence.mjs";
import { list_map } from "./list_map.mjs";
import { null_is } from "./null_is.mjs";
import { objects_merge } from "./objects_merge.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_words_parsing_sentence_added(words) {
  "One verse's interlinear words, each given its spelled-out parsing already said as a plain English sentence.";
  "The sentence is handed over rather than composed by whoever is writing the explanation, for the same reason the parsing itself is: it is a fact about the word that the source already settled, so an author who is given it cannot contradict it, and one who is left to render it can. Turning the grammarians' shorthand into words a reader with no grammar has met is most of what an explanation of a form has to do, and it is the same work for every word carrying that form.";
  "A word whose parsing composes into nothing comes back exactly as it arrived, with no empty field standing in for the sentence it did not get. Nothing here decides that a parsing cannot be said - the composer refuses rather than leaving a hole, and a gate already fails on any parsing in the New Testament it refuses, so an absence seen here is a word the table gave no parsing at all.";
  function word_read(word) {
    let parsing_long = property_get(word, "parsing_long");
    let sentence = gloss_parsing_sentence(parsing_long);
    if (null_is(sentence)) {
      return word;
    }
    let said = {
      parsing_sentence: sentence,
    };
    let with_sentence = objects_merge([word, said]);
    return with_sentence;
  }
  let added = list_map(words, word_read);
  return added;
}
