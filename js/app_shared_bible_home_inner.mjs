import { app_shared_bible_passages_download_key } from "./app_shared_bible_passages_download_key.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_clear } from "./list_clear.mjs";
import { app_shared_bible_home_generic } from "./app_shared_bible_home_generic.mjs";
import { noop } from "./noop.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function app_shared_bible_home_inner(context, download, app_fn) {
  "THE APP'S WAY OF FETCHING ITS PASSAGES IS WRITTEN ON THE CONTEXT, so the shared screen finds the passage before it draws anything and shows the whole of it, and the picker offers passages rather than verses.";
  let key = app_shared_bible_passages_download_key();
  property_set(context, key, download);
  let downloaded = null;
  let chapter_code = null;
  let verses = [];
  let r = null;
  async function lambda3(la) {
    async function lambda(a) {
      list_add(verses, a);
      chapter_code = property_get(a, "chapter_code");
      ("a chapter nobody has written explanations for yet has no passages, and the reader keeps the verse it was showing with nothing laid over it. an explanation is something laid on top of the text, so its absence is a page with less on it, never a page with nothing on it.");
      downloaded = property_get(a, "downloaded");
      let passage = property_get(a, "passage");
      if (null_is(passage)) {
        return;
      }
      let copy = list_copy(verses);
      la({
        passage,
        verses: copy,
      });
      list_clear(verses);
    }
    ("false at the end: every app that comes through here is verse-only. the gloss readers and the game's bible render no whole-chapter view at all, so there is nothing for a way-in button to reach. an app that grows one changes this word rather than adding a parameter nobody else would ever pass differently.");
    r = await app_shared_bible_home_generic(
      context,
      lambda,
      noop,
      app_fn,
      false,
    );
  }
  let passages = await list_adder_async(lambda3);
  let v = {
    chapter_code,
    downloaded,
    r,
    passages,
  };
  return v;
}
