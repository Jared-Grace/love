import { list_first } from "./list_first.mjs";
import { ebible_chapter_text_prepared } from "./ebible_chapter_text_prepared.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_verse_split_mark } from "./ebible_verse_split_mark.mjs";
import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
import { html_parse_text_set } from "./html_parse_text_set.mjs";
import { each } from "./each.mjs";
import { text_split } from "./text_split.mjs";
import { list_skip } from "./list_skip.mjs";
import { lists_sizes_equal_assert_json } from "./lists_sizes_equal_assert_json.mjs";
import { list_map_pairs } from "./list_map_pairs.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
export async function ebible_chapter_verse_texts(bible_folder, chapter_code) {
  "$plain chapter_code";
  "$plain bible_folder";
  arguments_assert(arguments, 2);
  ("Every verse the source page of one chapter marks, beside the words that verse holds.");
  ("Where each verse begins is written into the page, but flattening the page into words forgets it. So each verse's own mark is written over with a character no bible is written in, and the flattened chapter is then cut at that character: what lies between two marks is exactly one verse, without anything having to be searched for.");
  ("That is the difference from cutting a chapter by hunting its numbers among its words. A number can be a word of the text as easily as the mark of a verse, and the hunt has no way to tell them apart; the page's own marks are not guesses at all.");
  ("What stands before the first mark is handed back on its own, under a name of its own, because it is a heading or a title rather than a verse. Numbering it with the verses would push every one of them along by one; throwing it away would lose words that are in the book, and one reading here wants it while the other does not.");
  let mark = ebible_verse_split_mark();
  function lambda(d, main) {
    let list = html_parse_find_list_to(main, ".verse");
    function lambda3(item) {
      html_parse_text_set(d, item, mark);
    }
    each(list, lambda3);
  }
  let prepared = await ebible_chapter_text_prepared(
    bible_folder,
    chapter_code,
    lambda,
  );
  let verse_numbers = property_get(prepared, "verse_numbers");
  let text = property_get(prepared, "text");
  let split = text_split(text, mark);
  let skipped = list_skip(split, 1);
  lists_sizes_equal_assert_json([skipped, verse_numbers], {
    hint: "a chapter should hold one run of words for every verse its page marks",
    bible_folder,
    chapter_code,
  });
  function lambda2(piece, verse_number) {
    let number = property_get(verse_number, "number");
    let v = ebible_verse_new_text(piece, number);
    return v;
  }
  let verses = list_map_pairs(skipped, verse_numbers, lambda2);
  let before = list_first(split);
  let r = {
    before,
    verses,
  };
  return r;
}
