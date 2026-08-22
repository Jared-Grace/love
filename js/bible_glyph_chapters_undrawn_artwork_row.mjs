import { arguments_assert } from "./arguments_assert.mjs";
import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapters_undrawn_artwork_row(
  weighed,
  needs_drawing,
  drawable,
) {
  arguments_assert(arguments, 3);
  for (let row of weighed) {
    let none = property_list_empty_is(row, "assets");
    if (none) {
      list_add(needs_drawing, row);
      continue;
    }
    list_add(drawable, row);
  }
}
