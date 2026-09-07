import { arguments_assert } from "./arguments_assert.mjs";
import { bible_verses_hyphen_words_measured_cases } from "./bible_verses_hyphen_words_measured_cases.mjs";
import { property_get } from "./property_get.mjs";
export function bible_verses_hyphen_pieces_unwritten_cases() {
  "The same six verses the hyphen reading is checked against, and the words a search of them would wrongly say they contain.";
  "The verses are taken from the reading's own corpus rather than written again here, because two corpora meant to be the same drift apart and neither says so. One set of verses answering two questions also makes the second answer readable against the first: five words are named here, and those are exactly the five pieces the reading beside it counts as never written on their own.";
  "★ CRISTO AND DIHA ARE THE PROOF THIS IS NOT SIMPLY NAMING EVERY PIECE. Both are cut out of a hyphened word, both are written on their own elsewhere in these verses, and neither is named - because a search saying the translation contains them is right.";
  arguments_assert(arguments, 0);
  let c = bible_verses_hyphen_words_measured_cases();
  let verses = property_get(c, "verses");
  let expected = {
    count: 5,
    words: ["panan", "aw", "jesu", "ika", "tulo"],
    cut_from: {
      panan: ["panan-aw"],
      aw: ["panan-aw"],
      jesu: ["jesu-cristo"],
      ika: ["ika-tulo"],
      tulo: ["ika-tulo"],
    },
  };
  let r = {
    verses,
    expected,
  };
  return r;
}
