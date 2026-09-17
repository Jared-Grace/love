import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_codes_canonical_browser } from "./ebible_chapter_codes_canonical_browser.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
export async function bible_glyph_chapter_references_browser() {
  arguments_assert(arguments, 0);
  ("Every chapter of the picture Bible as a page needs it: the code a link spells and the reference a person reads, in canon order, for all the chapters there are.");
  ("THE PICTURE BIBLE IS BUILT FROM THE INTERLINEAR, SO IT HOLDS EVERY CHAPTER, and the list of what exists is the canon's rather than a hand-kept one. The canon is asked the way the bible reader next door asks it, so the two apps agree about which chapters there are and a reader who downloaded a Bible for offline use still gets the list with no internet.");
  ("The reference is written by the same call that writes one in that reader, so a chapter is called the same thing in both.");
  let chapter_codes = await ebible_chapter_codes_canonical_browser();
  let books = ebible_books_engbsb();
  let references = [];
  for (let chapter_code of chapter_codes) {
    let reference = ebible_parts_chapter_code_to_reference(
      chapter_code,
      books,
      [],
    );
    references.push({
      chapter_code,
      reference,
    });
  }
  return references;
}
