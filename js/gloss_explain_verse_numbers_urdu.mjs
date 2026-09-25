import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_verse_numbers_generic } from "./gloss_explain_verse_numbers_generic.mjs";
import { text_digits_urdu } from "./text_digits_urdu.mjs";
export function gloss_explain_verse_numbers_urdu(explain, verse_numbers) {
  "The verses of its own chapter that one word explanation written in Urdu names.";
  "AN URDU EXPLANATION SAYS آیت ۲۱ AND NEVER VERSE TWENTY-ONE, so the English reading run over this store finds nothing at all and reports no wrong claims - which reads exactly like a store with nothing wrong in it. Measured on 2026-09-25, this store said آیت twenty-four thousand four hundred and forty-nine times and put a number straight after it fourteen thousand three hundred and twenty times, and not one of those was being looked at.";
  "The numbers are written with Urdu's own ten shapes, which share not one character with the English ten, so the chapter's numbers are written out that way and those are what is looked for. Everything else about the reading is shared with every other language and is written once, next door.";
  "Four spellings of the word for verse are looked for. The store writes آیت almost always, and the plural and the marked spelling a handful of times each; a reading that knew only the common one would be silently blind to the rest. The joining word is spelled with the mark above it, as this store spells it, because a joiner spelled without one would simply never be met.";
  "URDU'S LITTLE WORD FOR OF, STANDING RIGHT BEHIND THE NUMBER, TURNS THE VERSE INTO AN OWNER RATHER THAN AN ADDRESS, and that is what cancels a claim in this language. کے, کا and کی are the three shapes it takes, and behind one of them comes the thing that verse owns - almost always an English word quoted in its own letters. آیت ۲ کے 'This' says the word This stands in verse two; it says nothing whatever about the word the sentence is explaining.";
  "THE SHAPE OF A REAL CLAIM IN THIS STORE IS THE OTHER ONE: آیت ۲۱ میں آیا, came in verse twenty-one, with میں rather than a word of owning. All three claims already known to be wrong here are written that way - وُہی جوڑنے والا لفظ ہے جو آیت ۱۵ میں آیا for and, and the same shape for is and for the. So the two shapes are told apart by the one word behind the number, and none of the three known faults is hidden by this.";
  "WHAT THIS IS WORTH WAS MEASURED BEFORE IT WAS WRITTEN. Of the two thousand eight hundred and ninety-two rows this store stood accused of on 2026-09-25, two thousand two hundred and eighty-one put a word of owning straight behind the number. Reading the queue is what found it: the same handful of sentence shapes came back page after page, and every one of them named a verse in order to name a different word in it.";
  "English's words of distance are not looked for and neither are shutters, for the same reason in both cases: Urdu counts backwards before the number rather than after it, and Urdu has no word for the at all. A word belongs on either list when a reading of this store shows one, not before.";
  arguments_assert(arguments, 2);
  let markers = ["آیت", "آیَت", "آیتیں", "آیتوں"];
  let joiner = "اَور";
  let cancellers = ["کے", "کا", "کی"];
  let shutters = [];
  let r = gloss_explain_verse_numbers_generic(
    explain,
    verse_numbers,
    markers,
    joiner,
    cancellers,
    text_digits_urdu,
    shutters,
  );
  return r;
}
