import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_verse_numbers_generic } from "./gloss_explain_verse_numbers_generic.mjs";
import { text_digits_urdu } from "./text_digits_urdu.mjs";
export function gloss_explain_verse_numbers_urdu(explain, verse_numbers) {
  "The verses of its own chapter that one word explanation written in Urdu names.";
  "AN URDU EXPLANATION SAYS آیت ۲۱ AND NEVER VERSE TWENTY-ONE, so the English reading run over this store finds nothing at all and reports no wrong claims - which reads exactly like a store with nothing wrong in it. Measured on 2026-09-25, this store said آیت twenty-four thousand four hundred and forty-nine times and put a number straight after it fourteen thousand three hundred and twenty times, and not one of those was being looked at.";
  "The numbers are written with Urdu's own ten shapes, which share not one character with the English ten, so the chapter's numbers are written out that way and those are what is looked for. Everything else about the reading is shared with every other language and is written once, next door.";
  "Four spellings of the word for verse are looked for. The store writes آیت almost always, and the plural and the marked spelling a handful of times each; a reading that knew only the common one would be silently blind to the rest. The joining word is spelled with the mark above it, as this store spells it, because a joiner spelled without one would simply never be met.";
  "No word of distance is looked for. English puts one after the number - the verse two back - and Urdu counts backwards the other way round, before the number rather than after it, where a number is not being read as a verse in the first place. A word listed here that the store never writes would only be a word that can never fire, and listing one this store does write is a thing to do when a reading of it shows one.";
  "No word of count is looked for either, and for the same reason. English needs them because a few verses two hands reads exactly like in verses two; the Urdu numbers are the ten Urdu shapes, and a sentence counting verses in Urdu spells the count in words rather than in those shapes, so the reading never opens on it. A word belongs on this list when a reading of this store shows one, not before.";
  arguments_assert(arguments, 2);
  let markers = ["آیت", "آیَت", "آیتیں", "آیتوں"];
  let joiner = "اَور";
  let distances = [];
  let counters = [];
  let r = gloss_explain_verse_numbers_generic(
    explain,
    verse_numbers,
    markers,
    joiner,
    distances,
    text_digits_urdu,
    counters,
  );
  return r;
}
