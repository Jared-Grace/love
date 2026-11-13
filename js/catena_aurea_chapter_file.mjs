import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
export function catena_aurea_chapter_file(chapter_code) {
  "The page of Aquinas's Catena Aurea on ecatholic2000.com that comments on a chapter of the Gospels, or null for a chapter it does not cover.";
  "$plain chapter_code";
  "the code is a chapter's name, like MAT05; it is looked up, and nothing in it runs.";
  "The Catena covers the four Gospels only, one page per chapter. Each Gospel's pages run in order from its first chapter's page, read off the site's own index (/catena/) on 2026-11-11: Matthew 1 is page 8, Mark 1 is 41, Luke 1 is 62, John 1 is 89.";
  let gospels = {
    MAT: {
      first: 8,
      chapters: 28,
    },
    MRK: {
      first: 41,
      chapters: 16,
    },
    LUK: {
      first: 62,
      chapters: 24,
    },
    JHN: {
      first: 89,
      chapters: 21,
    },
  };
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let gospel = property_get_or_null(gospels, book_code);
  if (equal(gospel, null)) {
    return null;
  }
  let chapter = ebible_chapter_code_to_number(chapter_code);
  if (less_than(chapter, 1) || greater_than(chapter, gospel.chapters)) {
    return null;
  }
  ("THE SITE WRITES A PAGE NUMBER WITH AT LEAST TWO DIGITS: Matthew 1 is untitled-08.shtml.");
  let difference = subtract(gospel.first + chapter, 1);
  let page = String(difference).padStart(2, "0");
  let file = "untitled-" + page + ".shtml";
  return file;
}
