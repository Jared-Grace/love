import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_book_path } from "./bible_usfm_version_book_path.mjs";
import { file_read } from "./file_read.mjs";
import { usfm_chapters_verses } from "./usfm_chapters_verses.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { list_map } from "./list_map.mjs";
export async function bible_usfm_version_book_chapter_codes(
  version,
  book_code,
) {
  arguments_assert(arguments, 2);
  ("$plain version");
  ("$plain book_code");
  ("The chapters one usfm bible has of one book, each written as the chapter code the pickers already speak in.");
  ("WHERE THE CHAPTERS ARE IS WRITTEN INTO THE FILE AS MARKS OF ITS OWN, so this counts nothing and guesses nothing. A number reckoned from the outside would be right about the sixty six ordinary books and wrong about exactly the ones worth being careful over: a translation published as the New Testament alone, or a psalter that begins partway through.");
  ("The chapter code rather than the bare number, because the picker that draws these was written for the bible readers and reads a code. Handing it numbers would mean a second way of saying the same thing, and the two would be free to disagree about the psalms, whose codes carry three digits where every other book carries two.");
  let file_path = await bible_usfm_version_book_path(version, book_code);
  let usfm = await file_read(file_path);
  let chapters = usfm_chapters_verses(usfm);
  function chapter_code_get(chapter) {
    let chapter_number = property_get(chapter, "chapter_number");
    let chapter_code = ebible_chapter_code_pad(book_code, chapter_number);
    return chapter_code;
  }
  let chapter_codes = list_map(chapters, chapter_code_get);
  return chapter_codes;
}
