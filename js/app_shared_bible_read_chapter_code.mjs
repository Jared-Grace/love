import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_dismissable_message } from "./app_shared_dismissable_message.mjs";
import { app_shared_bible_read } from "./app_shared_bible_read.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_bible_chapter_code_default } from "./app_shared_bible_chapter_code_default.mjs";
export function app_shared_bible_read_chapter_code(bar, help_text, c) {
  arguments_assert(arguments, 3);
  let dismiss_help = app_shared_dismissable_message(
    app_shared_bible_read,
    "chapter_help_dismissed",
    bar,
    help_text,
  );
  let chapter_code = text_empty_is(c)
    ? app_shared_bible_chapter_code_default()
    : c;
  let r = {
    dismiss_help,
    chapter_code,
  };
  return r;
}
