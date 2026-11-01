import { list_multiple_is } from "./list_multiple_is.mjs";
import { app_shared_bible_verse_colors } from "./app_shared_bible_verse_colors.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
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
    ("AN ENTRY MAY SAY WHICH VERSE IT IS, and only the chapter reader's entries do so far; an entry from a search result or a reading plan says nothing, and its words open the card without the BibleHub choice.");
    let chapter_code = property_get_or_null(entry, "chapter_code");
    let verse_number = property_get_or_null(entry, "verse_number");
    app_shared_bible_verse_line(
      parent,
      name,
      text,
      color,
      chapter_code,
      verse_number,
    );
  }
  each_index(entries, render);
}
