import { arguments_assert } from "./arguments_assert.mjs";
import { range_1 } from "./range_1.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { ebible_verses_storage_browser_fresh } from "./ebible_verses_storage_browser_fresh.mjs";
import { ebible_verse_merge } from "./ebible_verse_merge.mjs";
import { list_find_property_try_or_null } from "./list_find_property_try_or_null.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_map } from "./list_map.mjs";
import { null_is } from "./null_is.mjs";
import { text_to } from "./text_to.mjs";
export async function bible_folder_chapter_verses_download(
  bible_folder,
  chapter_code,
  count,
) {
  "The opening verses of one chapter of one bible, fetched together, in order, with null standing where a verse could not be fetched.";
  "A verse that will not come is kept as a hole rather than dropped, because dropping it closes the gap and the verses either side of it become neighbours that never were. Anything measured across a run of verses would then be measured across a join that is not in the bible.";
  "That also means a chapter shorter than the count asked for simply ends in nulls, which is the honest answer: nothing was read there because there is nothing there.";
  "The chapter is asked for once and the verses are picked out of it, rather than each verse being asked for by name. Every verse is stored twice - in a file of its own and inside its chapter - and the two say the same words, because the file of its own is written out of the chapter's own verse at upload time. So one question answers for all of them, and asking forty times cost forty waits for what one wait already had.";
  "A chapter that will not come leaves every verse null, which is what asking for each of them separately did when none of them would come. So a bible without this chapter still measures as nothing read rather than stopping whatever asked.";
  "The number counted up to here is a number and the number a verse keeps is written as text, so it is spelled out before the two are compared. They were never compared before this - the number was put into a file name, where a number and its spelling are the same thing - and left as it was, every verse would answer that it is not there.";
  arguments_assert(arguments, 3);
  async function download() {
    let all = await ebible_verses_storage_browser_fresh(
      bible_folder,
      chapter_code,
    );
    return all;
  }
  let chapter = await catch_null_async(download);
  let verse_numbers = range_1(count);
  let property_name = verse_number_key();
  function lambda(verse_number) {
    let unread = null_is(chapter);
    if (unread) {
      return null;
    }
    let wanted = text_to(verse_number);
    let v = list_find_property_try_or_null(chapter, property_name, wanted);
    let absent = null_is(v);
    if (absent) {
      return null;
    }
    let verse = ebible_verse_merge(bible_folder, chapter_code, v);
    return verse;
  }
  let verses = list_map(verse_numbers, lambda);
  return verses;
}
