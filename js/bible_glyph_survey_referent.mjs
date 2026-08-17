import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_survey_referent(r3, referent_reach) {
  arguments_assert(arguments, 2);
  let percent = property_get(r3, "percent");
  let roots = property_get(r3, "roots");
  let mapped = property_get(r3, "mapped");
  let glyph_missing = property_get(r3, "glyph_missing");
  let unmapped = property_get(r3, "unmapped");
  let sense_spread = property_get(r3, "sense_spread");
  let occurrences_mapped = property_get(r3, "occurrences_mapped");
  let referents = property_get(r3, "referents");
  for (let referent of referents) {
    let overrides = property_exists(mapped, referent.strong)
      ? property_get(mapped, referent.strong).glyph
      : null;
    let by_verses = property_exists(referent, "verses");
    let kind = by_verses ? "verses" : "phrase";
    list_add(referent_reach, {
      strong: referent.strong,
      root: referent.root,
      kind,
      glyph_usually: overrides,
      glyphs: referent.glyphs,
      because: referent.because,
    });
  }
  return {
    percent,
    roots,
    mapped,
    glyph_missing,
    unmapped,
    sense_spread,
    occurrences_mapped,
  };
}
