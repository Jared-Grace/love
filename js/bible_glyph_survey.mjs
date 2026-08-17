import { bible_glyph_survey_glyph_collisions } from "./bible_glyph_survey_glyph_collisions.mjs";
import { bible_glyph_roots_testament } from "./bible_glyph_roots_testament.mjs";
import { divide } from "./divide.mjs";
import { bible_glyph_referents } from "./bible_glyph_referents.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_survey(testament_name) {
  "What the seed glyph table gets wrong, measured against every word the interlinear actually uses in one testament.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to read and nothing that runs.";
  "This is reconnaissance and not a Bible. Choosing a glyph for every word by hand, one at a time, is a guess repeated thousands of times, and a guess cannot be checked. Running the seed table over the whole text instead turns the question into a measurement: these two roots are asking for the same picture, this one glyph is being asked to carry senses that have nothing to do with each other, and this word is common enough that leaving it undrawn matters. Only where the report names a problem does anyone have to judge anything.";
  "A collision is reported and not resolved. Two roots wanting one glyph may be a mistake, or it may be the truth - two words a reader should feel the kinship between can be drawn alike on purpose - and nothing mechanical can tell those two cases apart. The report says where to look.";
  "Sense spread is the honest measure of whether one picture can stand for one word. A word the interlinear renders the same way almost everywhere has one plain meaning and one glyph will do. A word split evenly between wordings that are not synonyms is a word whose glyph is lying somewhere, and the count says which.";
  "Coverage is counted in OCCURRENCES and not in words, because a table covering five hundred rare words leaves the page looking untranslated while a table covering thirty common ones fills it. The reader meets occurrences.";
  let table_testament = bible_glyph_roots_testament();
  let r = await bible_glyph_survey_glyph_collisions(
    table_testament,
    testament_name,
  );
  let glyph_collisions = property_get(r, "glyph_collisions");
  let occurrences_total = property_get(r, "occurrences_total");
  let occurrences_mapped = property_get(r, "occurrences_mapped");
  let sense_spread = property_get(r, "sense_spread");
  let unmapped = property_get(r, "unmapped");
  let top = property_get(r, "top");
  let r4 = property_get(r, "r4");
  let glyph_missing = property_get(r4, "glyph_missing");
  let mapped = property_get(r4, "mapped");
  let roots = property_get(r4, "roots");
  let percent = divide(top, 10);
  let referents = bible_glyph_referents();
  let referent_reach = [];
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
  let report = {
    testament: testament_name,
    referent_reach,
    roots_count: roots.length,
    words_count: object_property_names(mapped).length,
    coverage: {
      occurrences_mapped,
      occurrences_total,
      percent,
    },
    glyph_missing,
    glyph_collisions,
    sense_spread,
    unmapped_count: unmapped.length,
    unmapped_frequent: unmapped.slice(0, 150),
  };
  return report;
}
