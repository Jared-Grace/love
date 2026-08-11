import { ebible_book_code_to_chapter_codes_browser } from "./ebible_book_code_to_chapter_codes_browser.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { app_shared_button_list_centered } from "./app_shared_button_list_centered.mjs";
import { app_shared_bible_picker_buttons_enlarge } from "./app_shared_bible_picker_buttons_enlarge.mjs";
import { app_shared_bible_picker_mark_current } from "./app_shared_bible_picker_mark_current.mjs";
export async function app_shared_bible_chapters_render(
  card,
  folder,
  book_code,
  on_open,
  current_chapter_code,
) {
  "every chapter of one book as buttons in the card handed in, sized up when there are few enough of them, with the chapter you are on marked";
  "both bible readers pick a chapter the same way, so the whole picker is drawn here once: the verse reader opens it as its own screen and the whole-chapter reader draws it in place over the text, and all that differs between them is the card it goes in and what a chosen chapter does";
  "the folder is the caller's because the two readers ask different versions: the verse reader lists the english chapters, the whole-chapter reader lists the ones of whichever language is being read";
  let items = await ebible_book_code_to_chapter_codes_browser(
    folder,
    book_code,
  );
  let code_to_button_text = ebible_chapter_code_to_name;
  let buttons = app_shared_button_list_centered(
    card,
    items,
    code_to_button_text,
    on_open,
  );
  app_shared_bible_picker_buttons_enlarge(buttons);
  app_shared_bible_picker_buttons_equal_width(
    buttons,
    items,
    code_to_button_text,
  );
  app_shared_bible_picker_mark_current(buttons, items, current_chapter_code);
}
