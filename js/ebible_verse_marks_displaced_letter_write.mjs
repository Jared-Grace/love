import { ebible_verse_marks_displaced_letter_bible_or_null } from "./ebible_verse_marks_displaced_letter_bible_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_verse_marks_displaced_measure } from "./ebible_verse_marks_displaced_measure.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { ebible_verse_marks_displaced_letter_path } from "./ebible_verse_marks_displaced_letter_path.mjs";
export async function ebible_verse_marks_displaced_letter_write() {
  "Writes every verse mark whose id names a different verse from the one it prints to one public file, shaped so a stranger can work through it without the repo.";
  arguments_assert(arguments, 0);
  ("A letter can carry one example of a fault. It cannot carry two thousand six hundred and ninety of them, and a reader who wants the rest should not have to ask for them or trust a summary. So the letter names one of each shape and links here for the whole list, which costs the reader nothing until they want it.");
  ("WHAT ONE TRANSLATION'S ENTRY LOOKS LIKE IS ANSWERED NEXT DOOR, one translation at a time and then one chapter at a time. What is left here is which translations end up in the file at all, the three counts across the whole of it, and the order they come back in.");
  ("Sorted with the worst translation first, for the same reason the letter is: whoever reads this can stop wherever they run out of time and will have spent it on the largest part.");
  let measured = await ebible_verse_marks_displaced_measure();
  let bibles_measured = property_get(measured, "bibles");
  let bibles = [];
  let marks_total = 0;
  let chapters_total = 0;
  function bible_read(bible_measured) {
    let bible =
      ebible_verse_marks_displaced_letter_bible_or_null(bible_measured);
    let none = null_is(bible);
    if (none) {
      return;
    }
    list_add(bibles, bible);
    let marks_here = property_get(bible, "marks");
    marks_total = add(marks_total, marks_here);
    let chapters = property_get(bible, "chapters");
    let chapters_here = list_size(chapters);
    chapters_total = add(chapters_total, chapters_here);
  }
  each(bibles_measured, bible_read);
  function marks_of(bible) {
    let marks = property_get(bible, "marks");
    return marks;
  }
  list_sort_number_mapper_reverse(bibles, marks_of);
  let translations = list_size(bibles);
  let fault =
    "Each mark below prints one verse number and carries a different one as its id, so a link to the id lands on the wrong verse. Every affected label is a range or a part-verse; a plain number is never affected.";
  let written = {
    fault,
    marks: marks_total,
    chapters: chapters_total,
    translations,
    bibles,
  };
  let path = ebible_verse_marks_displaced_letter_path();
  ("Overwritten rather than written fresh, because this file is a measurement and a rebuild has to be able to replace it whole - it exists after the first run, and refusing the second one would mean deleting it by hand every time.");
  await file_overwrite_json(path, written);
  let reported = {
    path,
    marks: marks_total,
    chapters: chapters_total,
    translations,
  };
  return reported;
}
