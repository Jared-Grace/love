import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_book_code_to_division } from "./ebible_book_code_to_division.mjs";
import { property_get } from "./property_get.mjs";
export function bible_chapter_testament_name(chapter_code) {
  "Which testament one chapter stands in, named as the book divisions name it.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN04, chosen from the Bible's own book and chapter numbering. It names a place in the canon and nothing that runs.";
  "The testament is read off the book's own division rather than off a list of book codes kept here, so a book moving between testaments moves in one place. A book no division claims falls into the uncategorized one, whose testament matches no other, so it comes back as its own rather than being quietly counted as either.";
  "It has a name of its own because the answer decides which of two separate numberings a word's Strong's number belongs to, and the two collide - Greek 3056 and Hebrew 3056 are different words wearing one key. A caller that gets this wrong does not fail: it looks the number up in the wrong book and hands back a real, well-formed answer about a word that is not there.";
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let division = ebible_book_code_to_division(book_code);
  let testament_name = property_get(division, "testament");
  return testament_name;
}
