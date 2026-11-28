import { app_shared_gloss_bible_home_generic_slow_placed } from "./app_shared_gloss_bible_home_generic_slow_placed.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { g_sermon_generate_book_generic_property } from "./g_sermon_generate_book_generic_property.mjs";
import { app_shared_bible_home_inner } from "./app_shared_bible_home_inner.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { html_hr } from "./html_hr.mjs";
import { each } from "./each.mjs";
import { app_shared_gloss_bible_word_row } from "./app_shared_gloss_bible_word_row.mjs";
import { app_shared_gloss_bible_copy_lines_write } from "./app_shared_gloss_bible_copy_lines_write.mjs";
export async function app_shared_gloss_bible_home_generic(
  context,
  download,
  text_use,
  app_fn,
  { sound_url_get, slow_url_get, sound_word_get },
) {
  ("Which recording a word in this passage plays is asked of the app too, by sound_word_get, with the passage's chapter and verses: English has words said two ways - lives, read, bow - and the verse decides which; an app with one recording per word hands in ",
    fn_name("gloss_bible_sound_word_same"),
    ".");
  ("The recordings arrive as a way of asking for one rather than as recordings, because which words have been recorded is a question only the app handing it in can answer, and a page whose words have none hands in nothing and shows no speakers.");
  ("The slower readings arrive the same way and separately, because a language can have ordinary recordings for a long while before it has slow ones, and the row has to be able to draw a speaker with no turtle beside it.");
  arguments_assert(arguments, 5);
  let generated = g_sermon_generate_book_generic_property();
  let v = await app_shared_bible_home_inner(context, download, app_fn);
  let passages = property_get(v, "passages");
  if (list_empty_is(passages)) {
    return;
  }
  let first = list_first(passages);
  let verses = property_get(first, "verses");
  let passage = property_get(first, "passage");
  let prop = "p";
  let p = list_last_property(verses, prop);
  html_hr(p);
  let r2 = app_shared_gloss_bible_home_generic_slow_placed(
    text_use,
    passage,
    p,
    generated,
    v,
    sound_url_get,
    sound_word_get,
    slow_url_get,
  );
  let slow_placed = property_get(r2, "slow_placed");
  let sound_placed = property_get(r2, "sound_placed");
  let word_property = property_get(r2, "word_property");
  let explains = property_get(r2, "explains");
  let texts = property_get(r2, "texts");
  function lambda(e) {
    let r = app_shared_gloss_bible_word_row(
      e,
      p,
      word_property,
      sound_placed,
      slow_placed,
    );
    return r;
  }
  each(explains, lambda);
  app_shared_gloss_bible_copy_lines_write(v, texts, explains, word_property);
  ("the reading is closed off with a line and nothing is put after it. What was there was a button across the whole width saying go back to the top, and it could only be pressed by somebody who had already scrolled to the very bottom - which is the one place a reader who wants to go up is not. The way up is a small mark held between the two arrows at the foot of the page now, always in reach, and every bible screen has it rather than only these ones.");
  html_hr(p);
}
