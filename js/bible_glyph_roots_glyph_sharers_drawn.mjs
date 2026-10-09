import { bible_glyph_names_drawn_first } from "./bible_glyph_names_drawn_first.mjs";
import { text_split_plus } from "./text_split_plus.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { bible_glyph_roots_glyph_sharers } from "./bible_glyph_roots_glyph_sharers.mjs";
export function bible_glyph_roots_glyph_sharers_drawn(roots) {
  "$plain roots";
  "the roots are one testament's seed table, a list of records. Nothing in them runs.";
  "Which roots each DRAWN sequence has been given to: the same answer as the sharers by name, except that two names drawing one character count as one picture.";
  "A READER DECODES THE PICTURES, NOT THE NAMES. qesheth seated under bow_and_arrow and chata seated under bow differ by name and look identical on the page, so a check by name passes a fault the reader cannot get round. Each part of a sequence is swapped for the first name drawing its character before the sharers are counted, and the sequence keeps that first spelling as its key.";
  "A part the vocabulary does not know is kept as it is written. Naming a missing picture is another gate's job, and dropping it here would make two different unknown parts look alike.";
  let drawn_first = bible_glyph_names_drawn_first();
  let folded = [];
  for (let root of roots) {
    let words = [];
    for (let word of root.words) {
      let parts = [];
      for (let part of text_split_plus(word.glyph)) {
        let known = property_exists(drawn_first, part);
        if (known) {
          let item = property_get(drawn_first, part);
          list_add(parts, item);
        } else {
          list_add(parts, part);
        }
      }
      list_add(words, {
        glyph: list_join_plus(parts),
      });
    }
    list_add(folded, {
      root: root.root,
      words,
    });
  }
  let glyph_roots = bible_glyph_roots_glyph_sharers(folded);
  return glyph_roots;
}
