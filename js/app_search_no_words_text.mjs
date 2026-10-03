import { app_search_nothing_typed_is } from "./app_search_nothing_typed_is.mjs";
export function app_search_no_words_text(query) {
  "what to say when there is nothing to search for - either the box was empty, or everything in it was cut away as punctuation.";
  "The second case is the one worth saying out loud. The index is built from English bibles only and the word cutter keeps Latin letters only, so a reader typing Greek, Hebrew, Urdu, Chinese, Korean, Russian or Hindi hands over a whole sentence and it comes back as no words at all. Saying only that nothing was found would read as a claim about the Bible rather than about this search, so the limit is named as the search's own.";
  "Asked rather than told, like the message beside it: the reader is the one who knows what verse they are after.";
  let nothing_typed = app_search_nothing_typed_is(query);
  if (nothing_typed) {
    let empty =
      "There is nothing in the box yet. What words would you like to find in the Bible?";
    return empty;
  }
  let english =
    "This search looks for English words, and it found none in what you typed. Would searching in English find the verse you have in mind?";
  return english;
}
