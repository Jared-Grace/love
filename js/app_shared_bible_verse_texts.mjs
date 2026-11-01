import { list_multiple_is } from "./list_multiple_is.mjs";
import { app_shared_bible_verse_colors } from "./app_shared_bible_verse_colors.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { app_shared_bible_verse_line } from "./app_shared_bible_verse_line.mjs";
import { each_index } from "./each_index.mjs";
export function app_shared_bible_verse_texts(parent, entries) {
  "the colours exist to tell one language from another, so a lone language earns no colour at all: pass null and the verse reads in the page's own text colour instead of a muted slate that looks faded for no reason";
  let colored = list_multiple_is(entries);
  let colors = app_shared_bible_verse_colors(entries);
  function render(entry, index) {
    let name = property_get(entry, "name");
    let text = property_get(entry, "text");
    let color = colored ? list_get(colors, index) : null;
    app_shared_bible_verse_line(parent, name, text, color);
  }
  each_index(entries, render);
}
