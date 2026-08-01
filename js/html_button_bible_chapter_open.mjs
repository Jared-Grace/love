import { fn_name } from "./fn_name.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { app_shared_bible_mode_hash_key } from "./app_shared_bible_mode_hash_key.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { verses_text_max } from "./verses_text_max.mjs";
import { window_open } from "./window_open.mjs";
export function html_button_bible_chapter_open(
  parent,
  chapter_code,
  verses_text,
  button_text,
) {
  ("Open the Bible app to a WHOLE CHAPTER in a NEW TAB - in CHAPTER mode so the whole chapter is there to read - and land on the passage's HIGHEST verse so everything under discussion sits above the spot you open at. The page is hash-routed and the filename is relative so the same link works from both the dev and prod verify pages. A DRY sibling of the biblehub open button - one reusable external-open button instead of an inline open call.");
  function lambda() {
    let hash = {};
    property_set(hash, "c", chapter_code);
    let property_name = app_shared_bible_mode_hash_key();
    let mode = app_shared_bible_mode_chapter();
    property_set(hash, property_name, mode);
    let v = verses_text_max(verses_text);
    property_set(hash, "v", v);
    let url = hash_to_url(hash);
    let address = text_combine("bible.html", url);
    window_open(address);
  }
  let b = app_shared_button(parent, button_text, lambda);
  return b;
}
