export function bible_search_symbols_allowed() {
  "Every symbol that can stand inside a word of the search index. Anything else - a full stop, a comma, an apostrophe, a hyphen, a bracket - is a place where one word ends and the next begins.";
  "Named here rather than written where the index is built, because what a reader types has to be cut into words exactly the same way or a word that is in the index cannot be asked for. That was the fault this getter was pulled out to end: the index cut God's into god and s, while the search box threw the apostrophe away and asked for gods, which is in no verse at all.";
  let symbols =
    "01½¼23¾456789aAæÆbBcCdDeEéèëfFﬁﬂgGhHiIïjJkKlLmMnNoOöœpPqQrRsStTuUüvVʋwWxXyYzZΑΩ";
  return symbols;
}
