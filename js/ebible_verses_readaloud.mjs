import { browser_is } from "./browser_is.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { ebible_verses_readaloud_source } from "./ebible_verses_readaloud_source.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_bible_folder_text_repaired } from "./ebible_bible_folder_text_repaired.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
import { list_map } from "./list_map.mjs";
export async function ebible_verses_readaloud(bible_folder, chapter_code) {
  "$plain chapter_code";
  "$plain bible_folder";
  "One chapter of a bible as a reader gets it: the lines of the read-aloud edition, numbered by the marks its page carries, with everything this repo knows to be wrong with that publisher's file put right in them.";
  if (browser_is()) {
    let verses = await ebible_verses_browser(bible_folder, chapter_code);
    return verses;
  }
  ("The cutting and the numbering are asked for next door, unrepaired, so that a reading which wants to see what the publisher actually wrote has somewhere to ask. Nothing here decides which verse is which; the only thing added on this side is the repair.");
  ("What a translation gets wrong about a particular word is put right here, and it has to be. There are two roads out of a downloaded bible into verses - the one that cuts a page at its verse marks, and this one, which pairs the lines of the read-aloud edition with those marks - and only the first of them was repairing anything. This is the road the app is served from: what is uploaded to storage, and so what a reader turning a page actually sees, is built from these lines. A repair that reaches only the other road is a repair nobody reads.");
  ("The read-aloud edition carries the same fault as the page. Four of the Urdu chapters written out for reading aloud hold the same welded word the downloaded pages hold, which is what a shared publishing sweep would leave, so putting it right once in the one place both roads can call is the whole of the remedy.");
  ("Which bible the lines came from is handed over with them, and it decides. A repair belongs to one publisher's file rather than to a script, and this road reaches every translation the archive ships - so a repair asked for by shape instead of by name would reach translations it was never about.");
  ("Nothing is answered wherever the unrepaired reading answers nothing, which is a chapter this bible does not read aloud and a chapter whose lines cannot be laid against its marks. Both are real states rather than faults, and there is nothing to repair in either of them.");
  let source = await ebible_verses_readaloud_source(bible_folder, chapter_code);
  let unread = null_is(source);
  if (unread) {
    return null;
  }
  function repair(verse) {
    let text = property_get(verse, "text");
    let verse_number = property_get(verse, "verse_number");
    let put_right = ebible_bible_folder_text_repaired(bible_folder, text);
    let v = ebible_verse_new_text(put_right, verse_number);
    return v;
  }
  let list = list_map(source, repair);
  return list;
}
