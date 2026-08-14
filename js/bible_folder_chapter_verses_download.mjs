import { arguments_assert } from "./arguments_assert.mjs";
import { range_1 } from "./range_1.mjs";
import { ebible_verse_download } from "./ebible_verse_download.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function bible_folder_chapter_verses_download(
  bible_folder,
  chapter_code,
  count,
) {
  "The opening verses of one chapter of one bible, fetched together, in order, with null standing where a verse could not be fetched.";
  "A verse that will not come is kept as a hole rather than dropped, because dropping it closes the gap and the verses either side of it become neighbours that never were. Anything measured across a run of verses would then be measured across a join that is not in the bible.";
  "That also means a chapter shorter than the count asked for simply ends in nulls, which is the honest answer: nothing was read there because there is nothing there.";
  arguments_assert(arguments, 3);
  let verse_numbers = range_1(count);
  async function lambda(verse_number) {
    async function download() {
      let downloaded = await ebible_verse_download(
        bible_folder,
        chapter_code,
        verse_number,
      );
      return downloaded;
    }
    let verse = await catch_null_async(download);
    return verse;
  }
  let verses = await list_map_unordered_async(verse_numbers, lambda);
  return verses;
}
