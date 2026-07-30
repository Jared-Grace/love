import { text_split_comma } from "./text_split_comma.mjs";
import { functions_search } from "./functions_search.mjs";
import { property_set } from "./property_set.mjs";
export async function functions_search_any_word_probe(searches_comma) {
  "What this repo calls things, asked several words at once - one answer per word, under the word that found it.";
  "Searching names is a guessing game and the guess is usually wrong the first time, which is why the advice for an empty answer is to suspect the words rather than the repo. Asked one word per command that advice costs a command per guess: the log has this run three hundred and ten times in a row over the life of the repo, once forty-nine deep, for eight hundred commands that said nothing.";
  "The answers are kept under the word that found them rather than handed back in a row, because the whole point of asking several is to see which word the repo answers to. A row of maps says that only by counting, and a count is read wrong the moment anybody adds a word in the middle.";
  let searches = text_split_comma(searches_comma);
  let found = {};
  for (let search of searches) {
    let names = await functions_search(search);
    property_set(found, search, names);
  }
  return found;
}
