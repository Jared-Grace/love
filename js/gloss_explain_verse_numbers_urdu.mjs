import { arguments_assert } from "./arguments_assert.mjs";
import { text_digits_urdu } from "./text_digits_urdu.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export function gloss_explain_verse_numbers_urdu(explain, verse_numbers) {
  "The verses of its own chapter that one word explanation written in Urdu names, as a list with nothing said twice.";
  "THIS IS THE URDU TWIN OF THE ENGLISH READER BESIDE IT AND IT ASKS EXACTLY THE SAME QUESTION, because an explanation that says where else in the chapter a word stands is making a claim anyone can check, whatever language it makes it in. What differs is only the two words a reader has to know: the word for verse, and the ten shapes the number is written with.";
  "An Urdu explanation says آیت ۲۱, never verse twenty-one, so the English reader run over this store finds nothing and reports no wrong claims at all - which reads exactly like a store with nothing wrong in it. Measured on 2026-09-25, the store said آیت twenty-four thousand four hundred and forty-nine times and put a number straight after it fourteen thousand three hundred and twenty times, and not one of those was being looked at.";
  "The chapter's own verse numbers are handed in and written out here in Urdu digits rather than the Urdu digits being read back as numbers, the same way round as the English reader and for the same reason: writing forward needs one table, reading back would want a second one free to disagree with it. It also means a verse the chapter does not have can never be named.";
  "A number counts only where it follows the word for verse, because ordinary prose is full of small numbers that are not verses at all. A list carries on past its joining word, so آیت ۱، ۲ اَور ۳ names three of them, and the run ends at the first word that is not one - which is what keeps آیت ۵ میں from reaching for میں.";
  "Nothing is folded to one case, because Urdu has no case to fold. The marks written above and below the letters are kept for the same reason the words are: اَور is spelled with its mark in this store, and a joiner spelled without one would simply never be met.";
  arguments_assert(arguments, 2);
  let digits_numbers = {};
  function verse_number_read(verse_number) {
    let written = text_digits_urdu(verse_number);
    property_set(digits_numbers, written, verse_number);
  }
  each(verse_numbers, verse_number_read);
  let markers = ["آیت", "آیَت", "آیتیں", "آیتوں"];
  let joiner = "اَور";
  let tokens = text_punctuation_dash_kept_split(explain);
  let named = [];
  let inside = false;
  function token_read(token) {
    let marker_is = list_includes(markers, token);
    if (marker_is) {
      inside = true;
      return;
    }
    if (not(inside)) {
      return;
    }
    let joining = equal(token, joiner);
    if (joining) {
      return;
    }
    let verse_number = property_get_or_null(digits_numbers, token);
    if (null_is(verse_number)) {
      inside = false;
      return;
    }
    list_add(named, verse_number);
  }
  each(tokens, token_read);
  let once = list_unique(named);
  return once;
}
