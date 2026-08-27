import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_chapters } from "./ebible_version_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { bible_verses_reading_units } from "./bible_verses_reading_units.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { round } from "./round.mjs";
export async function ebible_reading_units_report(bible_folder) {
  "$plain bible_folder";
  "How many pieces one whole bible comes to once its verses are gathered into what a reader or a singer may stop at, how many of those pieces are a single verse untouched, and which are the largest.";
  "★ IT PRICES THE CHANGE BEFORE THE CHANGE IS MADE. Gathering verses into pieces means a recording is no longer one file to a verse, and the question that decides whether that is worth doing is how many verses it actually moves. A share of one in eight sounds like a rewrite of everything until the pieces are counted and almost nine in ten turn out to be a single verse standing exactly where it stood.";
  "★ THE LARGEST PIECE IS A COST, NOT A FAULT. A genealogy gathered correctly is one long sentence and so one long piece, which is right for a recording that must not stop in the middle of a clause and wrong for a screen that must show the piece all at once. Reporting the largest is what lets that be decided per use rather than assumed once.";
  arguments_assert(arguments, 1);
  let chapters = await ebible_version_chapters(bible_folder);
  let verses = 0;
  let units = 0;
  let single = 0;
  let gathered = 0;
  let largest = [];
  function chapter_each(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let list = property_get(chapter, "verses");
    verses = add(verses, list.length);
    let pieces = bible_verses_reading_units(list);
    units = add(units, pieces.length);
    function piece_each(piece) {
      let held = property_get(piece, "verses");
      let one = equal(held, 1);
      if (one) {
        single = add(single, 1);
        return;
      }
      gathered = add(gathered, 1);
      if (greater_than(held, 5)) {
        list_add(largest, {
          chapter_code,
          first_verse: property_get(piece, "first_verse"),
          last_verse: property_get(piece, "last_verse"),
          verses: held,
        });
      }
    }
    each(pieces, piece_each);
    return;
  }
  each(chapters, chapter_each);
  let left = divide(single, units);
  let n = multiply(left, 1000);
  let top = round(n);
  let report = {
    bible_folder,
    verses,
    units,
    single,
    gathered,
    single_share: divide(top, 10),
    over_five: largest.length,
    largest,
  };
  return report;
}
