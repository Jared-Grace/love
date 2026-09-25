import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_verse_numbers_generic } from "./gloss_explain_verse_numbers_generic.mjs";
import { text_number_to_words } from "./text_number_to_words.mjs";
export function gloss_explain_verse_numbers_english(explain, verse_numbers) {
  "The verses of its own chapter that one word explanation written in English names.";
  "English says verse fifteen rather than verse 15 in these stores, so the chapter's numbers are spelled into words and the words are what is looked for. Everything else about the reading is shared with every other language and is written once, next door.";
  "The words of distance are the ones English puts after a number to mean how far back rather than which one. The verse two back and verse two are the same three words with a fourth added, and only that fourth word says which of the two was meant.";
  "The shutters are the words English puts in front of the word for verse when what follows is not a label. The is the whole of the pointing half: measured across the original-language store on 2026-09-25, all nineteen places reading the verse and then a number named nothing - the verse two back, the verse three times, the verse one saying rather than two - while all five places reading that and then a number were real claims, so that is left out and a case holds it there. This is on the list for the same reason and the same evidence.";
  "The rest are words of unstated count - a few, several, many, some - because none of those can have a verse label behind it: nobody writes a few verses three and four. A stated count can: both verses eight and eleven is a real claim this store makes, so both, all, two and last are left out on purpose. Leaving a count unread costs one row in a list a person reads; reading a real claim as a count would drop it in silence, which is the dearer of the two mistakes.";
  arguments_assert(arguments, 2);
  let markers = ["verse", "verses"];
  let joiner = "and";
  let cancellers = ["back", "ago", "earlier", "later"];
  let shutters = ["the", "this", "few", "several", "many", "some"];
  let r = gloss_explain_verse_numbers_generic(
    explain,
    verse_numbers,
    markers,
    joiner,
    cancellers,
    text_number_to_words,
    shutters,
  );
  return r;
}
