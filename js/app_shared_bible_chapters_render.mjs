import { app_shared_bible_picker_buttons_equal_width } from "./app_shared_bible_picker_buttons_equal_width.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { app_shared_button_list_centered } from "./app_shared_button_list_centered.mjs";
import { app_shared_bible_picker_buttons_enlarge } from "./app_shared_bible_picker_buttons_enlarge.mjs";
import { app_shared_bible_picker_mark_current } from "./app_shared_bible_picker_mark_current.mjs";
export function app_shared_bible_chapters_render(
  card,
  items,
  on_open,
  current_chapter_code,
) {
  "chapters as buttons in the card handed in, sized up when there are few enough of them, with the chapter you are on marked";
  "both bible readers pick a chapter the same way, so the whole picker is drawn here once: the verse reader opens it as its own screen and the whole-chapter reader draws it in place over the text, and all that differs between them is the card it goes in and what a chosen chapter does";
  "which chapters those are is the caller's to say, and the two readers say it differently: the whole-chapter reader lists the chapters the version being read has of the book, the verse reader lists every chapter any of the versions chosen has. asking here would mean asking one version, and one version is exactly what neither reader means - a bible that publishes Mark alone would be offered sixteen chapters of Genesis, every one of them opening on nothing.";
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
