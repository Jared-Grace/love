import { ebible_version_downloaded_books_count } from "./ebible_version_downloaded_books_count.mjs";
import { ebible_versions_commercial } from "./ebible_versions_commercial.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { object_copy } from "./object_copy.mjs";
import { object_merge } from "./object_merge.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export async function ebible_versions_commercial_ranked() {
  "Every translation this repo is free to ship, fullest first - the one holding all sixty six books ahead of the one holding a single letter.";
  "Ranked because whichever comes first is the one a reader is given without being asked, and a reader given a few letters when a whole bible was there would think the whole bible was missing.";
  "How full a translation is is counted rather than read off its name. eBible does usually say so in the name, but it says it in whatever words the translators used, and a rank that rests on a word is wrong the first time somebody writes a different one.";
  let commercial = await ebible_versions_commercial();
  async function counted(version) {
    let bible_folder = property_get(version, "bible_folder");
    let books_count = await ebible_version_downloaded_books_count(bible_folder);
    let entry = object_copy(version);
    object_merge(entry, {
      books_count,
    });
    return entry;
  }
  let versions = await list_map_async(commercial, counted);
  function fewer_books(version) {
    "Sorted on the count made negative rather than sorted and then turned around, because turning a sorted list around also turns around the ones that tied - and translations tie constantly, three of them holding the same twenty seven books.";
    let books_count = property_get(version, "books_count");
    let ranking = subtract(0, books_count);
    return ranking;
  }
  list_sort_number_mapper(versions, fewer_books);
  return versions;
}
