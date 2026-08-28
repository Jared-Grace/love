import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_emoji_bible_chapter_hash(chapter_code) {
  arguments_assert(arguments, 1);
  ("The words a link carries to open one chapter of the picture Bible.");
  ("$plain chapter_code");
  ("the code is a chapter's own, spelled the way the book divisions spell it. It names a chapter to open and nothing that runs.");
  ("IT IS THE SAME WORD THE BIBLE READER NEXT DOOR SPELLS, taken from that reader's own key rather than written out again here. So a link naming a chapter opens that chapter in either app, and the day the pictures become a version somebody picks inside the reader, every link anybody saved goes on working - because the link was never about which app was answering it.");
  ("An empty code is the list of chapters, which is the state this page opens in and the state a reader returns to. It is spelled as nothing rather than as a word of its own, so the address of the front of this Bible is the address of the page.");
  let key = app_shared_bible_chapter_hash_key();
  let empty = text_empty_is(chapter_code);
  if (empty) {
    let none = "";
    return none;
  }
  let hash = text_combine_multiple([key, "=", chapter_code]);
  return hash;
}
