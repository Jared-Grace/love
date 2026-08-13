import { functions_searches_found_shown } from "./functions_searches_found_shown.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
export async function functions_search_any_word(searches_comma) {
  "What this repo calls things, asked several words at once - one answer per word, under the word that found it.";
  "Searching names is a guessing game and the guess is usually wrong the first time, which is why the advice for an empty answer is to suspect the words rather than the repo. Asked one word per command that advice costs a command per guess: the log has this run three hundred and ten times in a row over the life of the repo, once forty-nine deep, for eight hundred commands that said nothing.";
  "The answers are kept under the word that found them rather than handed back in a row, because the whole point of asking several is to see which word the repo answers to. A row of maps says that only by counting, and a count is read wrong the moment anybody adds a word in the middle. Each answer now says its own count and shows a screenful, so the words can be compared by reading rather than by counting at all.";
  let searches = text_split_comma(searches_comma);
  let found = await functions_searches_found_shown(searches);
  return found;
}
