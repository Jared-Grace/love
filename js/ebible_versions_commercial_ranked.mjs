import { object_merge } from "./object_merge.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { property_set } from "./property_set.mjs";
import { ebible_version_language_code } from "./ebible_version_language_code.mjs";
import { ebible_version_downloaded_books_count } from "./ebible_version_downloaded_books_count.mjs";
import { ebible_versions_commercial } from "./ebible_versions_commercial.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { object_copy } from "./object_copy.mjs";
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
    ("The language is settled here rather than left as the page happened to give it, because everything downstream groups on it and eleven pages name none. Left alone those eleven gather into one nameless language nobody can be offered.");
    let language_code = ebible_version_language_code(version);
    let entry = object_copy(version);
    ("The count is merged, because it is new and merging refuses a name already taken - which is the check worth keeping.");
    object_merge(entry, {
      books_count,
    });
    ("The language is written over on its own line, because on all but eleven of them it is already there and writing over it is the deliberate act rather than an accident merging would have caught.");
    let property_name = language_code_key();
    property_set(entry, property_name, language_code);
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
