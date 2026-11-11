import { equal } from "./equal.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
export function bible_word_article_citations_whole_chapters_add(
  index,
  sites,
  chapter_codes,
) {
  "Adds to the articles by verse and word those articles that comment on a whole chapter, under the chapter's own key chapter, so any word tapped in that chapter offers them.";
  "$plain index";
  "$plain sites";
  "$plain chapter_codes";
  "the index is keyed chapter code, then verse number, then word; the sites are the article sites, some carrying a chapter function that names the page for a chapter or null; the codes are every chapter's name. They are read and the index is added to; nothing in them runs.";
  "EACH ENTRY IS A SITE, A FILE AND A TITLE - the book and chapter, like Matthew 1 - because no site table lists these pages and a button needs a name.";
  "THE KEY chapter CANNOT MEET A VERSE, because verses are keyed by number; and an app built before this key existed asks only for verse numbers, so it never sees it.";
  let names = {};
  for (let book of ebible_books_engbsb()) {
    names[book.book_code] = book.text;
  }
  for (let site of sites) {
    if (equal(site.chapter, undefined)) {
      continue;
    }
    for (let chapter_code of chapter_codes) {
      let file = site.chapter(chapter_code);
      if (equal(file, null)) {
        continue;
      }
      let book_code = ebible_chapter_code_to_book(chapter_code);
      let title =
        names[book_code] + " " + ebible_chapter_code_to_number(chapter_code);
      index[chapter_code] ??= {};
      index[chapter_code].chapter ??= [];
      index[chapter_code].chapter.push([site.name, file, title]);
    }
  }
}
