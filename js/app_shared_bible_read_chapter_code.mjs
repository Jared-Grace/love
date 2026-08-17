import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_dismissable_message } from "./app_shared_dismissable_message.mjs";
import { app_shared_bible_read } from "./app_shared_bible_read.mjs";
import { app_shared_bible_read_count_foot } from "./app_shared_bible_read_count_foot.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_bible_chapter_code_default } from "./app_shared_bible_chapter_code_default.mjs";
export function app_shared_bible_read_chapter_code(bar, help_text, shell, c) {
  arguments_assert(arguments, 4);
  let dismiss_help = app_shared_dismissable_message(
    app_shared_bible_read,
    "chapter_help_dismissed",
    bar,
    help_text,
  );
  let count_status = app_shared_bible_read_count_foot(shell);
  let chapter_code = text_empty_is(c)
    ? app_shared_bible_chapter_code_default()
    : c;
  let r = {
    dismiss_help,
    count_status,
    chapter_code,
  };
  return r;
}
