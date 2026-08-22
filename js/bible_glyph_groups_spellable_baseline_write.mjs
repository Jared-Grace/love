import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_groups_spellable_names_walked } from "./bible_glyph_roots_groups_spellable_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_groups_spellable_baseline_path } from "./bible_glyph_groups_spellable_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function bible_glyph_groups_spellable_baseline_write() {
  "Rewrite the record of groups the seated words can already spell side by side from what the tables carry right now. For seeding it once, and for shrinking it after a group has been re-seated onto pictures ordinary words cannot put together - never for blessing a new one, which is the single thing the gate exists to refuse.";
  arguments_assert(arguments, 0);
  let told = bible_glyph_roots_groups_spellable_names_walked();
  let known = property_get(told, "offenders");
  let path = bible_glyph_groups_spellable_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "this group can now be spelled by two ordinary seated words standing side by side and could not before - seat it on a different pair of pictures rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
