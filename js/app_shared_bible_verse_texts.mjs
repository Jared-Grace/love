import { list_size } from "../../love/js/list_size.mjs";
import { list_get } from "../../love/js/list_get.mjs";
import { list_map_index } from "../../love/js/list_map_index.mjs";
import { list_interleave_halves } from "../../love/js/list_interleave_halves.mjs";
import { each_index } from "../../love/js/each_index.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { app_shared_gradient_color } from "../../love/js/app_shared_gradient_color.mjs";
import { app_shared_bible_verse_line } from "../../love/js/app_shared_bible_verse_line.mjs";
export function app_shared_bible_verse_texts(parent, entries) {
  let count = list_size(entries);
  function color_get(entry, index) {
    return app_shared_gradient_color(index, count);
  }
  let colors = list_interleave_halves(list_map_index(entries, color_get));
  function render(entry, index) {
    let name = property_get(entry, "name");
    let text = property_get(entry, "text");
    let color = list_get(colors, index);
    app_shared_bible_verse_line(parent, name, text, color);
  }
  each_index(entries, render);
}
