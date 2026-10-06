import { fn_name } from "./fn_name.mjs";
export function bible_search_symbols_allowed() {
  "Every symbol that can stand inside a word of the English search index. Anything else - a full stop, a comma, an apostrophe, a hyphen, a bracket - is a place where one word ends and the next begins.";
  "Named here rather than written where the index is built, because what a reader types has to be cut into words exactly the same way or a word that is in the index cannot be asked for. That was the fault this getter was pulled out to end: the index cut God's into god and s, while the search box threw the apostrophe away and asked for gods, which is in no verse at all.";
  ("ENGLISH ONLY, AND THE MISSING SPANISH VOWELS ARE NOT A GAP. ",
    fn_name("app_search_language_words"),
    " sends English through here and every other language through ",
    fn_name("text_search_words"),
    ", which ignores accents on both sides at once, so a Spanish reader asking for corazon reaches corazón perfectly and never touches this list. Read on its own this list looks as though it were starving the other languages of their own letters - it was read that way, and the repair proposed was to add them. That repair would have broken the one language this does govern: the English index on the far end was cut by this very list, so widening it here would have the box asking for words that index never wrote. ");
  ("THE LIST CAN ONLY EVER CHANGE WITH THE INDEX, NEVER BEFORE IT. Anything added here is a word boundary that stops being one, which re-cuts every English verse - so the English index has to be built again and sent up before a reader is allowed to type the new letter. On its own this is not an improvement that happens to need a rebuild; it is a rebuild wearing one line of diff.");
  let symbols =
    "01½¼23¾456789aAæÆbBcCdDeEéèëfFﬁﬂgGhHiIïjJkKlLmMnNoOöœpPqQrRsStTuUüvVʋwWxXyYzZΑΩ";
  return symbols;
}
