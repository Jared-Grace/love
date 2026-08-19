import { ebible_chapter_page_exists } from "./ebible_chapter_page_exists.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
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
  "A chapter that answers with nothing is passed over here, and that is not the skipping the paragraph above refuses. That one worked from a list of names written by hand, which is what let it go stale. This one asks the chapter itself every time: a chapter is passed over only while its own two readings disagree about how many verses it has, and it comes back on its own the moment they agree. How many are being passed over is written down and gated, so the number is watched rather than forgotten.";
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  let mapped = list_map_property(books, "book_code");
  await each_async(chapter_codes, lambda);
  async function lambda(chapter_code) {
    log_keep(ebible_chapters_each_verses_list.name, {
      bible_folder,
      chapter_code,
    });
    ("A chapter the book index links but the download never shipped a page for is passed over here too, and for the same reason as the paragraph above allows: it is asked of the disk each time rather than read off a list, so the chapter comes back on its own the moment its page is there. What is refused is a name written down, not a gap noticed.");
    ("The gap itself is not lost by passing over it. A chapter with no page is counted among the unread ones by the reading that lays lines against marks, and that number is written down and watched, so a download that arrived short shows up as a number rising rather than as silence.");
    let shipped = await ebible_chapter_page_exists(bible_folder, chapter_code);
    let unshipped = not(shipped);
    if (unshipped) {
      return;
    }
    let any = list_any_starts_with(chapter_code, mapped);
    let ebible_verses_get = null;
    ebible_verses_get = ternary(any, ebible_verses, ebible_verses_readaloud);
    ("ebible website says canon only, but seems apocrypha included?");
    ebible_verses_get = ebible_verses_readaloud;
    let verses = await ebible_verses_get(bible_folder, chapter_code);
    let unpaired = null_is(verses);
    if (unpaired) {
      return;
    }
    await each_chapter(chapter_code, verses);
  }
}
