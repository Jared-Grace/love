import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_pictures_chapter_hash } from "./app_shared_bible_pictures_chapter_hash.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
export function app_emoji_bible_chapter_go(chapter) {
  arguments_assert(arguments, 1);
  ("Opens one chapter of the picture Bible: writes its name into the link, and loads the page standing on it.");
  ("$plain chapter");
  ("the chapter is one of the picture Bible's own written ones. It names what to open and nothing that runs.");
  ("IT LOADS THE PAGE AGAIN RATHER THAN LISTENING FOR THE LINK TO CHANGE, which is what every link on this page already does and what the bible reader next door does. Writing the link alone only asks a listener to notice, and that listener is registered while the page starts up - so a start-up that fails takes every way of moving with it, leaving the address bar showing one chapter and the screen showing another. Loading needs nobody.");
  ("The link is written whichever way the reader moved, so an arrow leaves an address behind exactly as a tap on the list does. A chapter somebody arrowed to is as sendable as one they chose.");
  let chapter_code = property_get(chapter, "chapter_code");
  let hash = app_shared_bible_pictures_chapter_hash(chapter_code);
  html_hash_name_reload(hash);
}
