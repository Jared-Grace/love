import { app_shared_bible_home_inner } from "./app_shared_bible_home_inner.mjs";
import { app_bible_sermons_download } from "./app_bible_sermons_download.mjs";
import { app_bible_sermons } from "./app_bible_sermons.mjs";
import { property_get } from "./property_get.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { g_openai_split_property } from "./g_openai_split_property.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export async function app_bible_sermons_home(context) {
  "The verse being read, with the approved sermon on it shown beneath, to be read and not changed.";
  "The same sermons the game's own bible edits, drawn from the same place, but as plain text: nobody here signs in, so nobody here can save, and a box that takes typing would only lose what was typed.";
  let r = await app_shared_bible_home_inner(
    context,
    app_bible_sermons_download,
    app_bible_sermons,
  );
  let passages = property_get(r, "passages");
  for (let item of passages) {
    let passage = property_get(item, "passage");
    let verses = property_get(item, "verses");
    let p = list_last_property(verses, "p");
    let lines = g_openai_split_property(passage, "sermon");
    for (let line of lines) {
      let div = html_div_text(p, line);
      html_style_assign(div, {
        "margin-top": "0.5em",
      });
    }
  }
}
