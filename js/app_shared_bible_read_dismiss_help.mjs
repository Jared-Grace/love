import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_read_chapter_code } from "./app_shared_bible_read_chapter_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_read_dismiss_help(bar, help_text, c) {
  arguments_assert(arguments, 3);
  let r5 = app_shared_bible_read_chapter_code(bar, help_text, c);
  let chapter_code = property_get(r5, "chapter_code");
  let dismiss_help = property_get(r5, "dismiss_help");
  let r = {
    chapter_code,
    dismiss_help,
  };
  return r;
}
