import { js_colors_written_screen } from "./js_colors_written_screen.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { js_file_color_palette_is } from "./js_file_color_palette_is.mjs";
import { not } from "./not.mjs";
export async function colors_palette_outside_files() {
  "the js files that spell a screen colour themselves instead of asking the palette for it, sorted. A file, not a spelling, is the unit, because moving a file onto the palette is the one edit that clears it.";
  let written = await js_colors_written_screen();
  let found = new Set();
  for (let spelling of object_property_names(written)) {
    for (let name of written[spelling]) {
      let palette = js_file_color_palette_is(name);
      if (not(palette)) {
        found.add(name);
      }
    }
  }
  let r = [...found].sort();
  return r;
}
