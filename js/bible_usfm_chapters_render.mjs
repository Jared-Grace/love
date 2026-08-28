import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { app_shared_bible_chapters_card } from "./app_shared_bible_chapters_card.mjs";
export async function bible_usfm_chapters_render(
  parent,
  version,
  book_code,
  on_chapter,
) {
  arguments_assert(arguments, 4);
  ("$plain parent");
  ("$plain version");
  ("$plain book_code");
  ("The chapters of one book of a usfm bible as the carded numbers both bible readers show, drawn wherever the caller says and answering with whichever chapter was pressed.");
  ("NO CHAPTER IS MARKED AS THE ONE BEING READ, and that is the truth here rather than a thing left undone. This is reached by asking to choose a passage, so at the moment it is drawn there is no chapter being worked on - the choice is the thing about to be made.");
  ("Which chapters to offer is asked of the machine serving the page, on the same footing as the books before it: a bible that does not carry a chapter leaves it off rather than offering it and opening on nothing.");
  html_clear(parent);
  let f_name = fn_name("bible_usfm_version_book_chapter_codes");
  let chapter_codes = await app_shared_api_named(f_name, [version, book_code]);
  let books = ebible_books_engbsb();
  let book_name = ebible_book_code_to_name(books, book_code);
  let current_chapter_code = "";
  app_shared_bible_chapters_card(
    parent,
    book_name,
    chapter_codes,
    on_chapter,
    current_chapter_code,
  );
}
