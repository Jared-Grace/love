import { app_search_nothing_typed_is } from "./app_search_nothing_typed_is.mjs";
export function app_search_no_words_text(query) {
  "what to say when there is nothing to search for - either the box was empty, or everything in it was cut away as punctuation.";
  "The second case is the one worth saying out loud. Each chosen language cuts the query its own way, and English cuts away every letter outside the Latin alphabet, so a reader typing Chinese while only English is chosen hands over a whole sentence and it comes back as no words at all; choosing their language is then the way through. Saying only that nothing was found would read as a claim about the Bible rather than about this search, so the limit is named as the search's own.";
  "Asked rather than told, like the message beside it: the reader is the one who knows what verse they are after.";
  let nothing_typed = app_search_nothing_typed_is(query);
  if (nothing_typed) {
    let empty =
      "There is nothing in the box yet. What words would you like to find in the Bible?";
    return empty;
  }
  let english =
    "This search found no words it could look for in what you typed. Would choosing that language under Languages find the verse you have in mind?";
  return english;
}
