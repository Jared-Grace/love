import { object_property_names } from "./object_property_names.mjs";
import { ebible_book_code_to_division } from "./ebible_book_code_to_division.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
export function bible_strong_scope_counts(tallies, chapter_code, strong) {
  "How many times one Strong's number stands in a given chapter, in the book that chapter belongs to, and in that book's testament.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN04, chosen from the Bible's own book and chapter numbering. It names a place in the counts and nothing that runs.";
  "The three scopes are the ones a word explanation actually reaches for, and they are given together because the sentence worth writing depends on how they compare. A word standing once in its chapter and once in its whole testament is worth a sentence; a word standing once in its chapter and four hundred times elsewhere is not, and only the pair tells them apart.";
  "There is deliberately no count for the whole Bible, and it is not an omission that could be added later. The interlinear gives a word one Strong's number taken from whichever of its two columns is filled, Greek or Hebrew, and the two numberings are separate books that both start at one. So a Greek word and a Hebrew word that have nothing to do with each other share a key, and any sum crossing the testaments would quietly add them together. Stopping at the testament makes that impossible rather than guarded against, and costs nothing real: a Greek word's testament is the whole of the world it stands in.";
  "The testament is read off the book's own division rather than from a list of book codes kept here, so a book moving between testaments moves in one place. A book no division claims falls into the uncategorized one, whose testament matches no other, so its counts come back as its own - which is honest, and better than quietly counting it as either.";
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let division = ebible_book_code_to_division(book_code);
  let testament_name = property_get(division, "testament");
  let chapter = 0;
  let book = 0;
  let testament = 0;
  for (let code of object_property_names(tallies)) {
    let tally = property_get(tallies, code);
    let seen = tally[strong];
    if (!seen) {
      continue;
    }
    let code_book = ebible_chapter_code_to_book(code);
    let code_division = ebible_book_code_to_division(code_book);
    let code_testament = property_get(code_division, "testament");
    if (!equal(code_testament, testament_name)) {
      continue;
    }
    testament = add(testament, seen);
    if (!equal(code_book, book_code)) {
      continue;
    }
    book = add(book, seen);
    if (!equal(code, chapter_code)) {
      continue;
    }
    chapter = add(chapter, seen);
  }
  let r = {
    strong,
    testament_name,
    chapter,
    book,
    testament,
  };
  return r;
}
