import { list_group_by_property } from "./list_group_by_property.mjs";
import { list_size } from "./list_size.mjs";
import { list_filter } from "./list_filter.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_verse_numbers } from "./ebible_chapter_verse_numbers.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export async function ebible_chapter_verse_marks_repeated(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  arguments_assert(arguments, 2);
  ("Every verse number one chapter's page marks more than once.");
  ("An address is only an address while it is the one thing wearing it. Two marks carrying the same one make a link to that verse land on whichever of them the browser reaches first, and they leave the other verse with no address at all - so one wrong mark costs two verses, and neither of them looks wrong on the page.");
  ("The finder beside this one notices a repeat only when it happens to leave a gap as well, which is luck rather than a check: engerv's Job 24 was found that way and would have hidden a repeat that had displaced nothing. This asks the question directly, so it holds wherever the numbering is otherwise sound.");
  ("Read off the address rather than off the printed number, because the two disagreeing is the whole fault. Job 24's second mark prints 3b and carries the fourth verse's address, and a reader comparing what is printed sees two different marks.");
  ("Each repeat is handed back with what its marks print as well as the address they share, because that pair is what tells one kind of repeat from another and the caller would otherwise have to open the page to find out. A number whose marks print 14b and 15 is a part-verse given the following verse's address; a number whose marks both print the same thing is something else, and only the printed names separate them.");
  let opened = await ebible_chapter_verse_numbers(bible_folder, chapter_code);
  let verse_numbers = property_get(opened, "verse_numbers");
  let grouped = list_group_by_property(verse_numbers, "number");
  function repeated_is(group) {
    let items = property_get(group, "items");
    let count = list_size(items);
    let more_than_once = greater_than(count, 1);
    return more_than_once;
  }
  let repeated = list_filter(grouped, repeated_is);
  function lambda(group) {
    let number = property_get(group, "key");
    let items = property_get(group, "items");
    function lambda2(item) {
      let printed = property_get(item, "name");
      return printed;
    }
    let names = list_map(items, lambda2);
    let row = {
      number,
      names,
    };
    return row;
  }
  let rows = list_map(repeated, lambda);
  return rows;
}
