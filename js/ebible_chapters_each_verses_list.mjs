import { ternary } from "./ternary.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { list_any_starts_with } from "./list_any_starts_with.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_version_books_testament_apocrypha } from "./ebible_version_books_testament_apocrypha.mjs";
import { ebible_verses_readaloud } from "./ebible_verses_readaloud.mjs";
import { log_keep } from "./log_keep.mjs";
import { each_async } from "./each_async.mjs";
export async function ebible_chapters_each_verses_list(
  chapter_codes,
  bible_folder,
  each_chapter,
) {
  "Every chapter a bible names, each with its verses.";
  "Four chapters were once passed over here by name, because their pages were missing while the book index still linked them. That is a fault in a download rather than in a bible, and the remedy is to fetch the version again - hausa Daniel 14 was linked but never shipped, and ebible.org has since dropped the link. A chapter skipped by name is worse than the error it hides: the list goes stale in silence, and three of those four named versions this repo no longer ships at all.";
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  let mapped = list_map_property(books, "book_code");
  await each_async(chapter_codes, lambda);
  async function lambda(chapter_code) {
    log_keep(ebible_chapters_each_verses_list.name, {
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
