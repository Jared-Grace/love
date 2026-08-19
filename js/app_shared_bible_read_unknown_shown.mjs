import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_hash_unknown_shown_is } from "./app_shared_bible_hash_unknown_shown_is.mjs";
export function app_shared_bible_read_unknown_shown(r3) {
  arguments_assert(arguments, 1);
  let help_text = property_get(r3, "help_text");
  let max = property_get(r3, "max");
  let t = property_get(r3, "t");
  let bar = property_get(r3, "bar");
  let content = property_get(r3, "content");
  let count_status = property_get(r3, "count_status");
  let hash = html_hash_object_get();
  ("A language code in the link that names no bible we have is answered here rather than read past. Read past, it was dropped without a word and the chapter opened in whatever languages happened to be left - so somebody sent a link with one letter wrong read the wrong bible and nothing anywhere said so. It is the same screen the sent-a-verse page shows, from the same function, so a wrong link reads the same whichever bible surface it lands on.");
  let unknown_shown = app_shared_bible_hash_unknown_shown_is(content, hash);
  let r = {
    help_text,
    max,
    t,
    bar,
    content,
    count_status,
    hash,
    unknown_shown,
  };
  return r;
}
