import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_source } from "./bible_folder_source.mjs";
import { equal } from "./equal.mjs";
import { door43_version_chapter_codes } from "./door43_version_chapter_codes.mjs";
import { door43_version_chapter_verses } from "./door43_version_chapter_verses.mjs";
import { null_is } from "./null_is.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_chapters_each_verses_check_with } from "./ebible_chapters_each_verses_check_with.mjs";
export async function bible_chapters_each_verses(
  bible_folder,
  lambda$chapter_code$verses,
) {
  "$plain bible_folder";
  "Every chapter of a bible with its verses, whichever place the bible came from: a Door43 text is read off its own book files, and anything else the way an eBible text is read, checked first.";
  "The search index once read every bible the eBible way, and the Amharic bible is a Door43 text, so it found no chapter pages and built an index of no words at all while saying it had worked.";
  arguments_assert(arguments, 2);
  let source = bible_folder_source(bible_folder);
  if (equal(source, "door43")) {
    let chapter_codes = await door43_version_chapter_codes(bible_folder);
    async function chapter_each(chapter_code) {
      let verses = await door43_version_chapter_verses(
        bible_folder,
        chapter_code,
      );
      if (null_is(verses)) {
        return;
      }
      await lambda$chapter_code$verses(chapter_code, verses);
    }
    await each_async(chapter_codes, chapter_each);
    return;
  }
  await ebible_chapters_each_verses_check_with(
    bible_folder,
    lambda$chapter_code$verses,
  );
}
