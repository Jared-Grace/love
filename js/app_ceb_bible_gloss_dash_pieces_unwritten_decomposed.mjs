import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_dash_pieces_unwritten } from "./app_ceb_bible_gloss_words_dash_pieces_unwritten.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_dash_pieces_unwritten_decomposed() {
  "The dash-pieces the Cebuano translation never writes that binisaya.com has nevertheless handed back a root and a construction for.";
  "★ AN EMPTY ANSWER IS HARMLESS AND A FULL ONE IS NOT, WHICH IS WHY THIS COUNTS THE FULL ONES RATHER THAN THE ASKINGS. Every consumer of the dictionary in this repo passes straight over an entry whose root is blank - the quoted-only repair says so in its own prose and stops on the blank before it looks at anything else. So a piece that came back undecomposed cost a request and changed nothing. A piece that came back decomposed is a root and an affix build for a run of letters no Cebuano source here has ever seen standing alone, and that does reach a reader.";
  ("The site inventing under a malformed question is not a guess made here - ",
    fn_name("binisaya_words_known"),
    " records three of them found by hand, where the same three words asked with a stray quotation mark attached each came back with a root that does not exist. A piece cut out of the middle of a dashed word is the same malformed question asked several hundred times.");
  ("Nothing is asked of the site by this. The held answers are read off the disk, so a piece nobody has asked about yet is simply absent from the count rather than fetched to complete it.");
  arguments_assert(arguments, 0);
  let measured = await app_ceb_bible_gloss_words_dash_pieces_unwritten();
  let pieces = property_get(measured, "words");
  let known = await binisaya_words_known();
  let asked = 0;
  let decomposed = [];
  function piece_read(piece) {
    let held = property_get_or_null(known, piece);
    let none = null_is(held);
    if (none) {
      return;
    }
    asked = add(asked, 1);
    let root = property_get(held, "root");
    let bare = equal(root, "");
    if (bare) {
      return;
    }
    let affixes = property_get(held, "affixes");
    let row = {
      piece: piece,
      root: root,
      affixes: affixes,
    };
    list_add(decomposed, row);
  }
  each(pieces, piece_read);
  let r = {
    pieces_unwritten: list_size(pieces),
    asked: asked,
    decomposed: list_size(decomposed),
    rows: decomposed,
  };
  return r;
}
