import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
import { ebible_verse_words_is } from "./ebible_verse_words_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_filter } from "./list_map_filter.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { usfm_number_rest } from "./usfm_number_rest.mjs";
import { usfm_verse_text } from "./usfm_verse_text.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
export function usfm_chapters_verses(usfm) {
  arguments_assert(arguments, 1);
  ("$plain usfm");
  ("One book written in usfm, cut into its chapters and each chapter into its verses.");
  ("Where every chapter and every verse begins is written into usfm as a mark of its own, so this searches for nothing and guesses at nothing. That is the whole reason a bible published this way is worth reading over one published as pages: the eBible pages have to be read twice and the two readings laid against each other, because neither of them alone says where a verse ends, and any chapter where the two disagree is shown to nobody.");
  ("The line breaks go before anything else is done. A mark is what separates one thing from the next here, so where the lines happen to have been broken carries no meaning at all, and a verse written across three lines is one verse.");
  ("What stands before the first chapter mark is dropped, and inside each chapter what stands before the first verse mark is dropped with it. That is the book's own name, its heading and its running titles - true things about the book, but not words of it.");
  ("A verse left with nothing in it is dropped, by the same reading that drops one on the eBible side. A translation writes a verse it has no words for as a pair of brackets, and a reader shown a numbered blank would take it for a fault in the app rather than a fact about the translation.");
  let flat = whitespace_normalize(usfm);
  let pieces = text_split(flat, "\\c ");
  let after_first = list_skip_1(pieces);
  function lambda(piece) {
    let split = usfm_number_rest(piece);
    let chapter_number = property_get(split, "number");
    let rest = property_get(split, "rest");
    let verse_pieces = text_split(rest, "\\v ");
    let marked = list_skip_1(verse_pieces);
    let verses = list_map_filter(marked, lambda2, ebible_verse_words_is);
    let chapter = {
      chapter_number,
      verses,
    };
    return chapter;
  }
  function lambda2(verse_piece) {
    let split = usfm_number_rest(verse_piece);
    let verse_number = property_get(split, "number");
    let raw = property_get(split, "rest");
    let text = usfm_verse_text(raw);
    let verse = ebible_verse_new_text(text, verse_number);
    return verse;
  }
  let chapters = list_map(after_first, lambda);
  return chapters;
}
