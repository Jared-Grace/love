import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_verses_before } from "./ebible_verses_before.mjs";
import { list_difference } from "./list_difference.mjs";
import { ebible_chapter_verse_numbers_with_words } from "./ebible_chapter_verse_numbers_with_words.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { and } from "./and.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_verses_searched_marked_differ(bible_folder) {
  "$plain bible_folder";
  "Which chapters of one bible are cut into different verses by the two readings that can cut them: the one that searches the flattened chapter for each number as a word, and the one that goes by the marks the page itself carries.";
  "The searching is the older of the two and is what still ships every bible with no reading-aloud text beside it. It can be wrong, and was: Cebuano 2 Kings 25 verse 17 opens on the words eighteen cubits, so the search took that eighteen for the start of verse 18 and dropped verse 17 as a verse with nothing in it. Nothing anywhere said so.";
  "So this asks how wide that is. Both readings begin at the same page and one of them is written down rather than worked out, which makes the marked one the answer wherever they disagree - but how many chapters that touches decides whether replacing the search is a small correction or a change worth looking at first.";
  "What comes back for a disagreeing chapter is the numbers each reading has that the other lacks, rather than a count, because a count says nothing about whether the two are one verse apart or a whole chapter apart.";
  "The verse kept under nought is left out of the comparison. That is the heading a chapter opens with, which the searching keeps and the marks know nothing about, so counting it would make every chapter with a title disagree for a reason that is not a fault.";
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  let differ = [];
  let same = 0;
  let unread = [];
  async function lambda(chapter_code) {
    async function lambda2() {
      let searched_verses = await ebible_verses(bible_folder, chapter_code);
      let property_name = "verse_number";
      let searched_all = list_map_property(searched_verses, property_name);
      let before = ebible_verses_before();
      let searched = list_difference(searched_all, [before]);
      let marked = await ebible_chapter_verse_numbers_with_words(
        bible_folder,
        chapter_code,
      );
      let compared = {
        chapter_code,
        searched_only: list_difference(searched, marked),
        marked_only: list_difference(marked, searched),
      };
      return compared;
    }
    let compared = await catch_null_async(lambda2);
    let missing = null_is(compared);
    if (missing) {
      list_add(unread, chapter_code);
      return;
    }
    let b = list_empty_is(compared.searched_only);
    let b2 = list_empty_is(compared.marked_only);
    let agreed = and(b, b2);
    if (agreed) {
      same = same + 1;
      return;
    }
    list_add(differ, compared);
  }
  await each_async(chapter_codes, lambda);
  let r = {
    bible_folder,
    chapters: list_size(chapter_codes),
    same,
    differ,
    unread,
  };
  return r;
}
