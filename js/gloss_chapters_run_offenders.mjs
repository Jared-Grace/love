import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function gloss_chapters_run_offenders(chapter_codes, book_codes) {
  "How far a store's chapters run as one unbroken stretch from the first chapter of the first book it was asked about, and everything standing outside that stretch: how many chapters were reached, and the offenders.";
  "$plain chapter_codes";
  "$plain book_codes";
  "the chapters a store holds, in any order, and the books to walk in the order they are read in. The books come from the caller because a store promising a run through the New Testament and one promising a run from Genesis are the same question asked over different lists.";
  "TWO FAULTS ARE LOOKED FOR AND THEY FAIL DIFFERENTLY. A book begun while an earlier book is untouched is reported by its book code alone: the run jumped. A chapter missing inside a book that has been begun is reported as the book code and the number the run was expecting there, because the chapter at fault is the one that is not there and so has no code of its own to name.";
  "ONLY THE FIRST HOLE IN A BOOK IS REPORTED, because every chapter after a hole sits one place later than the run expects and would be named too. One missing chapter would come back as a complaint about every chapter behind it, which reads as a ruined book rather than as the single gap it is.";
  "WHERE THE RUN HAS GOT TO IS NOT A FAULT. A store that has reached the middle of the seventh book is doing exactly what a store under construction does, so the last book reached is allowed to be short. That is the whole difference between this and a completeness check, and it is why a card promising a direction can be gated while a card promising a count cannot.";
  "The count of chapters reached travels back beside the offenders, red or green, because an empty offender list means something quite different when nothing was walked at all.";
  arguments_assert(arguments, 2);
  let offenders = [];
  let chapters = 0;
  let stopped = false;
  for (let book_code of book_codes) {
    let book_chapter_codes = list_filter_starts_with(chapter_codes, book_code);
    let begun = list_empty_not_is(book_chapter_codes);
    if (not(begun)) {
      stopped = true;
      continue;
    }
    let reached = list_size(book_chapter_codes);
    chapters = add(chapters, reached);
    if (stopped) {
      list_add(offenders, book_code);
    }
    let numbers = [];
    for (let chapter_code of book_chapter_codes) {
      let after = text_slice_from(chapter_code, 3);
      let numbered = text_digits_is(after);
      if (not(numbered)) {
        list_add(offenders, chapter_code);
        continue;
      }
      let number = number_from_text(after);
      list_add(numbers, number);
    }
    let sorted = list_sort_number(numbers);
    let index = 0;
    let whole = true;
    for (let number of sorted) {
      let expected = add(index, 1);
      let in_place = equal(number, expected);
      if (whole) {
        if (not(in_place)) {
          let item = text_combine_multiple([book_code, " ", expected]);
          list_add(offenders, item);
          whole = false;
        }
      }
      index = add(index, 1);
    }
  }
  let r = {
    chapters,
    offenders,
  };
  return r;
}
