import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { list_map } from "./list_map.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
import { numbers_from_to } from "./numbers_from_to.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function ebible_bible_chapters_skipped(bible_folder) {
  "$plain bible_folder";
  "Every chapter number one bible leaves out of a book it otherwise publishes.";
  arguments_assert(arguments, 1);
  ("A bible with a hole in its chapters is publishing a selection, and that one fact settles a whole class of questions that otherwise each need a person. Verses missing inside a chapter look exactly like a fault until you notice the same bible has no chapter five at all; once you have noticed, the missing verses are the same editorial choice and there is nothing to report. mwf2018 was about to be written to about fifty-one absent verses of Matthew 27 - it has no Psalms whatsoever, its John 19 is seven verses, and it tells the crucifixion in Mark and Luke instead.");
  ("Read off what the bible actually publishes rather than against a canon, so no list of how many chapters a book ought to have has to be kept anywhere or kept right. A bible that stops partway through a book leaves no hole and is not caught here; a bible that skips a chapter in the middle is, and that is the one this is for.");
  ("Numbered from one rather than from the lowest chapter present, because a book beginning at chapter four is itself the hole. The book introduction pages sit at number zero and are passed over, since a bible not carrying one has skipped nothing.");
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  function chapter_row(chapter_code) {
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let number = ebible_chapter_code_to_number(chapter_code);
    let row = {
      book_code,
      number,
    };
    return row;
  }
  let rows = list_map(chapter_codes, chapter_row);
  let grouped = list_group_by_property(rows, "book_code");
  let skipped = [];
  function book_read(group) {
    let book_code = property_get(group, "key");
    let items = property_get(group, "items");
    function number_of(item) {
      let number = property_get(item, "number");
      return number;
    }
    let numbers = list_map(items, number_of);
    let highest = list_max_or_null(numbers);
    let run = numbers_from_to(1, highest);
    function absent_is(number) {
      let absent = list_includes_not(numbers, number);
      return absent;
    }
    let missing = list_filter(run, absent_is);
    function skipped_add(number) {
      let row = {
        book_code,
        number,
      };
      list_add(skipped, row);
    }
    each(missing, skipped_add);
  }
  each(grouped, book_read);
  return skipped;
}
