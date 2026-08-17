import { bible_glyph_survey_report } from "./bible_glyph_survey_report.mjs";
import { bible_glyph_survey_referent_reach } from "./bible_glyph_survey_referent_reach.mjs";
import { bible_glyph_survey_referents } from "./bible_glyph_survey_referents.mjs";
import { bible_glyph_survey_glyph_collisions } from "./bible_glyph_survey_glyph_collisions.mjs";
import { bible_glyph_roots_testament } from "./bible_glyph_roots_testament.mjs";
import { property_get } from "./property_get.mjs";
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
  let r2 = bible_glyph_survey_referents(r);
  let r3 = bible_glyph_survey_referent_reach(r2);
  let referent_reach = property_get(r3, "referent_reach");
  let report = bible_glyph_survey_report(
    r3,
    referent_reach,
    testament_name,
    occurrences_total,
    glyph_collisions,
  );
  return report;
}
