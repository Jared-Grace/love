import { each_async } from "./each_async.mjs";
import { log_keep } from "./log_keep.mjs";
import { ebible_chapter_page_exists } from "./ebible_chapter_page_exists.mjs";
import { not } from "./not.mjs";
import { ebible_verses_readaloud } from "./ebible_verses_readaloud.mjs";
import { null_is } from "./null_is.mjs";
export async function ebible_chapters_each_verses_list(
  chapter_codes,
  bible_folder,
  each_chapter,
) {
  "Every chapter a bible names, each with its verses.";
  "Four chapters were once passed over here by name, because their pages were missing while the book index still linked them. That is a fault in a download rather than in a bible, and the remedy is to fetch the version again - hausa Daniel 14 was linked but never shipped, and ebible.org has since dropped the link. A chapter skipped by name is worse than the error it hides: the list goes stale in silence, and three of those four named versions this repo no longer ships at all.";
  "A chapter that answers with nothing is passed over here, and that is not the skipping the paragraph above refuses. That one worked from a list of names written by hand, which is what let it go stale. This one asks the chapter itself every time: a chapter is passed over only while its own two readings disagree about how many verses it has, and it comes back on its own the moment they agree. How many are being passed over is written down and gated, so the number is watched rather than forgotten.";
  "Every chapter is read the one way, by laying the lines of the read-aloud edition against the verse marks the page carries. Which way to read a chapter used to be chosen here - the marks alone for a book the version names, reading aloud for anything else - on the belief that the archive ships the canon only and nothing beside it. That belief did not hold: books outside it turn up in versions that do not name them, so the choice was answering for chapters it had no business answering for, and every chapter went the one way from then on.";
  "The choosing was left standing above the line that overruled it, which cost more than the question it was keeping. A repair written into the other reader reached nobody for as long as it stood, because a search for who calls a reader finds this file and stops - the call is here, and only the reading of the two lines together says the call never happens. So the question is kept in words and the dead choosing is not kept at all: a question in prose asks itself of anybody reading, while a branch that cannot be taken tells every reader something untrue.";
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
    let verses = await ebible_verses_readaloud(bible_folder, chapter_code);
    let unpaired = null_is(verses);
    if (unpaired) {
      return;
    }
    await each_chapter(chapter_code, verses);
  }
}
