import { ternary } from "../../../love/public/src/ternary.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { list_any_starts_with } from "../../../love/public/src/list_any_starts_with.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books_testament_apocrypha } from "../../../love/public/src/ebible_version_books_testament_apocrypha.mjs";
import { ebible_verses_readaloud } from "../../../love/public/src/ebible_verses_readaloud.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function ebible_chapters_each_verses_list(
  list,
  bible_folder,
  each_chapter,
) {
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  let mapped = list_map_property(books, "book_code");
  await each_async(list, lambda);
  async function lambda(chapter_code) {
    if (bible_folder === "hausa" && chapter_code === "DAN14") {
      return;
    }
    if (bible_folder === "englxxup" && chapter_code === "PRO30") {
      return;
    }
    if (bible_folder === "engnna" && chapter_code === "GEN05") {
      return;
    }
    if (bible_folder === "engojb" && chapter_code === "MAL04") {
      return;
    }
    log_keep({
      bible_folder,
      chapter_code,
    });
    let any = list_any_starts_with(chapter_code, mapped);
    let ebible_verses_get = null;
    ebible_verses_get = ternary(any, ebible_verses, ebible_verses_readaloud);
    ("ebible website says canon only, but seems apocrypha included?");
    ebible_verses_get = ebible_verses_readaloud;
    let verses = await ebible_verses_get(bible_folder, chapter_code);
    await each_chapter(chapter_code, verses);
  }
}
