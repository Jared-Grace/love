import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_shared_bar_content_root_sticky } from "./app_shared_bar_content_root_sticky.mjs";
import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { bible_glyph_chapter_lines } from "./bible_glyph_chapter_lines.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { property_get } from "./property_get.mjs";
export async function app_emoji_bible(context) {
  "The picture Bible as a page: every chapter written so far, drawn with its pictures in place of its words.";
  "The page shows EVERY authored chapter at once rather than asking the reader to pick one, and that is right while there is one chapter and wrong once there are fifty. A picker is what the reader needs when choosing costs them something; today choosing would cost them a tap to see the only thing there is. The moment a second book appears this grows the same book and chapter picker every other bible app here already shares.";
  "There is no language setting and there is nothing to translate, which is the entire point of the app: a reader who has never met English still meets the heart, the fire and the seed. What English is left on the page is the grammar, and that is the honest state of the project rather than a decision that has been made.";
  "No tradition is laid over the vocabulary here, so the base glyphs are what is drawn. The lookup takes the traditions so that an Orthodox reader can one day be given the cross their own churches draw without a single verse being rewritten.";
  app_shared_app_fn_set(context, app_emoji_bible);
  let root = html_clear_context(context);
  let frame = app_shared_bar_content_root_sticky(root);
  let bar = property_get(frame, "bar");
  let content = property_get(frame, "content");
  app_shared_content_column_pad(bar);
  app_shared_content_column_pad(content);
  html_div_text_bold(bar, "The Bible in pictures");
  let chapters = bible_glyph_chapters();
  let traditions = [];
  for (let chapter of chapters) {
    html_div_text_bold(content, chapter.reference);
    let lines = bible_glyph_chapter_lines(chapter.chapter_code, traditions);
    html_p_text_multiple(content, lines);
  }
}
