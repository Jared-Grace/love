import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_chapters_each_verses(
  bible_folder,
  lambda$chapter_code$verses,
) {
  "$plain bible_folder";
  "Every chapter of a bible with its verses, whichever place the bible came from, read off the one list of chapters the reading and the uploading already take - so a search finds the printing a reader is shown, Door43, Sword and the Berean publisher's copy alike.";
  "REJECTED: a branch here for each place. It knew Door43 and read everything else the eBible way, so a Sword text would have built an empty index and the Berean Standard Bible would have been searched in the archive's older printing while being shown in the publisher's.";
  "The search index once read every bible the eBible way, and the Amharic bible is a Door43 text, so it found no chapter pages and built an index of no words at all while saying it had worked.";
  arguments_assert(arguments, 2);
  let chapters = await ebible_version_chapters_cache(bible_folder);
  async function chapter_each(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let verses = property_get(chapter, "verses");
    await lambda$chapter_code$verses(chapter_code, verses);
  }
  await each_async(chapters, chapter_each);
}
