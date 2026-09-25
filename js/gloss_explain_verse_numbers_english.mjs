import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_verse_numbers_generic } from "./gloss_explain_verse_numbers_generic.mjs";
import { text_number_to_words } from "./text_number_to_words.mjs";
export function gloss_explain_verse_numbers_english(explain, verse_numbers) {
  "The verses of its own chapter that one word explanation written in English names.";
  "English says verse fifteen rather than verse 15 in these stores, so the chapter's numbers are spelled into words and the words are what is looked for. Everything else about the reading is shared with every other language and is written once, next door.";
  "The words of distance are the ones English puts after a number to mean how far back rather than which one. The verse two back and verse two are the same three words with a fourth added, and only that fourth word says which of the two was meant.";
  "The words of count are the ones English puts before the word for verse to say how many rather than which. Within a few verses two hands take hold of him counts verses and then starts a new phrase; in verses two the word stands again names one. Only words of unstated count are listed - a few, several, many, some - because none of those can have a verse label behind it: nobody writes a few verses three and four. A definite count can: both verses eight and eleven is a real claim this store makes, the two verses three and four is sayable, and the last verses one and two is sayable, so both, all, the, two and last are left out on purpose. Leaving a count unread costs one row in a list a person reads; reading a real claim as a count would drop it in silence, which is the dearer of the two mistakes.";
  arguments_assert(arguments, 2);
  let markers = ["verse", "verses"];
  let joiner = "and";
  let distances = ["back", "ago", "earlier", "later"];
  let counters = ["few", "several", "many", "some"];
  let r = gloss_explain_verse_numbers_generic(
    explain,
    verse_numbers,
    markers,
    joiner,
    distances,
    text_number_to_words,
    counters,
  );
  return r;
}
