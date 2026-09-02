import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters_prose_baseline_path } from "./bible_glyph_chapters_prose_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function bible_glyph_chapters_prose_baseline_growth_assert(known) {
  "Refuse to record an offender the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = bible_glyph_chapters_prose_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    text_combine_multiple([
      "recording these as known would bless a new offence rather than repair it - a picture Bible chapter is on the list with no paragraph about it: write one into ",
      fn_name("bible_glyph_chapters"),
      " opening with THE and the chapter place in the list, saying what measurement chose it and what reading overruled the measurement, then run bible_glyph_chapters_prose_baseline_write",
    ]),
  );
}
