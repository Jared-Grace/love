import { ebible_books_renumbered } from "./ebible_books_renumbered.mjs";
import { ebible_version_verse_numbers } from "./ebible_version_verse_numbers.mjs";
import { ebible_version_verse_numbers_english } from "./ebible_version_verse_numbers_english.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_verse_numbers_compatible_is } from "./ebible_verse_numbers_compatible_is.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export async function ebible_version_chapters_numbering(bible_folder) {
  "$plain bible_folder";
  "Which of one bible's chapters number their verses the way the English bible everything is read in does, and which do not.";
  "A search result is an address - a chapter and a verse number - and the words it promises are then shown from whichever bible the reader is in. So a bible numbering differently, as the Septuagint and the Vulgate do through the Psalms, hands the reader an address pointing at somebody else's verse, and the words searched for are not in it.";
  "A chapter has to clear two things, because on its own it cannot answer for itself. Its own verse numbers must be the reference's, which is what keeps out a chapter divided into verses some other way. And its book must not be one this bible has moved along, which is what keeps out the seven Douay-Rheims psalms that happen to carry the same verse numbers as the psalm they were compared against - read alone each of those seven looks like agreement, and each would have filed a whole psalm of words under an address naming somebody else's verse.";
  "The moved book is asked about separately rather than by throwing out every book that disagrees anywhere, because those are not the same set. The King James disagrees in fifteen chapters, all of them verses later manuscripts drop rather than any shift, and turning away their books wholesale cost a hundred and eighteen chapters that number exactly alike.";
  "A book is the unit, and not a whole bible, because that is where a renumbering runs: the Douay-Rheims keeps its own Psalms and agrees everywhere else, and excluding the bible outright would have thrown away the sixty-five books it numbers exactly as this one does.";
  "Chapters only one of the two carries say nothing either way, so they are left out of both answers - the search already drops a result whose book the reader's bible has not got.";
  let mine = await ebible_version_verse_numbers(bible_folder);
  let reference = await ebible_version_verse_numbers_english();
  let mine_codes = properties_get(mine);
  let reference_codes = properties_get(reference);
  let shared = list_intersect(mine_codes, reference_codes);
  function chapter_compatible_is(chapter_code) {
    let ours = property_get(mine, chapter_code);
    let theirs = property_get(reference, chapter_code);
    let compatible = ebible_verse_numbers_compatible_is(ours, theirs);
    return compatible;
  }
  let incompatible = list_filter_not(shared, chapter_compatible_is);
  let books_renumbered = ebible_books_renumbered(mine, reference, incompatible);
  function chapter_admitted_is(chapter_code) {
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let renumbered = list_includes(books_renumbered, book_code);
    if (renumbered) {
      return false;
    }
    let compatible = chapter_compatible_is(chapter_code);
    return compatible;
  }
  let matching = list_filter(shared, chapter_admitted_is);
  let differing = list_filter_not(shared, chapter_admitted_is);
  let r = {
    bible_folder,
    shared,
    matching,
    differing,
    incompatible,
  };
  return r;
}
