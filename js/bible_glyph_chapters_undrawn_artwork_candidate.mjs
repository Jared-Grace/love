import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_add } from "./list_add.mjs";
import { text_words } from "./text_words.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapters_undrawn_artwork_words } from "./bible_glyph_chapters_undrawn_artwork_words.mjs";
import { bible_glyph_chapters_undrawn_artwork_carries } from "./bible_glyph_chapters_undrawn_artwork_carries.mjs";
import { not } from "./not.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_take } from "./list_take.mjs";
export function bible_glyph_chapters_undrawn_artwork_candidate(
  names,
  lowered_names,
  candidates,
  bridged,
) {
  arguments_assert(arguments, 4);
  for (let name of names) {
    let lowered = text_lower_to(name);
    list_add(lowered_names, {
      name,
      lowered,
      words: text_words(lowered),
    });
  }
  let weighed = [];
  for (let candidate of candidates) {
    let gloss = property_get(candidate, "gloss");
    let words = bible_glyph_chapters_undrawn_artwork_words(gloss);
    let assets = [];
    let seated = [];
    for (let entry of lowered_names) {
      let carries = bible_glyph_chapters_undrawn_artwork_carries(
        entry.words,
        words,
      );
      if (not(carries)) {
        continue;
      }
      list_add(assets, entry.name);
      let glyph = property_or_null(bridged, entry.lowered);
      let already = null_is(glyph);
      if (not(already)) {
        list_add(seated, glyph);
      }
    }
    list_add(weighed, {
      gloss,
      strong: property_get(candidate, "strong"),
      testament: property_get(candidate, "testament"),
      original: property_get(candidate, "original"),
      occurrences: property_get(candidate, "occurrences"),
      chapters: property_get(candidate, "chapters"),
      assets: list_take(assets, 6),
      assets_found: assets.length,
      seated,
    });
  }
  return weighed;
}
