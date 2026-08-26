import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_collision_marks_undecided_names_walked } from "./bible_glyph_chapters_collision_marks_undecided_names_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_glyph_chapters_collision_marks_undecided_names() {
  "Just the names of the undecided marks, for the writer that rewrites the record from them.";
  "The writer has no use for how many marks were compared - it is putting a list on disk, and a count it cannot store would only be a number it dropped. The gate does have a use for it, so the count is kept next door and reached for there.";
  arguments_assert(arguments, 0);
  let told =
    await bible_glyph_chapters_collision_marks_undecided_names_walked();
  let names = property_get(told, "offenders");
  return names;
}
