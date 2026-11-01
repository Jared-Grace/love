import { app_shared_bible_home_inner } from "./app_shared_bible_home_inner.mjs";
import { app_bible_sermons_download } from "./app_bible_sermons_download.mjs";
import { app_bible_sermons } from "./app_bible_sermons.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_title_verse_set } from "./app_shared_bible_title_verse_set.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { g_openai_split_property } from "./g_openai_split_property.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div_text } from "./html_div_text.mjs";
export async function app_bible_sermons_home(context) {
  "The verse being read, with the approved sermon on it shown beneath, to be read and not changed.";
  "The same sermons the game's own bible edits, drawn from the same place, but as plain text: nobody here signs in, so nobody here can save, and a box that takes typing would only lose what was typed.";
  let r = await app_shared_bible_home_inner(
    context,
    app_bible_sermons_download,
    app_bible_sermons,
  );
  let passages = property_get(r, "passages");
  let screen = property_get(r, "r");
  await app_shared_bible_title_verse_set(screen);
  for (let item of passages) {
    let passage = property_get(item, "passage");
    let verses = property_get(item, "verses");
    let p = list_last_property(verses, "p");
    let lines = g_openai_split_property(passage, "sermon");
    ("The sermon is set apart from the verse above it - a bar down its left side, a plainer typeface, a little smaller - so a reader never takes a line of preaching for a line of the Bible. The bar is a half-grey, which reads on a light page and a dark one alike.");
    let sermon = html_div(p);
    html_style_assign(sermon, {
      "border-left": "3px solid rgba(128, 128, 128, 0.6)",
      "padding-left": "0.75em",
      "margin-top": "0.75em",
      "font-family": "system-ui, sans-serif",
      "font-size": "0.95em",
    });
    for (let line of lines) {
      let div = html_div_text(sermon, line);
      html_style_assign(div, {
        "margin-top": "0.5em",
      });
    }
  }
}
