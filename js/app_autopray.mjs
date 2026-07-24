import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { property_get } from "./property_get.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_version_chapters_all_download } from "./ebible_version_chapters_all_download.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { app_autopray_verse_show } from "./app_autopray_verse_show.mjs";
export async function app_autopray(context) {
  let root = property_get(context, "root");
  let version = ebible_folder_english();
  let chapters = await ebible_version_chapters_all_download(version);
  let books = await ebible_version_books_browser(version);
  async function each_chapter(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let verses = property_get(chapter, "verses");
    async function each_verse(verse) {
      let verse_number = property_get(verse, "verse_number");
      let verse_text = property_get(verse, "text");
      let reference = ebible_parts_chapter_code_to_reference(
        chapter_code,
        books,
        [verse_number],
      );
      await app_autopray_verse_show(root, reference, verse_text);
    }
    await each_async(verses, each_verse);
  }
  while (true) {
    await each_async(chapters, each_chapter);
  }
}
