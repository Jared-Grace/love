import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_verse_marks_displaced_measure } from "./ebible_verse_marks_displaced_measure.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  ("Every chapter carries its own eBible url so the file can be worked through straight down the page. Rebuilding the address from a folder and a chapter code is a thing this repo knows how to do and the person receiving the letter has no reason to.");
  ("The printed label is given as it appears rather than as digits, because the label is the whole of what makes the mark wrong - a plain number is never affected, and a reader sorting these will want to see which shapes their publishing produces.");
  ("Sorted with the worst translation first, for the same reason the letter is: whoever reads this can stop wherever they run out of time and will have spent it on the largest part.");
  let measured = await ebible_verse_marks_displaced_measure();
  let bibles_measured = property_get(measured, "bibles");
  let bibles = [];
  let marks_total = 0;
  let chapters_total = 0;
  function bible_read(bible_measured) {
    let bible_folder = property_get(bible_measured, "bible_folder");
    let chapters_measured = property_get(bible_measured, "found");
    let chapters = [];
    let marks_here = 0;
    function chapter_read(chapter_measured) {
      let chapter_code = property_get(chapter_measured, "chapter_code");
      let marks_measured = property_get(chapter_measured, "found");
      function mark_row(mark_measured) {
        let prints = property_get(mark_measured, "name");
        let id = property_get(mark_measured, "number");
        let row = {
          prints,
          id,
        };
        return row;
      }
      let marks = list_map(marks_measured, mark_row);
      let url = text_combine_multiple([
        "https://ebible.org/",
        bible_folder,
        "/",
        chapter_code,
        ".htm",
      ]);
      let chapter = {
        chapter_code,
        url,
        marks,
      };
      list_add(chapters, chapter);
      let here = list_size(marks);
      marks_here = add(marks_here, here);
    }
    each(chapters_measured, chapter_read);
    let chapters_here = list_size(chapters);
    ("A translation with nothing wrong in it is left out entirely rather than written as an empty entry. The measure walks all three hundred and ninety-nine because it has to look at each one to know; a reader of this file is being told what is wrong, and two hundred and sixty-eight empty entries would bury the hundred and thirty-one that are the point.");
    let none = list_empty_is(chapters);
    if (none) {
      return;
    }
    let bible = {
      bible_folder,
      marks: marks_here,
      chapters,
    };
    list_add(bibles, bible);
    marks_total = add(marks_total, marks_here);
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
