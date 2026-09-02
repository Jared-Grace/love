import { g_sermon_generate_book_generic_property } from "./g_sermon_generate_book_generic_property.mjs";
import { app_shared_bible_home_inner } from "./app_shared_bible_home_inner.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { html_hr } from "./html_hr.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { each } from "./each.mjs";
import { json_from_try } from "./json_from_try.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_gloss_bible_generated_gloss_span } from "./app_shared_gloss_bible_generated_gloss_span.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { app_shared_gloss_bible_word_row } from "./app_shared_gloss_bible_word_row.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_shared_gloss_bible_word_row_line } from "./app_shared_gloss_bible_word_row_line.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_gloss_bible_home_generic(
  context,
  download,
  text_use,
  app_fn,
) {
  let generated = g_sermon_generate_book_generic_property();
  let v = await app_shared_bible_home_inner(context, download, app_fn);
  let passages = property_get(v, "passages");
  if (list_empty_is(passages)) {
    return;
  }
  let first2 = list_first(passages);
  let verses = property_get(first2, "verses");
  let passage = property_get(first2, "passage");
  let prop = "p";
  let p = list_last_property(verses, prop);
  html_hr(p);
  let texts = null;
  if (text_use) {
    let first = property_list_first(passage, "texts");
    texts = [first];
  } else {
    texts = property_get(passage, "originals");
  }
  function lambda5(t) {
    let div = html_div_text(p, t);
    html_font_color_set(div, "#15803dff");
  }
  each(texts, lambda5);
  let explains_json = property_get(passage, generated);
  let explains = json_from_try(explains_json);
  if (false) {
    let div3 = html_div(p);
    function lambda2(e) {
      let r2 = app_shared_gloss_bible_generated_gloss_span(e, div3, generated);
      return r2;
    }
    each(explains, lambda2);
  }
  let word_property = app_shared_gloss_bible_generate_generic_word();
  function lambda(e) {
    let r = app_shared_gloss_bible_word_row(e, p, word_property);
    return r;
  }
  each(explains, lambda);
  ("A reader who presses copy on this screen gets what this screen shows, not the english alone. The verse in the language being learned goes on the clipboard under the english, and under that a line for every word of it explained - which is the whole of why anybody opened this reader rather than a plain bible. Handing over only the english gave them back the one part of the page they did not come for.");
  ("They are written into the list the screen was given rather than handed to the button, because the button was made before this passage had finished arriving. The button reads the list at the moment it is pressed, so lines put here at any time before that press are copied.");
  let home = property_get(v, "r");
  let lines_copy_extra = property_get(home, "lines_copy_extra");
  list_add_multiple(lines_copy_extra, texts);
  function lambda6(e) {
    let line = app_shared_gloss_bible_word_row_line(e, word_property);
    list_add(lines_copy_extra, line);
  }
  each(explains, lambda6);
  ("the reading is closed off with a line and nothing is put after it. What was there was a button across the whole width saying go back to the top, and it could only be pressed by somebody who had already scrolled to the very bottom - which is the one place a reader who wants to go up is not. The way up is a small mark held between the two arrows at the foot of the page now, always in reach, and every bible screen has it rather than only these ones.");
  html_hr(p);
}
