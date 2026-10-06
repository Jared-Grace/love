import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_transform_lookup } from "./text_transform_lookup.mjs";
export function text_search_folded(text) {
  "$plain text";
  "A piece of writing put into the one spelling a search compares by: small letters, and the accents a reader leaves off taken off, so that a word typed without them finds the word written with them.";
  "Both sides of a search go through this - the verses as an index is built and whatever the reader types - because a fold applied on one side only is a word that is in the index and cannot be asked for.";
  "Marks come off only in the scripts where they sit on a whole letter: Latin, Greek, Cyrillic and Armenian accents, and the vowel points of Hebrew, Arabic and Syriac, which most readers never type. In the scripts of India and South-East Asia the marks are the vowels themselves, so taking them off would call many different words one word; there they stay.";
  ("REJECTED: taking every mark off in every script, as ",
    fn_name("text_accent_marks_removed"),
    " does. Searching both sides the same way would still find every verse, but in Hindi a search for one word would bring back verses holding a dozen others.");
  ("The compatibility split comes first, so a ligature such as fi written as one character, or a letter typed at full width, comes apart into the ordinary letters. A few letters carry their accent inside themselves rather than as a mark, and those are spelled out by hand.");
  ("Turkish writes i and ı as two letters, and capital I is the capital of ı. A plain lowercasing turns TANRI into tanri, which no Turkish verse holds, so ı is filed under i: a reader typing capitals, or a keyboard without ı, still finds the word. This costs Turkish the few word pairs told apart by the dot alone.");
  ("Hausa writes ƙ, ɗ, ɓ and ƴ as letters of their own, with a hook rather than a mark, so the split above leaves them whole. Most keyboards lack them, and a reader typing kaunaci found nothing where the Bible writes ƙaunaci; each is filed under its plain letter, at the cost of the few words told apart by the hook alone.");
  ("REJECTED: lowercasing by the Turkish rule when Turkish is chosen. That needs the language handed to both sides, and an English reader typing I into a Turkish search would get ı.");
  arguments_assert(arguments, 1);
  let small = text_lower_to(text);
  let apart = small.normalize("NFKD");
  let pattern = new RegExp(
    "([\\p{Script=Latin}\\p{Script=Greek}\\p{Script=Cyrillic}\\p{Script=Armenian}\\p{Script=Hebrew}\\p{Script=Arabic}\\p{Script=Syriac}])\\p{M}+",
    "gu",
  );
  let unmarked = apart.replace(pattern, "$1");
  let joined = unmarked.normalize("NFC");
  let plain = {
    æ: "ae",
    œ: "oe",
    ø: "o",
    ß: "ss",
    ł: "l",
    ı: "i",
    ƙ: "k",
    ɗ: "d",
    ɓ: "b",
    ƴ: "y",
    đ: "d",
    ٱ: "ا",
    ـ: "",
  };
  let r = text_transform_lookup(joined, plain);
  return r;
}
