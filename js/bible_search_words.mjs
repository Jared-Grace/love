export function bible_search_words(text) {
  "The words one run of text is known by in the search index, each named once.";
  "This is the one place that decides where a word begins and ends, and both sides of a search go through it - the verses as the index is built, and whatever the reader types into the box. Two readings of that had drifted apart and neither said so: the index cut on every symbol it did not allow, so God's became god and s, while the box only threw those symbols away and asked for gods. Every word carrying an apostrophe, a hyphen or a digit was in the index and unreachable.";
  "Nothing normalized and nothing expanded here - a word comes back spelled as it was written, only lowercased. What each side does with these words afterwards differs, and that is the part that stays apart.";
  let symbols = bible_search_symbols_allowed();
  let replaced = text_only_or_space(text, symbols);
  let normalized = whitespace_normalize(replaced);
  let lower = text_lower_to(normalized);
  let split = text_split_space(lower);
  ("text with nothing allowed left in it normalizes to nothing, and splitting nothing hands back one empty word, which no verse can hold and which would report every search it joined as missing a word");
  let worded = list_filter_text_empty_not_is(split);
  let words = list_unique(worded);
  return words;
}
