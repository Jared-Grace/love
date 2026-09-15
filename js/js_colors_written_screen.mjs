import { js_colors_written } from "./js_colors_written.mjs";
import { js_file_color_artwork_is } from "./js_file_color_artwork_is.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function js_colors_written_screen() {
  "every colour spelled in js outside game artwork, and the files that spell it. The same shape as the whole list; a spelling only artwork uses is dropped entirely, because the colour rules are about screens.";
  let written = await js_colors_written();
  let r = {};
  function screen_is(name) {
    let artwork = js_file_color_artwork_is(name);
    let n = not(artwork);
    return n;
  }
  for (let spelling of object_property_names(written)) {
    let files = list_filter(written[spelling], screen_is);
    if (list_empty_not_is(files)) {
      r[spelling] = files;
    }
  }
  return r;
}
