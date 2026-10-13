import { bible_glyph_characters_twins_names_walked } from "./bible_glyph_characters_twins_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_characters_twins_baseline_path } from "./bible_glyph_characters_twins_baseline_path.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_glyph_characters_twins_gate_run() {
  "QA gate: no new name in the picture alphabet draws a character another name already draws.";
  "THE OTHER PICTURE GATES COMPARE NAMES, SO A TWIN SLIPS PAST ALL OF THEM. Measured 2026-10-13: four roots in one session were seated on a new name whose character another root already wore - eating, famine, cave, peace - and every gate stayed green while the page drew two words identically.";
  "Measured against the record because fifty-seven twins already stood when this was built. Those are left alone; a twin is cleared by removing one name from the alphabet, and the record then shrinks.";
  "The number handed back is how many characters were compared, not how many were wrong, so a reading that stopped reaching the table shows as a fall in it.";
  let told = bible_glyph_characters_twins_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = bible_glyph_characters_twins_baseline_path();
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these characters are each drawn under two names, so a root seated on one name can read identically to a root seated on the other while every name-based gate stays green - use the name already standing for the character, or choose a different character",
    fn_name("bible_glyph_characters_twins_baseline_write"),
  );
  return r;
}
