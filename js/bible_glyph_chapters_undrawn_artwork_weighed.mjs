import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_artwork_names_available } from "./bible_glyph_artwork_names_available.mjs";
import { bible_glyph_artwork_names } from "./bible_glyph_artwork_names.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_chapters_undrawn_artwork_candidate } from "./bible_glyph_chapters_undrawn_artwork_candidate.mjs";
export async function bible_glyph_chapters_undrawn_artwork_weighed(report) {
  arguments_assert(arguments, 1);
  let candidates = property_get(report, "commonest");
  let names = await bible_glyph_artwork_names_available();
  let bridged = {};
  for (let entry of bible_glyph_artwork_names()) {
    let property_name = text_lower_to(entry.asset);
    property_set(bridged, property_name, entry.glyph);
  }
  let lowered_names = [];
  let weighed = bible_glyph_chapters_undrawn_artwork_candidate(
    names,
    lowered_names,
    candidates,
    bridged,
  );
  return weighed;
}
