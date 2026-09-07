import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { text_punctuation_split } from "./text_punctuation_split.mjs";
export function gloss_store_words_read(fn) {
  "The word reader one gloss store's own language needs, chosen from the store it is asked about.";
  "★ THE STORE DOES SAY WHICH LANGUAGE IT HOLDS, AND UNTIL THIS EXISTED NOBODY WAS ASKING IT. The reader beside this one is written the other way round - its own prose says no store settles the choice and the caller must - and the reader everything actually calls then cuts at the dash whichever store it was handed. A store is named by the function that writes its chapters, and that function is an app: what the app glosses is what language its explained words are in.";
  "The Cebuano store is read with the dash kept, because Cebuano spells the catch in the throat with one, inside the word - panan-aw, nag-ingon, kabubut-on. Every other store keeps the reading it is given today, which cuts there, and that has since been measured rather than assumed. Asked on 2026-09-07, the original-language store held no explained word with an ASCII dash in it at all, and all twelve in the English store were ordinary English compounds - forty-six, mother-in-law, demon-possessed, well-pleasing - where cutting is exactly what English wants. So this is a chooser and not a repair: adopting it changes one store's answer and no other's. The two readers differ over the ASCII dash and over nothing else, so a language that joins its words with some other mark - Hebrew writes a maqqef, which is a different character entirely - is read exactly the same way whichever of them is handed it, and was never what this chooses between.";
  ("This is the gloss layer's copy of a decision the bible layer already made word for word, in ",
    fn_name("bible_folder_words_read"),
    ", which chooses by the folder a translation is stored under. Two layers read the same Cebuano and only one of them was choosing.");
  let cebuano = equal(fn, app_ceb_bible_gloss_generate);
  let read = cebuano
    ? text_punctuation_dash_kept_split
    : text_punctuation_split;
  return read;
}
