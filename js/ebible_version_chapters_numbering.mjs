import { ebible_version_verse_numbers } from "./ebible_version_verse_numbers.mjs";
import { ebible_version_verse_numbers_english } from "./ebible_version_verse_numbers_english.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_verse_numbers_compatible_is } from "./ebible_verse_numbers_compatible_is.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
export async function ebible_version_chapters_numbering(bible_folder) {
  "$plain bible_folder";
  "Which of one bible's chapters number their verses the way the English bible everything is read in does, and which do not.";
  "A search result is an address - a chapter and a verse number - and the words it promises are then shown from whichever bible the reader is in. So a bible numbering differently, as the Septuagint and the Vulgate do through the Psalms, hands the reader an address pointing at somebody else's verse, and the words searched for are not in it.";
  "Asked of a whole book rather than of one chapter, because a chapter cannot answer for itself. The Douay-Rheims moves a hundred and thirty-nine of the Psalms along by one, and seven of the moved ones land on a psalm that happens to carry the same verse numbers they do - read chapter by chapter those seven look like agreement, and each would have put a whole psalm of words under the wrong address. Every chapter of a book that disagrees anywhere is left out together, so those seven go with the hundred and thirty-nine that gave them away.";
  "A book is asked, and not a whole bible, because that is where a renumbering runs: the Douay-Rheims keeps its own Psalms and agrees everywhere else, and excluding the bible outright would have thrown away the sixty-five books it numbers exactly as this one does.";
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
  let books_disagreeing = list_map(incompatible, ebible_chapter_code_to_book);
  function chapter_book_agrees_is(chapter_code) {
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let disagreeing = list_includes(books_disagreeing, book_code);
    let agrees = not(disagreeing);
    return agrees;
  }
  let matching = list_filter(shared, chapter_book_agrees_is);
  let differing = list_filter_not(shared, chapter_book_agrees_is);
  let r = {
    bible_folder,
    shared,
    matching,
    differing,
    incompatible,
  };
  return r;
}
