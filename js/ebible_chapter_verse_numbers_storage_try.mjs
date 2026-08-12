import { ebible_verses_storage_browser_fresh } from "./ebible_verses_storage_browser_fresh.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function ebible_chapter_verse_numbers_storage_try(
  bible_folder,
  chapter_code,
) {
  "The verse numbers one bible holds in one chapter, or nothing where it holds no such chapter at all.";
  "One chapter is one small file, and it names every verse in it. So this asks what a bible has by downloading a single thing, where finding out by asking for each verse in turn would be a download per verse and finding out by listing the folder took four minutes for a bible.";
  "A chapter that is not there is answered rather than thrown, because a bible missing a whole chapter is a fact this is here to measure rather than an errand that failed.";
  async function lambda() {
    let verses = await ebible_verses_storage_browser_fresh(
      bible_folder,
      chapter_code,
    );
    return verses;
  }
  let verses = await catch_null_async(lambda);
  if (null_is(verses)) {
    return null;
  }
  let property_name = verse_number_key();
  let verse_numbers = list_map_property(verses, property_name);
  return verse_numbers;
}
